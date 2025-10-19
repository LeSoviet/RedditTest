# 🚀 Full-Stack Order Management System

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-blue?logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.3-2D3748?logo=prisma)](https://www.prisma.io/)

A modern order management application built with **TypeScript**, **React**, **Express**, **Prisma**, and **PostgreSQL**. Features complete CRUD operations, pagination, filtering, and end-to-end type safety.

## ⚡ Quick Start

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
pnpm --filter backend prisma:migrate dev --name init

# Seed database with sample data (optional - only if database is empty)
pnpm --filter backend prisma:seed
```

### 4. Run Application

**Option 1 - Standard (recommended for development):**

**Terminal 1 - Backend:**

```bash
pnpm dev:backend
```

**Terminal 2 - Frontend:**

```bash
pnpm dev:frontend
```

**Option 2 - Backend with auto-seed (first time setup):**

If you want to start the backend and automatically seed the database if empty:

```bash
pnpm --filter backend dev:seed
```

🚀 Backend: http://localhost:3000
🎨 Frontend: http://localhost:5173

> **Note:** Your data persists in PostgreSQL. The seed script only adds data if the database is empty. To reset the database, use: `pnpm --filter backend prisma:migrate reset`

**Terminal 2 - Frontend:**

```bash
pnpm dev:frontend
```

🎨 Frontend: http://localhost:5173

> **Note:** Make sure PostgreSQL is running before starting the backend server!

### 5. View Database (Optional)

Open **Prisma Studio** to view and edit your database visually (like MongoDB Compass):

```bash
pnpm --filter backend prisma:studio
```

🗄️ Prisma Studio: http://localhost:5555

> **Tip:** Prisma Studio provides a user-friendly GUI to browse tables, filter data, edit records, and run queries on your PostgreSQL database.

## 🧪 API Testing

### Postman Collection

1. Import `postman/Order_Management_API.postman_collection.json`
2. Import `postman/Order_Management_Dev.postman_environment.json`
3. Select "Order Management - Development" environment
4. Click **Run** → Run all tests automatically ✅

### Manual API Testing

```bash
# Health check
GET http://localhost:3000/health

# Get all orders
GET http://localhost:3000/api/orders

# Create order
POST http://localhost:3000/api/orders
Content-Type: application/json
{
  "customer_name": "John Doe",
  "item": "MacBook Pro",
  "quantity": 2,
  "status": "PENDING"
}
```

## 🏗️ Architecture

### Monorepo Structure

```
apps/
├── backend/          # Express.js API + Prisma
├── frontend/         # React 19 + Vite
packages/
├── shared-types/     # Shared Zod schemas & TypeScript types
postman/              # API testing collection
```

### Tech Stack

**Backend:** Node.js, Express, TypeScript, Prisma, PostgreSQL, Zod  
**Frontend:** React 19, TypeScript, Vite, TailwindCSS, React Query  
**Shared:** pnpm workspaces, shared types, ESLint, Prettier

### Key Features

✅ **End-to-end type safety** with shared schemas  
✅ **Real-time validation** with Zod  
✅ **Server-side pagination** & filtering  
✅ **Optimistic updates** with React Query  
✅ **Responsive UI** with TailwindCSS  
✅ **Comprehensive error handling**

## 📋 API Endpoints

| Method   | Endpoint          | Description          |
| -------- | ----------------- | -------------------- |
| `GET`    | `/health`         | Health check         |
| `GET`    | `/api/orders`     | Get paginated orders |
| `GET`    | `/api/orders/:id` | Get order by ID      |
| `POST`   | `/api/orders`     | Create new order     |
| `PUT`    | `/api/orders/:id` | Update order         |
| `DELETE` | `/api/orders/:id` | Delete order         |

**Query Parameters:**

- `page` - Page number (default: 1)
- `page_size` - Items per page (default: 10, max: 100)
- `status` - Filter by status (`PENDING`, `COMPLETED`, `CANCELLED`)

## 🛠️ Development

### Fresh Database Setup

If you need to reset your database or set it up from scratch:

```bash
# Drop database and recreate (WARNING: deletes all data)
pnpm --filter backend prisma:migrate reset

# Or manually:
# 1. Generate Prisma client
pnpm --filter backend prisma:generate

# 2. Create and apply migrations
pnpm --filter backend prisma:migrate dev --name init

# 3. Seed with sample data
pnpm --filter backend prisma:seed
```

### Available Scripts

```bash
# Development
pnpm dev:backend              # Start backend server
pnpm dev:frontend             # Start frontend server

# Database
pnpm --filter backend prisma:generate    # Generate Prisma client
pnpm --filter backend prisma:migrate dev # Run migrations (creates new migration)
pnpm --filter backend prisma:migrate reset # Reset database and reseed
pnpm --filter backend prisma:seed        # Seed database
pnpm --filter backend prisma:studio      # Open Prisma Studio

# Build
pnpm build:backend            # Build backend
pnpm build:frontend           # Build frontend

# Code Quality
pnpm lint                     # Lint all workspaces
pnpm format                   # Format code with Prettier
```

### Important Notes

- **Migrations folder is not tracked** - Each developer generates migrations locally
- **`.env` files are gitignored** - Copy from `.env.example` and configure for your environment
- **Prisma client must be regenerated** after schema changes
- First time setup requires running `prisma:generate` before migrations

### Project Structure Details

- **`packages/shared-types`** - Single source of truth for all data structures
- **Type-first development** - Zod schemas → TypeScript types → Runtime validation
- **React Query** - Server state management with automatic caching
- **Prisma** - Type-safe database access with auto-generated client

## 🎯 Challenge Requirements ✅

All requirements from the technical challenge have been implemented:

**Backend Requirements:**

- ✅ All CRUD endpoints (`POST`, `GET`, `PUT`, `DELETE`)
- ✅ Order structure with all required fields
- ✅ Pagination support
- ✅ Node.js + TypeScript + Express

**Frontend Requirements:**

- ✅ Order list view with pagination
- ✅ Order details view
- ✅ Create/Edit order forms
- ✅ Delete functionality
- ✅ Loading and error states
- ✅ TypeScript + React

**Bonus Points:**

- ✅ Status filtering (backend & frontend)
- ✅ Shared types between frontend and backend
- ✅ Comprehensive documentation
- ✅ ESLint/Prettier configuration
- ✅ Postman collection for testing
- ⏳ Unit tests (Jest/Vitest configured, awaiting implementation)

---

Built with ❤️ using TypeScript, React, Node.js, Express, PostgreSQL, and Prisma.
