# syntax=docker/dockerfile:1

FROM node:18-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy source code (required for pnpm workspace resolution)
COPY apps/backend ./apps/backend
COPY packages/shared-types ./packages/shared-types

# Install dependencies
RUN pnpm install --no-frozen-lockfile

# Generate Prisma Client
RUN pnpm --filter backend prisma:generate

# Expose port
EXPOSE 3000

# Start server
CMD ["pnpm", "--filter", "backend", "dev"]
