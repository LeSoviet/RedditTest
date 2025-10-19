# syntax=docker/dockerfile:1

FROM node:18-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace configuration
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy package.json files for all workspaces
COPY apps/backend/package.json ./apps/backend/
COPY packages/shared-types/package.json ./packages/shared-types/

# Install dependencies
FROM base AS deps
RUN pnpm install --frozen-lockfile

# Development stage
FROM deps AS development

# Copy source code
COPY apps/backend ./apps/backend
COPY packages/shared-types ./packages/shared-types

# Generate Prisma Client
RUN pnpm --filter backend prisma:generate

# Expose backend port
EXPOSE 3000

# Start development server
CMD ["pnpm", "--filter", "backend", "dev"]
