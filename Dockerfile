
# Multi-stage Dockerfile for production deployment
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@8

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Production stage - distroless image
FROM gcr.io/distroless/nodejs20-debian12:nonroot

WORKDIR /app

# Copy built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/serve ./node_modules/serve

# Copy minimal package.json for serve
COPY --from=builder /app/package.json ./

# Expose port
EXPOSE 3000

# Use serve to host the static files
CMD ["node_modules/serve/bin/serve.js", "-s", "dist", "-l", "3000"]
