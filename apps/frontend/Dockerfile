# syntax=docker/dockerfile:1

FROM node:18-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy source code (required for pnpm workspace resolution)
COPY apps/frontend ./apps/frontend
COPY packages/shared-types ./packages/shared-types

# Install dependencies
RUN pnpm install --no-frozen-lockfile

# Expose port
EXPOSE 5173

# Start Vite dev server
CMD ["pnpm", "--filter", "frontend", "dev", "--host"]
