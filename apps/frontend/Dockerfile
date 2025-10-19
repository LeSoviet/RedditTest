# syntax=docker/dockerfile:1

FROM node:18-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace configuration
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy package.json files for all workspaces
COPY apps/frontend/package.json ./apps/frontend/
COPY packages/shared-types/package.json ./packages/shared-types/

# Install dependencies
FROM base AS deps
RUN pnpm install --frozen-lockfile

# Development stage
FROM deps AS development

# Copy source code
COPY apps/frontend ./apps/frontend
COPY packages/shared-types ./packages/shared-types

# Expose frontend port
EXPOSE 5173

# Start Vite dev server with --host to allow external connections
CMD ["pnpm", "--filter", "frontend", "dev", "--host"]
