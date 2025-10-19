# 🚀 Full-Stack Order Management System

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-blue?logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.3-2D3748?logo=prisma)](https://www.prisma.io/)

A modern, production-ready order management application built with **TypeScript**, **React 19**, **Express**, **Prisma**, and **PostgreSQL**. Features complete CRUD operations, pagination, filtering, end-to-end type safety, toast notifications, and professional UX patterns.

---

## 📋 Quick Command Reference

### Initial Setup (Run Once)
```bash
# Install dependencies
pnpm install

# Generate Prisma client
pnpm --filter backend prisma:generate

# Run database migrations
pnpm --filter backend prisma:migrate dev

# (Optional) Seed database - auto-runs on first 'pnpm dev:backend'
pnpm --filter backend prisma:seed
```

### Daily Development
```bash
# Terminal 1 - Start backend (port 3000)
# ✨ Auto-seeds database if empty on first run
pnpm dev:backend

# Terminal 2 - Start frontend (port 5173)
pnpm dev:frontend
```

**Note**: The backend automatically checks if the database is empty and seeds it with 10 sample orders on the first run. No manual seeding required!

### Testing
```bash
# Run backend tests (Jest + Supertest)
pnpm --filter backend test

# Run frontend tests (Vitest + React Testing Library)
pnpm --filter frontend test --run

# Run all tests
pnpm --filter backend test && pnpm --filter frontend test --run
```

### Database Management
```bash
# Open Prisma Studio (Database GUI)
pnpm --filter backend prisma:studio

# Manually seed database (only needed if you reset it)
pnpm --filter backend prisma:seed

# Reset database (⚠️ deletes all data, will auto-seed on next dev run)
pnpm --filter backend prisma:migrate reset
```

---

## ⚡ Detailed Setup Guide

### Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0
- **PostgreSQL** >= 14 (must be running)

### 1. Clone & Install

```bash
git clone <repository-url>
cd RedditTest
pnpm install
```

### 2. Setup Environment Variables

Create environment files from the examples:

**Backend** (`apps/backend/.env`):

```bash
# Copy the example file
cp apps/backend/.env.example apps/backend/.env
```

Edit `apps/backend/.env` with your PostgreSQL credentials:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/orders_db?schema=public"
PORT=3000
NODE_ENV=development
```

**Frontend** (`apps/frontend/.env`):

```bash
# Copy the example file
cp apps/frontend/.env.example apps/frontend/.env
```

The default values should work:

```env
VITE_API_URL=http://localhost:3000/api
```

### 3. Setup Database

```bash
# Generate Prisma client
pnpm --filter backend prisma:generate

# Create database and run migrations (creates tables)
pnpm --filter backend prisma:migrate dev

# Seed database with sample data (optional - only if database is empty)
pnpm --filter backend prisma:seed
```

### 4. Run Application

**Terminal 1 - Backend:**

```bash
pnpm dev:backend
```

🚀 Backend: http://localhost:3000

**Terminal 2 - Frontend:**

```bash
pnpm dev:frontend
```

🎨 Frontend: http://localhost:5173

> **Note:** Your data persists in PostgreSQL. The seed script only adds data if the database is empty. To reset the database, use: `pnpm --filter backend prisma:migrate reset`

### 5. View Database (Optional)

Open **Prisma Studio** to view and edit your database visually:

```bash
pnpm --filter backend prisma:studio
```

🗄️ Prisma Studio: http://localhost:5555

---

## ✨ Features

### Core Functionality
- ✅ **Full CRUD Operations** - Create, Read, Update, Delete orders
- ✅ **Server-side Pagination** - Efficient data loading with configurable page size
- ✅ **Status Filtering** - Filter orders by PENDING, COMPLETED, or CANCELLED status
- ✅ **Real-time Validation** - Zod schemas validate data on both client and server
- ✅ **End-to-end Type Safety** - Shared types between frontend and backend

### User Experience
- ✅ **Toast Notifications** - Professional feedback for all actions (create, update, delete)
- ✅ **Status Badges** - Color-coded badges (🟡 Pending, 🟢 Completed, 🔴 Cancelled)
- ✅ **Delete Confirmation** - Modal dialog prevents accidental deletions
- ✅ **Loading States** - Clear feedback during async operations
- ✅ **Error Handling** - User-friendly error messages with toast notifications
- ✅ **Responsive Design** - Mobile-friendly UI with TailwindCSS

### Technical Excellence
- ✅ **Monorepo Architecture** - pnpm workspaces with shared types
- ✅ **React Query** - Automatic caching, optimistic updates, and cache invalidation
- ✅ **Type-First Development** - Zod schemas generate TypeScript types
- ✅ **Testing** - 10 backend tests (Jest) + 5 frontend tests (Vitest)
- ✅ **Code Quality** - ESLint, Prettier, and strict TypeScript configuration

---

## 🏗️ Architecture

### Monorepo Structure

```
apps/
├── backend/          # Express.js API + Prisma ORM
│   ├── src/
│   │   ├── controllers/   # HTTP request handlers
│   │   ├── middleware/    # Error handling, validation
│   │   ├── routes/        # API route definitions
│   │   └── __tests__/     # Integration tests
│   └── prisma/
│       ├── schema.prisma  # Database schema
│       └── seed.ts        # Database seeding
├── frontend/         # React 19 + Vite SPA
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Route pages
│   │   ├── hooks/         # React Query hooks
│   │   └── services/      # API client
packages/
├── shared-types/     # Shared Zod schemas & TypeScript types
postman/              # API testing collection & environment
```

### Tech Stack

**Backend:**
- Node.js + TypeScript
- Express.js (REST API)
- Prisma ORM (PostgreSQL)
- Zod (validation)
- Jest + Supertest (testing)

**Frontend:**
- React 19 + TypeScript
- Vite (build tool)
- TailwindCSS (styling)
- React Query (server state)
- React Hook Form + Zod (forms)
- React Hot Toast (notifications)
- Vitest + React Testing Library (testing)

**Shared:**
- pnpm workspaces
- Shared Zod schemas
- ESLint + Prettier

---

## 📋 API Endpoints

| Method   | Endpoint          | Description               |
| -------- | ----------------- | ------------------------- |
| `GET`    | `/health`         | Health check              |
| `GET`    | `/api/orders`     | Get paginated orders      |
| `GET`    | `/api/orders/:id` | Get order by ID           |
| `POST`   | `/api/orders`     | Create new order          |
| `PUT`    | `/api/orders/:id` | Update order              |
| `DELETE` | `/api/orders/:id` | Delete order              |

### Query Parameters

- `page` - Page number (default: 1)
- `page_size` - Items per page (default: 10, max: 100)
- `status` - Filter by status (`PENDING`, `COMPLETED`, `CANCELLED`)

### Example Requests

```bash
# Health check
GET http://localhost:3000/health

# Get all orders (paginated)
GET http://localhost:3000/api/orders?page=1&page_size=10

# Filter by status
GET http://localhost:3000/api/orders?status=PENDING

# Create order
POST http://localhost:3000/api/orders
Content-Type: application/json
{
  "customer_name": "John Doe",
  "item": "MacBook Pro",
  "quantity": 2,
  "status": "PENDING"
}

# Update order
PUT http://localhost:3000/api/orders/{id}
Content-Type: application/json
{
  "status": "COMPLETED"
}

# Delete order
DELETE http://localhost:3000/api/orders/{id}
```

---

## 🧪 Testing

### Automated Tests

```bash
# Backend tests (10 tests - 100% passing)
pnpm --filter backend test

# Frontend tests (5 tests - 100% passing)
pnpm --filter frontend test --run
```

**Backend Test Coverage:**
- ✅ Pagination with metadata
- ✅ Order creation with validation
- ✅ Order retrieval by ID
- ✅ Status filtering
- ✅ Error handling (404, 400, validation)

**Frontend Test Coverage:**
- ✅ Component rendering
- ✅ Loading states
- ✅ React Query hook initialization

### API Testing with Postman

1. Import `postman/Order_Management_API.postman_collection.json`
2. Import `postman/Order_Management_Dev.postman_environment.json`
3. Select "Order Management - Development" environment
4. Click **Run** → Run all tests automatically ✅

---

## 🛠️ Development Commands

### Database Operations

```bash
# Generate Prisma client (run after schema changes)
pnpm --filter backend prisma:generate

# Create new migration
pnpm --filter backend prisma:migrate dev --name migration_name

# Reset database and reseed (⚠️ deletes all data)
pnpm --filter backend prisma:migrate reset

# Seed database manually
pnpm --filter backend prisma:seed

# Open Prisma Studio (Database GUI)
pnpm --filter backend prisma:studio
```

### Build for Production

```bash
# Build backend
pnpm --filter backend build

# Build frontend
pnpm --filter frontend build
```

### Code Quality

```bash
# Lint all workspaces
pnpm lint

# Format code with Prettier
pnpm format

# Check TypeScript errors
pnpm --filter backend tsc --noEmit
pnpm --filter frontend tsc --noEmit
```

---

## 🎯 Key Technical Decisions

### Why Monorepo?
- **Shared types** between frontend and backend eliminate drift
- **Single source of truth** for validation schemas (Zod)
- **Faster development** - changes to shared types instantly available

### Why Zod?
- **Runtime validation** catches errors at API boundaries
- **TypeScript types** auto-generated from schemas
- **Better DX** - single schema for validation + types

### Why React Query?
- **Automatic caching** reduces API calls
- **Optimistic updates** for instant UI feedback
- **Cache invalidation** keeps data fresh
- **No global state needed** - replaces Redux/Zustand

### Why Prisma?
- **Type-safe database access** prevents SQL errors
- **Automatic migrations** track schema changes
- **Generated client** provides autocomplete and type checking

### Why Direct Prisma Calls (No Repository Layer)?
- **Simple domain** (single entity) doesn't need abstraction
- **Clear code** - Prisma calls are readable and type-safe
- **Easy refactoring** - add repositories when complexity grows

---

## 🚨 Important Notes

### Database Seeding
- The seed script checks if data exists before inserting
- **It only seeds if the database is empty**
- To reseed: `pnpm --filter backend prisma:migrate reset`

### Prisma Client
- Must regenerate after schema changes: `pnpm --filter backend prisma:generate`
- If you see "Property 'order' does not exist on type 'PrismaClient'", run generate

### Workspace Linking
- Shared types use `workspace:*` protocol
- Changes are immediately available without reinstalling
- If you see stale types: `pnpm install` (rebuilds workspace links)

### Vite Override
- Root `package.json` uses `rolldown-vite@7.1.14` instead of standard Vite
- If frontend has Vite type errors, ensure `apps/frontend/src/vite-env.d.ts` exists

---

## 📚 Project Structure Details

### Type-First Development Flow

1. **Define Zod schema** in `packages/shared-types/src/index.ts`:
   ```typescript
   export const CreateOrderSchema = z.object({
     customer_name: z.string().min(1).max(255),
     quantity: z.number().int().positive(),
     status: OrderStatusSchema
   });
   ```

2. **Infer TypeScript type**:
   ```typescript
   export type CreateOrderDTO = z.infer<typeof CreateOrderSchema>;
   ```

3. **Backend validates** with same schema:
   ```typescript
   const validated = CreateOrderSchema.parse(req.body);
   ```

4. **Frontend uses** without duplication:
   ```typescript
   import { CreateOrderDTO } from '@shared/types';
   const orderData: CreateOrderDTO = { ... };
   ```

**Result:** Change validation once, get runtime safety + TypeScript types everywhere.

---

## 🎯 Requirements Checklist ✅

### Backend Requirements
- ✅ All CRUD endpoints (`POST`, `GET`, `PUT`, `DELETE`)
- ✅ Order structure with all required fields
- ✅ Pagination support with metadata
- ✅ Node.js + TypeScript + Express
- ✅ PostgreSQL database with Prisma ORM

### Frontend Requirements
- ✅ Order list view with pagination
- ✅ Order details view
- ✅ Create/Edit order forms
- ✅ Delete functionality with confirmation
- ✅ Loading and error states
- ✅ TypeScript + React 19

### Bonus Features Implemented
- ✅ **Status filtering** (backend & frontend)
- ✅ **Shared types** between frontend and backend
- ✅ **Toast notifications** for user feedback
- ✅ **Status badges** with color coding
- ✅ **Delete confirmation** modal
- ✅ **Comprehensive testing** (15 tests total)
- ✅ **Comprehensive documentation**
- ✅ **ESLint/Prettier** configuration
- ✅ **Postman collection** for API testing

---

## 🎨 UI/UX Features

### Professional User Experience
- **Toast Notifications**: Success/error feedback for all actions
- **Color-coded Status Badges**: 
  - 🟡 Pending (yellow)
  - 🟢 Completed (green)
  - 🔴 Cancelled (red)
- **Confirmation Dialogs**: Prevent accidental data deletion
- **Loading States**: Clear feedback during async operations
- **Error Handling**: User-friendly error messages
- **Responsive Design**: Works on desktop, tablet, and mobile

---

## 📖 Additional Resources

- **Prisma Studio**: Visual database management at `http://localhost:5555`
- **Postman Collection**: Pre-configured API tests in `/postman` directory
- **Type Definitions**: Shared schemas in `packages/shared-types/src/index.ts`
- **API Documentation**: See Postman collection for detailed examples

---

## 🤝 Contributing

This is a technical challenge project. For questions or issues, please open a GitHub issue.

---

Built with ❤️ using TypeScript, React 19, Node.js, Express, PostgreSQL, Prisma, and modern web development best practices.
