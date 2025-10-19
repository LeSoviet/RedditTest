# Order Management System - AI Agent Instructions

## Project Architecture

This is a **monorepo full-stack TypeScript application** using pnpm workspaces with three main packages:

- `apps/backend` - Express.js API with Prisma + PostgreSQL
- `apps/frontend` - React 19 + Vite SPA
- `packages/shared-types` - Shared Zod schemas and TypeScript types

**Key principle**: End-to-end type safety through shared schemas defined in `packages/shared-types/src/index.ts`.

## Critical Development Patterns

### Type-First Development

- **All data structures start as Zod schemas** in `packages/shared-types`
- TypeScript types are inferred from schemas using `z.infer<typeof SchemaName>`
- Runtime validation happens automatically using these same schemas
- Example: `CreateOrderSchema` → `CreateOrderDTO` type → backend validation → frontend types

### Monorepo Workspace Commands

```bash
# Always run from root - pnpm handles workspace filtering
pnpm dev:backend          # Start Express server on :3000
pnpm dev:frontend         # Start Vite dev server on :5173
pnpm --filter backend prisma:migrate  # DB migrations
pnpm --filter backend prisma:seed     # Seed database
```

### Database Schema Evolution

- Prisma schema in `apps/backend/prisma/schema.prisma`
- **Always update shared types when changing DB schema**
- Migration workflow: schema → `prisma migrate dev` → update `packages/shared-types` → regenerate client

## Frontend Patterns

### React Query Architecture

- Query keys defined in `hooks/useOrders.ts` using factory pattern: `orderKeys.list(filters)`
- Mutations automatically invalidate related queries
- All API calls go through `services/orders.service.ts` which uses the shared types

### State Management

- **No global state** - React Query handles all server state
- Form state managed by React Hook Form with Zod validation
- URL state for pagination/filtering via React Router

## Backend Patterns

### Controller Structure

- Controllers in `apps/backend/src/controllers/` handle HTTP concerns only
- Direct Prisma calls (no repository layer for this simple domain)
- Error handling via centralized middleware in `middleware/errorHandler.ts`
- All request/response types come from `@shared/types`

### API Design

- RESTful endpoints following the pattern: `GET /api/orders?page=1&status=pending`
- Pagination always server-side with configurable page_size (max 100)
- Consistent response format: `{ success: true, data: T }` or `{ success: false, error: {...} }`

## Development Workflow

### Starting Development

1. Ensure PostgreSQL is running
2. Copy `.env.example` to `.env` in both apps if needed
3. From root: `pnpm dev:backend` then `pnpm dev:frontend`
4. Backend auto-restarts on changes (tsx watch), frontend has HMR

### Adding New Features

1. **Define types first** in `packages/shared-types`
2. Add Prisma schema changes if needed
3. Create/update API endpoints in backend
4. Add React Query hooks for frontend data fetching
5. Build UI components consuming the hooks

### Common Gotchas

- The Vite override in root `package.json` uses `rolldown-vite@7.1.14` instead of standard Vite
- Prisma client must be regenerated after schema changes: `pnpm --filter backend prisma:generate`
- Shared types package auto-linked via `workspace:*` - changes are immediately available
- If TypeScript can't find Prisma types, run `pnpm --filter backend prisma:generate`
- Frontend uses custom `vite-env.d.ts` for Vite client types due to rolldown-vite override

## Troubleshooting

### TypeScript Errors

- **PrismaClient not found**: Run `pnpm --filter backend prisma:generate`
- **Vite client types missing**: Ensure `src/vite-env.d.ts` exists in frontend
- **pnpm virtual store conflicts**: Run `pnpm install` from project root

## External Integrations

- **Postman collection** included in `postman/` directory for API testing
- Database connection via Prisma with connection pooling
- CORS configured for local development (frontend :5173 → backend :3000)
