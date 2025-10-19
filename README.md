# RedditTest

![Ux4WithLogs](https://github.com/user-attachments/assets/795d232f-8f23-42a5-8541-5cc1c020600d)
---

![Ux3WithLogs](https://github.com/user-attachments/assets/04b7b664-2993-48ca-be7d-c0e150da2d7d)
---

![Ux2WithLogs](https://github.com/user-attachments/assets/a8d316c6-72ec-4665-ba10-15cfebbfcd5e)
---

<img width="1920" height="937" alt="Ux2" src="https://github.com/user-attachments/assets/dd8de0d6-656f-4b70-b2f9-76528a3d1b57" />
---

![Ux1](https://github.com/user-attachments/assets/2cb7114d-fd30-4b79-a7d4-377f41ca81a9)
---

![Postman2](https://github.com/user-attachments/assets/a2f3739e-4056-45fa-b620-db587aab1bc2)
---

![Postman1](https://github.com/user-attachments/assets/0d710c82-2da1-4163-99b4-5b57c7c38288)
---

![Docker](https://github.com/user-attachments/assets/d65966a4-3891-414e-b3f3-280e31787b4c)
---

![FrontTests](https://github.com/user-attachments/assets/e6f37e34-c37b-4ae4-921c-c15eea1d435e)
---

![BackTests](https://github.com/user-attachments/assets/f76401d0-c6aa-4609-9dab-0be322fd88e0)



# 🚀 Full-Stack Order Management System

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1-61dafb?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue?logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.3-2D3748?logo=prisma)](https://www.prisma.io/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)

A modern, production-ready order management application built with **TypeScript**, **React 19**, **Express**, **Prisma**, and **PostgreSQL**. Features complete CRUD operations, pagination, filtering, end-to-end type safety, and professional UX patterns.

---

## 📋 Table of Contents

- [Quick Start with Docker](#-quick-start-with-docker-recommended)
- [Quick Start (Manual Setup)](#-quick-start-manual-setup)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Development](#-development)
- [Testing](#-testing)
- [API Documentation](#-api-documentation)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)

---

## 🐳 Quick Start with Docker (Recommended)

The easiest way to run this project is using Docker Compose. **No need to install PostgreSQL, Node.js, or pnpm manually!**

### Prerequisites

- **Docker Desktop** installed and running
- **~3GB free disk space** for images and volumes

### Start the Application

```bash
# Clone the repository
git clone <repository-url>
cd RedditTest

# Start all services (PostgreSQL + Backend + Frontend)
docker-compose up --build
```

**That's it!** 🎉 The application will be available at:

- 🎨 **Frontend**: http://localhost:5173
- 🚀 **Backend API**: http://localhost:3000
- 🗄️ **PostgreSQL**: localhost:5432 (managed by Docker)

The database will be **automatically migrated and seeded** on first run with 10 sample orders.

### Essential Commands

```bash
# Start (first time or after changes)
docker-compose up --build

# Stop (keeps data)
docker-compose down

# View logs
docker-compose logs -f backend

# Run tests
docker-compose exec backend pnpm --filter backend test

# Reset database (⚠️ deletes all data)
docker-compose down -v && docker-compose up -d
```

### 💾 Data Persistence
- ✅ `docker-compose down` → **Keeps** database data
- ❌ `docker-compose down -v` → **Deletes** database data
- First startup auto-seeds 10 sample orders
- Data persists between restarts

### Hot Reload in Docker

All source code directories are mounted as volumes, so changes to your code will trigger automatic reloads:

- ✅ Backend: `tsx` watch mode automatically restarts on file changes
- ✅ Frontend: Vite HMR (Hot Module Replacement) updates instantly
- ✅ Shared Types: Changes reflect immediately in both apps

---

## 💻 Quick Start (Manual Setup)

If you prefer to run without Docker, follow these steps:

## ✨ Features

### Core Functionality
- ✅ **Full CRUD Operations** - Create, Read, Update, Delete orders
- ✅ **Server-side Pagination** - Efficient data loading with configurable page size
- ✅ **Status Filtering** - Filter orders by PENDING, COMPLETED, or CANCELLED status
- ✅ **Real-time Validation** - Zod schemas validate data on both client and server
- ✅ **End-to-end Type Safety** - Shared types between frontend and backend

### User Experience
- ✅ **Toast Notifications** - Professional feedback for all actions
- ✅ **Status Badges** - Color-coded badges (🟡 Pending, 🟢 Completed, 🔴 Cancelled)
- ✅ **Delete Confirmation** - Modal dialog prevents accidental deletions
- ✅ **Loading States** - Clear feedback during async operations
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Responsive Design** - Mobile-friendly UI with TailwindCSS

### Technical Excellence
- ✅ **Monorepo Architecture** - pnpm workspaces with shared types
- ✅ **React Query** - Automatic caching, optimistic updates, cache invalidation
- ✅ **Type-First Development** - Zod schemas generate TypeScript types
- ✅ **Testing** - 15 tests total (10 backend + 5 frontend)
- ✅ **Code Quality** - ESLint, Prettier, and strict TypeScript

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js 18+ with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL 14+ with Prisma ORM
- **Validation**: Zod (runtime validation + types)
- **Testing**: Jest + Supertest (10 tests)

### Frontend
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: React Query (server state)
- **Forms**: React Hook Form + Zod resolver
- **Notifications**: React Hot Toast
- **Testing**: Vitest + React Testing Library (5 tests)

### Shared
- **Monorepo**: pnpm workspaces
- **Types**: Shared Zod schemas in `@shared/types`
- **Code Quality**: ESLint + Prettier

---

## � Quick Start (Manual Setup)

### Prerequisites
- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0
- **PostgreSQL** >= 14 (running locally)

### 1. Clone & Install

```bash
git clone <repository-url>
cd RedditTest
pnpm install
```

### 2. Setup Environment Variables

**Backend** (`apps/backend/.env`):

```bash
# Copy example file
cp apps/backend/.env.example apps/backend/.env
```

Edit with your PostgreSQL credentials:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/orders_db?schema=public"
PORT=3000
NODE_ENV=development
```

**Frontend** (`apps/frontend/.env`):

```bash
# Copy example file
cp apps/frontend/.env.example apps/frontend/.env
```

Default values should work:

```env
VITE_API_URL=http://localhost:3000/api
```

### 3. Setup Database

```bash
# Generate Prisma client
pnpm --filter backend prisma:generate

# Run migrations (creates tables)
pnpm --filter backend prisma:migrate dev

# (Optional) Seed database
pnpm --filter backend prisma:seed
```

### 4. Start Development Servers

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

> **Note:** The backend automatically seeds the database with 10 sample orders on first run if the database is empty.

---

## 💻 Development

> **💡 Tip:** If using Docker, replace `pnpm` commands with `docker-compose exec <service>` (e.g., `docker-compose exec backend pnpm --filter backend test`)

### Quick Command Reference

```bash
# Development (Manual)
pnpm dev:backend                              # Start backend (auto-seeds if empty)
pnpm dev:frontend                             # Start frontend

# Development (Docker)
docker-compose up                             # Start all services
docker-compose up -d                          # Start in background
docker-compose logs -f backend                # View backend logs

# Testing (Manual)
pnpm --filter backend test                    # Run backend tests (10 tests)
pnpm --filter frontend test --run             # Run frontend tests (5 tests)

# Testing (Docker)
docker-compose exec backend pnpm --filter backend test
docker-compose exec frontend pnpm --filter frontend test --run

# Database (Manual)
pnpm --filter backend prisma:studio           # Open database GUI (port 5555)
pnpm --filter backend prisma:generate         # Regenerate Prisma client
pnpm --filter backend prisma:migrate dev      # Create new migration
pnpm --filter backend prisma:seed             # Manual seed
pnpm --filter backend prisma:migrate reset    # ⚠️ Reset database (deletes all data)

# Database (Docker)
docker-compose exec backend pnpm --filter backend prisma:studio
docker-compose exec backend pnpm --filter backend prisma:generate

# Build
pnpm --filter backend build                   # Build backend
pnpm --filter frontend build                  # Build frontend
```

### Database Management

**Prisma Studio** - Visual database editor:

```bash
pnpm --filter backend prisma:studio
```

Opens at http://localhost:5555

**Seeding Behavior:**
- Seed script checks if data exists before inserting
- Only seeds if database is empty
- To reseed: `pnpm --filter backend prisma:migrate reset`

---

## 🧪 Testing

### Run Tests

```bash
# Backend tests (Jest + Supertest)
pnpm --filter backend test

# Frontend tests (Vitest + React Testing Library)
pnpm --filter frontend test --run

# All tests
pnpm --filter backend test && pnpm --filter frontend test --run
```

### Test Coverage

**Backend (10 tests):**
- ✅ Pagination with metadata
- ✅ Order creation with validation
- ✅ Order retrieval by ID
- ✅ Status filtering
- ✅ Error handling (404, 400, validation)

**Frontend (5 tests):**
- ✅ Component rendering
- ✅ Loading states
- ✅ React Query hook initialization

### API Testing with Postman

1. Import `postman/Order_Management_API.postman_collection.json`
2. Import `postman/Order_Management_Dev.postman_environment.json`
3. Select "Order Management - Development" environment
4. Run collection to test all endpoints

---

## 📖 API Documentation

### Endpoints

| Method   | Endpoint          | Description               | Query Parameters              |
| -------- | ----------------- | ------------------------- | ----------------------------- |
| `GET`    | `/health`         | Health check              | -                             |
| `GET`    | `/api/orders`     | Get paginated orders      | `page`, `page_size`, `status` |
| `GET`    | `/api/orders/:id` | Get order by ID           | -                             |
| `POST`   | `/api/orders`     | Create new order          | -                             |
| `PUT`    | `/api/orders/:id` | Update order              | -                             |
| `DELETE` | `/api/orders/:id` | Delete order              | -                             |

### Query Parameters

- **page** - Page number (default: 1)
- **page_size** - Items per page (default: 10, max: 100)
- **status** - Filter by status: `PENDING`, `COMPLETED`, or `CANCELLED`

### Example Requests

#### Get All Orders (Paginated)
```bash
GET http://localhost:3000/api/orders?page=1&page_size=10
```

#### Filter by Status
```bash
GET http://localhost:3000/api/orders?status=PENDING
```

#### Create Order
```bash
POST http://localhost:3000/api/orders
Content-Type: application/json

{
  "customer_name": "John Doe",
  "item": "MacBook Pro",
  "quantity": 2,
  "status": "PENDING"
}
```

#### Update Order
```bash
PUT http://localhost:3000/api/orders/{id}
Content-Type: application/json

{
  "status": "COMPLETED"
}
```

#### Delete Order
```bash
DELETE http://localhost:3000/api/orders/{id}
```

### Response Format

**Success Response:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "message": "Error message",
    "code": "ERROR_CODE",
    "details": { ... }
  }
}
```

---

## 🏗️ Architecture

### Monorepo Structure

```
RedditTest/
├── apps/
│   ├── backend/              # Express.js API + Prisma ORM
│   │   ├── src/
│   │   │   ├── controllers/  # HTTP request handlers
│   │   │   ├── middleware/   # Error handling, validation
│   │   │   ├── routes/       # API route definitions
│   │   │   └── __tests__/    # Integration tests
│   │   └── prisma/
│   │       ├── schema.prisma # Database schema
│   │       └── seed.ts       # Database seeding
│   └── frontend/             # React 19 + Vite SPA
│       └── src/
│           ├── components/   # Reusable UI components
│           ├── pages/        # Route pages
│           ├── hooks/        # React Query hooks
│           └── services/     # API client
├── packages/
│   └── shared-types/         # Shared Zod schemas & TypeScript types
└── postman/                  # API testing collection
```

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

**Result:** Change validation once, get runtime safety + TypeScript types everywhere. No drift between frontend and backend.

### Key Architectural Decisions

#### Why Monorepo?
- Shared types eliminate duplication
- Single source of truth for validation
- Changes instantly available across apps

#### Why Zod?
- Runtime validation catches errors at API boundaries
- TypeScript types auto-generated from schemas
- Single schema for validation + types

#### Why React Query?
- Automatic caching reduces API calls
- Optimistic updates for instant UI feedback
- Cache invalidation keeps data fresh
- Replaces Redux/Zustand for server state

#### Why Prisma?
- Type-safe database access prevents SQL errors
- Automatic migrations track schema changes
- Generated client provides autocomplete

#### Why No Repository Layer?
- Simple domain (single entity) doesn't need abstraction
- Prisma calls are clear and type-safe
- Easy to refactor when complexity grows

---

## 📁 Project Structure

### Backend Organization

```
apps/backend/src/
├── index.ts                  # Express app setup + middleware
├── controllers/
│   └── orders.controller.ts  # Order CRUD logic
├── middleware/
│   ├── errorHandler.ts       # Centralized error handling
│   └── validateUUID.ts       # UUID validation middleware
├── routes/
│   └── orders.routes.ts      # Route definitions
└── __tests__/
    ├── setup.ts              # Test configuration
    └── orders.test.ts        # Integration tests
```

### Frontend Organization

```
apps/frontend/src/
├── main.tsx                  # App entry point
├── App.tsx                   # Router setup
├── components/
│   ├── ConfirmDialog.tsx     # Delete confirmation modal
│   ├── Layout.tsx            # Page layout wrapper
│   └── StatusBadge.tsx       # Status display component
├── pages/
│   ├── OrdersListPage.tsx    # List view with pagination
│   ├── OrderDetailsPage.tsx  # Single order view
│   ├── CreateOrderPage.tsx   # Create form
│   └── EditOrderPage.tsx     # Edit form
├── hooks/
│   └── useOrders.ts          # React Query hooks
├── services/
│   └── orders.service.ts     # API client
└── lib/
    └── api.ts                # Axios configuration
```

### Shared Types

```typescript
// packages/shared-types/src/index.ts

// Schemas (validation + types)
export const OrderStatusSchema = z.enum(['PENDING', 'COMPLETED', 'CANCELLED']);
export const CreateOrderSchema = z.object({ ... });
export const UpdateOrderSchema = z.object({ ... });

// Types (inferred from schemas)
export type OrderStatus = z.infer<typeof OrderStatusSchema>;
export type CreateOrderDTO = z.infer<typeof CreateOrderSchema>;
export type Order = { ... };
export type ApiResponse<T> = { ... };
```

---

## 🎯 Requirements Checklist

### ✅ Core Requirements (100%)

**Backend:**
- ✅ All CRUD endpoints (POST, GET, PUT, DELETE)
- ✅ Order structure with UUID, customer_name, item, quantity, status, created_at
- ✅ Pagination support with page and page_size
- ✅ Node.js + TypeScript + Express
- ✅ PostgreSQL database with Prisma ORM

**Frontend:**
- ✅ Order list view with pagination
- ✅ Order details view
- ✅ Create/Edit order forms
- ✅ Delete functionality
- ✅ Loading and error states
- ✅ TypeScript + React 19

### ⭐ Bonus Features (100%)

- ✅ Status filtering (backend + frontend)
- ✅ Comprehensive testing (15 tests)
- ✅ Shared types monorepo setup
- ✅ Comprehensive documentation
- ✅ ESLint + Prettier configuration
- ✅ Professional error handling
- ✅ Toast notifications
- ✅ Postman collection
- ✅ **Docker setup for easy local development** 🐳

---

## 🚨 Important Notes

### Docker vs Manual Setup
- **Docker**: Zero configuration, all dependencies included, consistent environment
- **Manual**: More control, faster iterative development, requires PostgreSQL installation

### Prisma Client Generation
After modifying `prisma/schema.prisma`, always regenerate the client:

```bash
# Manual
pnpm --filter backend prisma:generate

# Docker
docker-compose exec backend pnpm --filter backend prisma:generate
```

**Symptom of missing generation:** `Property 'order' does not exist on type 'PrismaClient'`

### Workspace Linking
Shared types use `workspace:*` protocol. Changes are immediately available without reinstalling.

If you see stale types:
```bash
pnpm install  # Rebuild workspace links
```

### Auto-Seeding
The backend checks if the database is empty and automatically seeds on first run. Manual seeding only needed after database reset.

### Docker Hot Reload
Changes to source files automatically trigger reloads:
- **Backend**: `tsx` watch mode restarts on changes
- **Frontend**: Vite HMR updates instantly
- **Shared Types**: Changes reflect immediately in both apps

### Vite Configuration
This project uses `rolldown-vite@7.1.14` (specified in root `package.json` overrides). If you encounter Vite type errors, ensure `apps/frontend/src/vite-env.d.ts` exists.

---

## 📚 Additional Resources

- **Prisma Studio**: Visual database editor at http://localhost:5555
- **Postman Collection**: Pre-configured API tests in `/postman` directory
- **Type Definitions**: All schemas in `packages/shared-types/src/index.ts`

---

## 🤝 Contributing

This is a technical challenge project. For questions or issues, please open a GitHub issue.





