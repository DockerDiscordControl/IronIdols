# Development Dockerfile for Iron Idols Website
FROM node:20-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./

RUN npm install

# Copy entire codebase
COPY . .

# Port for Vite Dev Server (internal)
EXPOSE 5173

# Start Vite Dev Server
CMD ["npm", "run", "dev"]
