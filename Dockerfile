# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY index.html vite.config.js ./
COPY src ./src
RUN npm run build && \
    ls -la && \
    test -d dist && \
    ls -la dist/ && \
    echo "Build successful!"

# Production stage
FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY server.js app.js ./
COPY data ./data
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "server.js"]
