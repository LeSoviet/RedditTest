# 🚀 Full-Stack Order Management System# 🚀 Full-Stack Order Management System



[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)

[![React](https://img.shields.io/badge/React-19.1-61dafb?logo=react)](https://react.dev/)[![React](https://img.shields.io/badge/React-19.1-61dafb?logo=react)](https://react.dev/)

[![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=node.js)](https://nodejs.org/)[![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=node.js)](https://nodejs.org/)

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue?logo=postgresql)](https://www.postgresql.org/)[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue?logo=postgresql)](https://www.postgresql.org/)

[![Prisma](https://img.shields.io/badge/Prisma-6.3-2D3748?logo=prisma)](https://www.prisma.io/)[![Prisma](https://img.shields.io/badge/Prisma-6.3-2D3748?logo=prisma)](https://www.prisma.io/)

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)

[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)

A modern, production-ready order management application built with **TypeScript**, **React 19**, **Express**, **Prisma**, and **PostgreSQL**. Features complete CRUD operations, pagination, filtering, end-to-end type safety, and professional UX patterns.

A modern, production-ready order management application built with **TypeScript**, **React 19**, **Express**, **Prisma**, and **PostgreSQL**. Features complete CRUD operations, pagination, filtering, end-to-end type safety, Docker support, and professional UX patterns.

---

---

## 📋 Table of Contents

## 📋 Table of Contents

- [Quick Start with Docker](#-quick-start-with-docker-recommended)

- [Quick Start with Docker](#-quick-start-with-docker-recommended)- [Quick Start (Manual Setup)](#-quick-start-manual-setup)

- [Manual Setup](#-manual-setup-without-docker)- [Features](#-features)

- [Features](#-features)- [Tech Stack](#-tech-stack)

- [Tech Stack](#-tech-stack)- [Development](#-development)

- [Development](#-development)- [Testing](#-testing)

- [Testing](#-testing)- [API Documentation](#-api-documentation)

- [API Documentation](#-api-documentation)- [Architecture](#-architecture)

- [Project Structure](#-project-structure)- [Project Structure](#-project-structure)



------



## 🐳 Quick Start with Docker (Recommended)## 🐳 Quick Start with Docker (Recommended)



The easiest way to run this project is using Docker Compose. **No need to install PostgreSQL, Node.js, or pnpm manually!**The easiest way to run this project is using Docker Compose. **No need to install PostgreSQL, Node.js, or pnpm manually!**



### Prerequisites### Prerequisites



- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running- **Docker Desktop** installed and running

- ~3GB free disk space- **~3GB free disk space** for images and volumes



### Start the Application### Start the Application



```bash```bash

# Clone the repository# Clone the repository

git clone https://github.com/LeSoviet/RedditTest.gitgit clone <repository-url>

cd RedditTestcd RedditTest



# Start all services (PostgreSQL + Backend + Frontend)# Start all services (PostgreSQL + Backend + Frontend)

docker compose up --builddocker-compose up --build

``````



**That's it!** 🎉 The application will be available at:**That's it!** 🎉 The application will be available at:



- 🎨 **Frontend**: http://localhost:5173- 🎨 **Frontend**: http://localhost:5173

- 🚀 **Backend API**: http://localhost:3000- 🚀 **Backend API**: http://localhost:3000

- 📚 **API Health**: http://localhost:3000/health- 🗄️ **PostgreSQL**: localhost:5432 (managed by Docker)



The database will be **automatically migrated and seeded** with 10 sample orders on first run.The database will be **automatically migrated and seeded** on first run with 10 sample orders.



### Essential Docker Commands### Essential Commands



```bash```bash

# Start (first time or after code changes)# Start (first time or after changes)

docker compose up --builddocker-compose up --build



# Start in background# Stop (keeps data)

docker compose up -ddocker-compose down



# Stop (keeps database data)# View logs

docker compose downdocker-compose logs -f backend



# View backend logs (see database queries)# Run tests

docker compose logs -f backenddocker-compose exec backend pnpm --filter backend test



# Run tests# Reset database (⚠️ deletes all data)

docker compose exec backend pnpm --filter backend testdocker-compose down -v && docker-compose up -d

```

# Open Prisma Studio (database GUI)

docker compose exec backend pnpm --filter backend prisma:studio### 💾 Data Persistence

# Opens at http://localhost:5555- ✅ `docker-compose down` → **Keeps** database data

- ❌ `docker-compose down -v` → **Deletes** database data

# Reset database (⚠️ deletes all data)- First startup auto-seeds 10 sample orders

docker compose down -v && docker compose up -d- Data persists between restarts

```

### Hot Reload in Docker

### 💾 Data Persistence

All source code directories are mounted as volumes, so changes to your code will trigger automatic reloads:

- ✅ `docker compose down` → **Keeps** database data

- ❌ `docker compose down -v` → **Deletes** database data- ✅ Backend: `tsx` watch mode automatically restarts on file changes

- First startup: Auto-migrates schema and seeds 10 orders- ✅ Frontend: Vite HMR (Hot Module Replacement) updates instantly

- Subsequent startups: Keeps existing data (no re-seeding)- ✅ Shared Types: Changes reflect immediately in both apps



### 🔄 Hot Reload---



All source code is mounted as volumes. Changes trigger automatic reloads:## 💻 Quick Start (Manual Setup)



- **Backend**: `tsx` watch mode (auto-restart on save)If you prefer to run without Docker, follow these steps:

- **Frontend**: Vite HMR (instant updates)

- **Shared Types**: Changes reflect immediately in both apps## ✨ Features



---### Core Functionality

- ✅ **Full CRUD Operations** - Create, Read, Update, Delete orders

## 💻 Manual Setup (Without Docker)- ✅ **Server-side Pagination** - Efficient data loading with configurable page size

- ✅ **Status Filtering** - Filter orders by PENDING, COMPLETED, or CANCELLED status

### Prerequisites- ✅ **Real-time Validation** - Zod schemas validate data on both client and server

- ✅ **End-to-end Type Safety** - Shared types between frontend and backend

- **Node.js** >= 22.0.0 ([download](https://nodejs.org/))

- **pnpm** >= 8.0.0 (`npm install -g pnpm`)### User Experience

- **PostgreSQL** >= 14 ([download](https://www.postgresql.org/download/))- ✅ **Toast Notifications** - Professional feedback for all actions

- ✅ **Status Badges** - Color-coded badges (🟡 Pending, 🟢 Completed, 🔴 Cancelled)

### 1. Clone & Install- ✅ **Delete Confirmation** - Modal dialog prevents accidental deletions

- ✅ **Loading States** - Clear feedback during async operations

```bash- ✅ **Error Handling** - User-friendly error messages

git clone https://github.com/LeSoviet/RedditTest.git- ✅ **Responsive Design** - Mobile-friendly UI with TailwindCSS

cd RedditTest

pnpm install### Technical Excellence

```- ✅ **Monorepo Architecture** - pnpm workspaces with shared types

- ✅ **React Query** - Automatic caching, optimistic updates, cache invalidation

### 2. Setup Environment Variables- ✅ **Type-First Development** - Zod schemas generate TypeScript types

- ✅ **Testing** - 15 tests total (10 backend + 5 frontend)

**Backend** (`apps/backend/.env`):- ✅ **Code Quality** - ESLint, Prettier, and strict TypeScript



```env---

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/orders_db?schema=public"

PORT=3000## 🛠️ Tech Stack

NODE_ENV=development

```### Backend

- **Runtime**: Node.js 18+ with TypeScript

**Frontend** (`apps/frontend/.env`):- **Framework**: Express.js

- **Database**: PostgreSQL 14+ with Prisma ORM

```env- **Validation**: Zod (runtime validation + types)

VITE_API_URL=http://localhost:3000/api- **Testing**: Jest + Supertest (10 tests)

```

### Frontend

### 3. Setup Database- **Framework**: React 19 with TypeScript

- **Build Tool**: Vite

```bash- **Styling**: TailwindCSS

# Generate Prisma Client- **State Management**: React Query (server state)

pnpm --filter backend prisma:generate- **Forms**: React Hook Form + Zod resolver

- **Notifications**: React Hot Toast

# Run migrations (creates tables)- **Testing**: Vitest + React Testing Library (5 tests)

pnpm --filter backend prisma:migrate dev

### Shared

# Seed database with sample data- **Monorepo**: pnpm workspaces

pnpm --filter backend prisma:seed- **Types**: Shared Zod schemas in `@shared/types`

```- **Code Quality**: ESLint + Prettier



### 4. Start Development Servers---



```bash## � Quick Start (Manual Setup)

# Terminal 1: Backend (http://localhost:3000)

pnpm dev:backend### Prerequisites

- **Node.js** >= 18.0.0

# Terminal 2: Frontend (http://localhost:5173)- **pnpm** >= 8.0.0

pnpm dev:frontend- **PostgreSQL** >= 14 (running locally)

```

### 1. Clone & Install

---

```bash

## ✨ Featuresgit clone <repository-url>

cd RedditTest

### Core Functionalitypnpm install

- ✅ **Full CRUD Operations** - Create, Read, Update, Delete orders```

- ✅ **Server-side Pagination** - Efficient loading with configurable page size (default: 10, max: 100)

- ✅ **Status Filtering** - Filter by PENDING, COMPLETED, or CANCELLED### 2. Setup Environment Variables

- ✅ **Real-time Validation** - Zod schemas validate on client and server

- ✅ **End-to-end Type Safety** - Shared types between frontend/backend**Backend** (`apps/backend/.env`):



### User Experience```bash

- ✅ **Toast Notifications** - Professional feedback for all actions# Copy example file

- ✅ **Status Badges** - Color-coded (🟡 Pending, 🟢 Completed, 🔴 Cancelled)cp apps/backend/.env.example apps/backend/.env

- ✅ **Delete Confirmation** - Modal prevents accidental deletions```

- ✅ **Loading States** - Clear feedback during async operations

- ✅ **Error Handling** - User-friendly error messagesEdit with your PostgreSQL credentials:

- ✅ **Responsive Design** - Mobile-friendly with TailwindCSS

```env

### Developer ExperienceDATABASE_URL="postgresql://postgres:postgres@localhost:5432/orders_db?schema=public"

- ✅ **Docker Support** - One command to start everythingPORT=3000

- ✅ **Monorepo Architecture** - pnpm workspaces with shared typesNODE_ENV=development

- ✅ **React Query** - Automatic caching, optimistic updates, invalidation```

- ✅ **Type-First Development** - Zod schemas generate TypeScript types

- ✅ **Comprehensive Testing** - 15 tests (10 backend + 5 frontend)**Frontend** (`apps/frontend/.env`):

- ✅ **Hot Reload** - Instant feedback in dev mode

- ✅ **Prisma Studio** - Visual database editor```bash

# Copy example file

---cp apps/frontend/.env.example apps/frontend/.env

```

## 🛠️ Tech Stack

Default values should work:

### Backend

| Technology | Version | Purpose |```env

|------------|---------|---------|VITE_API_URL=http://localhost:3000/api

| **Node.js** | 22 (Alpine in Docker) | Runtime |```

| **TypeScript** | 5.9.3 | Type safety |

| **Express** | 4.21.2 | Web framework |### 3. Setup Database

| **PostgreSQL** | 14 (Alpine in Docker) | Database |

| **Prisma** | 6.3.0 | ORM + migrations |```bash

| **Zod** | 3.24.1 | Runtime validation |# Generate Prisma client

| **Jest** | 29.7.0 | Testing (10 tests) |pnpm --filter backend prisma:generate



### Frontend# Run migrations (creates tables)

| Technology | Version | Purpose |pnpm --filter backend prisma:migrate dev

|------------|---------|---------|

| **React** | 19.1.1 | UI framework |# (Optional) Seed database

| **TypeScript** | 5.9.3 | Type safety |pnpm --filter backend prisma:seed

| **Vite** | 6.0.10 | Build tool + dev server |```

| **TailwindCSS** | 3.4.17 | Styling |

| **React Query** | 5.63.1 | Server state management |### 4. Start Development Servers

| **React Hook Form** | 7.54.2 | Form handling |

| **React Hot Toast** | 2.6.0 | Notifications |**Terminal 1 - Backend:**

| **Vitest** | 3.2.4 | Testing (5 tests) |

```bash

### Sharedpnpm dev:backend

- **Monorepo**: pnpm workspaces```

- **Types**: Shared Zod schemas in `@shared/types`

- **Validation**: Single source of truth for all data structures🚀 Backend: http://localhost:3000



---**Terminal 2 - Frontend:**



## 🔨 Development```bash

pnpm dev:frontend

### Project Structure```



```🎨 Frontend: http://localhost:5173

RedditTest/

├── apps/> **Note:** The backend automatically seeds the database with 10 sample orders on first run if the database is empty.

│   ├── backend/           # Express API

│   │   ├── prisma/        # Schema, migrations, seed---

│   │   └── src/

│   │       ├── controllers/   # Request handlers## 💻 Development

│   │       ├── middleware/    # Error handling, validation

│   │       └── routes/        # API endpoints> **💡 Tip:** If using Docker, replace `pnpm` commands with `docker-compose exec <service>` (e.g., `docker-compose exec backend pnpm --filter backend test`)

│   └── frontend/          # React SPA

│       └── src/### Quick Command Reference

│           ├── components/    # Reusable UI components

│           ├── hooks/         # React Query hooks```bash

│           ├── pages/         # Route pages# Development (Manual)

│           └── services/      # API clientpnpm dev:backend                              # Start backend (auto-seeds if empty)

├── packages/pnpm dev:frontend                             # Start frontend

│   └── shared-types/      # Zod schemas + TypeScript types

└── docker-compose.yml     # Docker orchestration# Development (Docker)

```docker-compose up                             # Start all services

docker-compose up -d                          # Start in background

### Available Scriptsdocker-compose logs -f backend                # View backend logs



```bash# Testing (Manual)

# Developmentpnpm --filter backend test                    # Run backend tests (10 tests)

pnpm dev:backend          # Start backend (http://localhost:3000)pnpm --filter frontend test --run             # Run frontend tests (5 tests)

pnpm dev:frontend         # Start frontend (http://localhost:5173)

# Testing (Docker)

# Buildingdocker-compose exec backend pnpm --filter backend test

pnpm build:backend        # Compile TypeScript → dist/docker-compose exec frontend pnpm --filter frontend test --run

pnpm build:frontend       # Build for production → dist/

# Database (Manual)

# Testingpnpm --filter backend prisma:studio           # Open database GUI (port 5555)

pnpm test:backend         # Run Jest tests (10 tests)pnpm --filter backend prisma:generate         # Regenerate Prisma client

pnpm test:frontend        # Run Vitest tests (5 tests)pnpm --filter backend prisma:migrate dev      # Create new migration

pnpm test                 # Run all testspnpm --filter backend prisma:seed             # Manual seed

pnpm --filter backend prisma:migrate reset    # ⚠️ Reset database (deletes all data)

# Database

pnpm --filter backend prisma:generate   # Regenerate Prisma Client# Database (Docker)

pnpm --filter backend prisma:migrate    # Create migrationdocker-compose exec backend pnpm --filter backend prisma:studio

pnpm --filter backend prisma:seed       # Seed databasedocker-compose exec backend pnpm --filter backend prisma:generate

pnpm --filter backend prisma:studio     # Open GUI (localhost:5555)

# Build

# Dockerpnpm --filter backend build                   # Build backend

docker compose up --build              # Start all servicespnpm --filter frontend build                  # Build frontend

docker compose logs -f backend         # View backend logs```

docker compose exec backend sh         # Access backend shell

```### Database Management



### Environment Variables**Prisma Studio** - Visual database editor:



#### Backend (`apps/backend/.env`)```bash

```envpnpm --filter backend prisma:studio

DATABASE_URL="postgresql://user:password@localhost:5432/orders_db?schema=public"```

PORT=3000

NODE_ENV=developmentOpens at http://localhost:5555

```

**Seeding Behavior:**

#### Frontend (`apps/frontend/.env`)- Seed script checks if data exists before inserting

```env- Only seeds if database is empty

VITE_API_URL=http://localhost:3000/api- To reseed: `pnpm --filter backend prisma:migrate reset`

```

---

---

## 🧪 Testing

## 🧪 Testing

### Run Tests

### Run All Tests

```bash

```bash# Backend tests (Jest + Supertest)

# Localpnpm --filter backend test

pnpm test

# Frontend tests (Vitest + React Testing Library)

# Dockerpnpm --filter frontend test --run

docker compose exec backend pnpm --filter backend test

docker compose exec frontend pnpm --filter frontend test --run# All tests

```pnpm --filter backend test && pnpm --filter frontend test --run

```

### Test Coverage

### Test Coverage

**Backend (10 tests)** - Integration tests with real database:

- ✅ Pagination with correct metadata**Backend (10 tests):**

- ✅ Create order with valid/invalid data- ✅ Pagination with metadata

- ✅ Get order by ID (success + 404)- ✅ Order creation with validation

- ✅ Invalid UUID handling- ✅ Order retrieval by ID

- ✅ Filter by status (PENDING, COMPLETED)- ✅ Status filtering

- ✅ Combined filtering + pagination- ✅ Error handling (404, 400, validation)



**Frontend (5 tests)** - Component and hook tests:**Frontend (5 tests):**

- ✅ OrdersListPage renders without errors- ✅ Component rendering

- ✅ Loading state displays correctly- ✅ Loading states

- ✅ useOrders hook fetches data- ✅ React Query hook initialization

- ✅ Pagination works correctly

- ✅ Error handling### API Testing with Postman



### Test Files1. Import `postman/Order_Management_API.postman_collection.json`

- `apps/backend/src/__tests__/orders.test.ts`2. Import `postman/Order_Management_Dev.postman_environment.json`

- `apps/frontend/src/pages/__tests__/OrdersListPage.test.tsx`3. Select "Order Management - Development" environment

- `apps/frontend/src/hooks/__tests__/useOrders.test.ts`4. Run collection to test all endpoints



------



## 📚 API Documentation## 📖 API Documentation



### Base URL### Endpoints

- **Development**: `http://localhost:3000/api`

- **Docker**: `http://localhost:3000/api`| Method   | Endpoint          | Description               | Query Parameters              |

| -------- | ----------------- | ------------------------- | ----------------------------- |

### Endpoints| `GET`    | `/health`         | Health check              | -                             |

| `GET`    | `/api/orders`     | Get paginated orders      | `page`, `page_size`, `status` |

#### `GET /health`| `GET`    | `/api/orders/:id` | Get order by ID           | -                             |

Health check endpoint.| `POST`   | `/api/orders`     | Create new order          | -                             |

| `PUT`    | `/api/orders/:id` | Update order              | -                             |

**Response** (200):| `DELETE` | `/api/orders/:id` | Delete order              | -                             |

```json

{### Query Parameters

  "status": "ok",

  "message": "Order Management API is running"- **page** - Page number (default: 1)

}- **page_size** - Items per page (default: 10, max: 100)

```- **status** - Filter by status: `PENDING`, `COMPLETED`, or `CANCELLED`



#### `GET /api/orders`### Example Requests

Get paginated orders with optional filtering.

#### Get All Orders (Paginated)

**Query Parameters**:```bash

- `page` (number, default: 1) - Page numberGET http://localhost:3000/api/orders?page=1&page_size=10

- `page_size` (number, default: 10, max: 100) - Items per page```

- `status` (string, optional) - Filter by status: `PENDING`, `COMPLETED`, `CANCELLED`

#### Filter by Status

**Response** (200):```bash

```jsonGET http://localhost:3000/api/orders?status=PENDING

{```

  "success": true,

  "data": {#### Create Order

    "data": [```bash

      {POST http://localhost:3000/api/orders

        "id": "uuid",Content-Type: application/json

        "customer_name": "John Doe",

        "item": "Laptop",{

        "quantity": 2,  "customer_name": "John Doe",

        "status": "PENDING",  "item": "MacBook Pro",

        "created_at": "2025-10-19T20:00:00.000Z"  "quantity": 2,

      }  "status": "PENDING"

    ],}

    "pagination": {```

      "page": 1,

      "page_size": 10,#### Update Order

      "total": 50,```bash

      "total_pages": 5PUT http://localhost:3000/api/orders/{id}

    }Content-Type: application/json

  }

}{

```  "status": "COMPLETED"

}

#### `GET /api/orders/:id````

Get single order by ID.

#### Delete Order

**Response** (200):```bash

```jsonDELETE http://localhost:3000/api/orders/{id}

{```

  "success": true,

  "data": {### Response Format

    "id": "uuid",

    "customer_name": "John Doe",**Success Response:**

    "item": "Laptop",```json

    "quantity": 2,{

    "status": "PENDING",  "success": true,

    "created_at": "2025-10-19T20:00:00.000Z"  "data": { ... }

  }}

}```

```

**Error Response:**

**Error** (404):```json

```json{

{  "success": false,

  "success": false,  "error": {

  "error": {    "message": "Error message",

    "message": "Order not found",    "code": "ERROR_CODE",

    "code": "ORDER_NOT_FOUND"    "details": { ... }

  }  }

}}

``````



#### `POST /api/orders`---

Create a new order.

## 🏗️ Architecture

**Request Body**:

```json### Monorepo Structure

{

  "customer_name": "John Doe",```

  "item": "Laptop",RedditTest/

  "quantity": 2,├── apps/

  "status": "PENDING"│   ├── backend/              # Express.js API + Prisma ORM

}│   │   ├── src/

```│   │   │   ├── controllers/  # HTTP request handlers

│   │   │   ├── middleware/   # Error handling, validation

**Response** (201):│   │   │   ├── routes/       # API route definitions

```json│   │   │   └── __tests__/    # Integration tests

{│   │   └── prisma/

  "success": true,│   │       ├── schema.prisma # Database schema

  "data": {│   │       └── seed.ts       # Database seeding

    "id": "uuid",│   └── frontend/             # React 19 + Vite SPA

    "customer_name": "John Doe",│       └── src/

    "item": "Laptop",│           ├── components/   # Reusable UI components

    "quantity": 2,│           ├── pages/        # Route pages

    "status": "PENDING",│           ├── hooks/        # React Query hooks

    "created_at": "2025-10-19T20:00:00.000Z"│           └── services/     # API client

  }├── packages/

}│   └── shared-types/         # Shared Zod schemas & TypeScript types

```└── postman/                  # API testing collection

```

**Error** (400):

```json### Type-First Development Flow

{

  "success": false,1. **Define Zod schema** in `packages/shared-types/src/index.ts`:

  "error": {   ```typescript

    "message": "Validation error",   export const CreateOrderSchema = z.object({

    "code": "VALIDATION_ERROR",     customer_name: z.string().min(1).max(255),

    "details": [     quantity: z.number().int().positive(),

      {     status: OrderStatusSchema

        "path": ["customer_name"],   });

        "message": "Customer name is required"   ```

      }

    ]2. **Infer TypeScript type**:

  }   ```typescript

}   export type CreateOrderDTO = z.infer<typeof CreateOrderSchema>;

```   ```



#### `PUT /api/orders/:id`3. **Backend validates** with same schema:

Update an existing order.   ```typescript

   const validated = CreateOrderSchema.parse(req.body);

**Request Body** (all fields optional):   ```

```json

{4. **Frontend uses** without duplication:

  "customer_name": "Jane Doe",   ```typescript

  "item": "Updated Item",   import { CreateOrderDTO } from '@shared/types';

  "quantity": 5,   const orderData: CreateOrderDTO = { ... };

  "status": "COMPLETED"   ```

}

```**Result:** Change validation once, get runtime safety + TypeScript types everywhere. No drift between frontend and backend.



**Response** (200): Same structure as GET### Key Architectural Decisions



#### `DELETE /api/orders/:id`#### Why Monorepo?

Delete an order.- Shared types eliminate duplication

- Single source of truth for validation

**Response** (200):- Changes instantly available across apps

```json

{#### Why Zod?

  "success": true,- Runtime validation catches errors at API boundaries

  "data": {- TypeScript types auto-generated from schemas

    "id": "uuid",- Single schema for validation + types

    "customer_name": "John Doe",

    "item": "Laptop",#### Why React Query?

    "quantity": 2,- Automatic caching reduces API calls

    "status": "PENDING",- Optimistic updates for instant UI feedback

    "created_at": "2025-10-19T20:00:00.000Z"- Cache invalidation keeps data fresh

  }- Replaces Redux/Zustand for server state

}

```#### Why Prisma?

- Type-safe database access prevents SQL errors

### Postman Collection- Automatic migrations track schema changes

- Generated client provides autocomplete

Import the collection from `postman/Order_Management_API.postman_collection.json` for ready-to-use API tests.

#### Why No Repository Layer?

---- Simple domain (single entity) doesn't need abstraction

- Prisma calls are clear and type-safe

## 🏗️ Architecture- Easy to refactor when complexity grows



### Type-First Development---



All data structures originate as **Zod schemas** in `packages/shared-types/src/index.ts`:## 📁 Project Structure



```typescript### Backend Organization

// Define once

export const CreateOrderSchema = z.object({```

  customer_name: z.string().min(1).max(255),apps/backend/src/

  item: z.string().min(1).max(255),├── index.ts                  # Express app setup + middleware

  quantity: z.number().int().positive(),├── controllers/

  status: OrderStatusSchema│   └── orders.controller.ts  # Order CRUD logic

});├── middleware/

│   ├── errorHandler.ts       # Centralized error handling

// Use everywhere│   └── validateUUID.ts       # UUID validation middleware

export type CreateOrderDTO = z.infer<typeof CreateOrderSchema>;├── routes/

```│   └── orders.routes.ts      # Route definitions

└── __tests__/

**Backend** validates at runtime:    ├── setup.ts              # Test configuration

```typescript    └── orders.test.ts        # Integration tests

const validated = CreateOrderSchema.parse(req.body); // throws ZodError if invalid```

```

### Frontend Organization

**Frontend** gets TypeScript types:

```typescript```

const orderData: CreateOrderDTO = { ... }; // Full type safetyapps/frontend/src/

```├── main.tsx                  # App entry point

├── App.tsx                   # Router setup

### Data Flow├── components/

│   ├── ConfirmDialog.tsx     # Delete confirmation modal

```│   ├── Layout.tsx            # Page layout wrapper

User Action (Frontend)│   └── StatusBadge.tsx       # Status display component

    ↓├── pages/

React Query Hook (useOrders)│   ├── OrdersListPage.tsx    # List view with pagination

    ↓│   ├── OrderDetailsPage.tsx  # Single order view

API Service (ordersApi.createOrder)│   ├── CreateOrderPage.tsx   # Create form

    ↓│   └── EditOrderPage.tsx     # Edit form

Express Route (/api/orders)├── hooks/

    ↓│   └── useOrders.ts          # React Query hooks

Zod Validation (CreateOrderSchema.parse)├── services/

    ↓│   └── orders.service.ts     # API client

Controller (createOrder)└── lib/

    ↓    └── api.ts                # Axios configuration

Prisma Client (prisma.order.create)```

    ↓

PostgreSQL Database### Shared Types

    ↓

Response with ApiResponse<Order>```typescript

    ↓// packages/shared-types/src/index.ts

React Query Cache Update

    ↓// Schemas (validation + types)

UI Update (automatic re-render)export const OrderStatusSchema = z.enum(['PENDING', 'COMPLETED', 'CANCELLED']);

```export const CreateOrderSchema = z.object({ ... });

export const UpdateOrderSchema = z.object({ ... });

### Error Handling

// Types (inferred from schemas)

Centralized error middleware converts all errors to consistent `ApiError` format:export type OrderStatus = z.infer<typeof OrderStatusSchema>;

export type CreateOrderDTO = z.infer<typeof CreateOrderSchema>;

```typescriptexport type Order = { ... };

{export type ApiResponse<T> = { ... };

  success: false,```

  error: {

    message: "Error description",---

    code: "ERROR_CODE",

    details?: any  // For validation errors## 🎯 Requirements Checklist

  }

}### ✅ Core Requirements (100%)

```

**Backend:**

---- ✅ All CRUD endpoints (POST, GET, PUT, DELETE)

- ✅ Order structure with UUID, customer_name, item, quantity, status, created_at

## 📦 Docker Details- ✅ Pagination support with page and page_size

- ✅ Node.js + TypeScript + Express

### Services- ✅ PostgreSQL database with Prisma ORM



| Service | Port | Description |**Frontend:**

|---------|------|-------------|- ✅ Order list view with pagination

| **postgres** | 5432 | PostgreSQL 14 Alpine with persistent volume |- ✅ Order details view

| **backend** | 3000 | Express API with auto-migration and seeding |- ✅ Create/Edit order forms

| **frontend** | 5173 | Vite dev server with HMR |- ✅ Delete functionality

- ✅ Loading and error states

### Volumes- ✅ TypeScript + React 19



- `postgres_data` - Persists database data across container restarts### ⭐ Bonus Features (100%)

- Source code mounted for hot reload (backend/src, frontend/src, shared-types/src)

- ✅ Status filtering (backend + frontend)

### Networks- ✅ Comprehensive testing (15 tests)

- ✅ Shared types monorepo setup

- `orders_network` - Bridge network for service communication- ✅ Comprehensive documentation

- ✅ ESLint + Prettier configuration

### Auto-Startup Process- ✅ Professional error handling

- ✅ Toast notifications

```- ✅ Postman collection

1. PostgreSQL starts and runs health check- ✅ **Docker setup for easy local development** 🐳

2. Backend waits for healthy PostgreSQL

3. Backend runs: prisma migrate deploy---

4. Backend runs: prisma generate

5. Backend runs: seed script (only if DB empty)## 🚨 Important Notes

6. Backend starts Express server

7. Frontend starts Vite dev server### Docker vs Manual Setup

```- **Docker**: Zero configuration, all dependencies included, consistent environment

- **Manual**: More control, faster iterative development, requires PostgreSQL installation

---

### Prisma Client Generation

## 🤝 ContributingAfter modifying `prisma/schema.prisma`, always regenerate the client:



1. Fork the repository```bash

2. Create a feature branch (`git checkout -b feat/amazing-feature`)# Manual

3. Commit changes (`git commit -m 'feat: Add amazing feature'`)pnpm --filter backend prisma:generate

4. Push to branch (`git push origin feat/amazing-feature`)

5. Open a Pull Request# Docker

docker-compose exec backend pnpm --filter backend prisma:generate

---```



## 📄 License**Symptom of missing generation:** `Property 'order' does not exist on type 'PrismaClient'`



This project is licensed under the MIT License.### Workspace Linking

Shared types use `workspace:*` protocol. Changes are immediately available without reinstalling.

---

If you see stale types:

## 👤 Author```bash

pnpm install  # Rebuild workspace links

**Daniel Khadour**```



- GitHub: [@LeSoviet](https://github.com/LeSoviet)### Auto-Seeding

The backend checks if the database is empty and automatically seeds on first run. Manual seeding only needed after database reset.

---

### Docker Hot Reload

## 🙏 AcknowledgmentsChanges to source files automatically trigger reloads:

- **Backend**: `tsx` watch mode restarts on changes

Built as a technical challenge to demonstrate:- **Frontend**: Vite HMR updates instantly

- Full-stack TypeScript development- **Shared Types**: Changes reflect immediately in both apps

- Modern React patterns (19+)

- Type-safe API design### Vite Configuration

- Docker containerizationThis project uses `rolldown-vite@7.1.14` (specified in root `package.json` overrides). If you encounter Vite type errors, ensure `apps/frontend/src/vite-env.d.ts` exists.

- Monorepo architecture

- Test-driven development---



---## 📚 Additional Resources



**⭐ If you found this project helpful, please consider giving it a star!**- **Prisma Studio**: Visual database editor at http://localhost:5555

- **Postman Collection**: Pre-configured API tests in `/postman` directory
- **Type Definitions**: All schemas in `packages/shared-types/src/index.ts`

---

## 🤝 Contributing

This is a technical challenge project. For questions or issues, please open a GitHub issue.
