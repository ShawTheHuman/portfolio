FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY index.html ./
COPY vite.config.js ./
COPY src ./src
COPY server.js ./
COPY data ./data

RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]
