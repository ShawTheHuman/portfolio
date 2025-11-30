# Use Node.js LTS version as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Install vite as dev dependency (needed for build)
RUN npm install --save-dev vite @vitejs/plugin-react

# Copy application files
COPY . .

# Build the React application
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable
ENV PORT=3000
ENV NODE_ENV=production

# Start the server
CMD ["node", "server.js"]
