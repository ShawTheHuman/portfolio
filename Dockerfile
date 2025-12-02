# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN echo "=== Installing dependencies for build ===" && \
    npm ci && \
    echo "✓ Dependencies installed successfully" || \
    (echo "✗ ERROR: Failed to install dependencies" && \
    echo "Check package.json and package-lock.json for issues" && \
    exit 1)

# Copy source files needed for build
COPY index.html ./
COPY vite.config.js ./
COPY public ./public
COPY src ./src

# Verify required files exist
RUN echo "=== Verifying build files ===" && \
    test -f index.html || (echo "✗ ERROR: index.html not found" && exit 1) && \
    test -f vite.config.js || (echo "✗ ERROR: vite.config.js not found" && exit 1) && \
    test -d src || (echo "✗ ERROR: src directory not found" && exit 1) && \
    echo "✓ All required files present"

# Build the React application
RUN echo "=== Building React application ===" && \
    npm run build && \
    echo "✓ Build completed successfully" || \
    (echo "✗ ERROR: Build failed" && \
    echo "Check vite.config.js and source files for errors" && \
    exit 1)

# Verify build output
RUN echo "=== Verifying build output ===" && \
    test -d dist || (echo "✗ ERROR: dist directory not created" && exit 1) && \
    test -f dist/index.html || (echo "✗ ERROR: dist/index.html not found" && exit 1) && \
    echo "✓ Build artifacts verified" && \
    ls -lh dist/

# Production stage
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN echo "=== Installing production dependencies ===" && \
    npm ci --only=production && \
    echo "✓ Production dependencies installed successfully" || \
    (echo "✗ ERROR: Failed to install production dependencies" && \
    echo "Check package.json for issues" && \
    exit 1)

# Copy server files
COPY server.js ./
COPY app.js ./

# Verify server files exist
RUN echo "=== Verifying server files ===" && \
    test -f server.js || (echo "✗ ERROR: server.js not found" && exit 1) && \
    test -f app.js || (echo "✗ ERROR: app.js not found" && exit 1) && \
    echo "✓ Server files verified"

# Copy data directory (for variant tracking)
COPY data ./data

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Verify copied build artifacts
RUN echo "=== Verifying copied build artifacts ===" && \
    test -d dist || (echo "✗ ERROR: dist directory not copied from builder" && exit 1) && \
    test -f dist/index.html || (echo "✗ ERROR: dist/index.html not found" && exit 1) && \
    echo "✓ Build artifacts copied successfully" && \
    echo "Dist contents:" && ls -lh dist/

# Create data directory if it doesn't exist (for runtime)
RUN mkdir -p /app/data && \
    echo "✓ Data directory ready"

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV NODE_ENV=production

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

# Start the server
CMD echo "=== Starting production server ===" && \
    echo "Node version: $(node --version)" && \
    echo "NPM version: $(npm --version)" && \
    echo "Environment: $NODE_ENV" && \
    echo "Port: $PORT" && \
    node server.js
