# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source files needed for build
COPY index.html ./
COPY vite.config.js ./
COPY public ./public
COPY src ./src

# Build the React application
RUN npm run build

# Production stage
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy server files
COPY server.js ./
COPY app.js ./

# Copy data directory (for variant tracking)
COPY data ./data

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Create data directory if it doesn't exist (for runtime)
RUN mkdir -p /app/data

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV NODE_ENV=production

# Start the server
CMD ["node", "server.js"]
