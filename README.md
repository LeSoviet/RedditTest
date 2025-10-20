# 🚀 Full-Stack Order Management System

A modern, production-ready **Full-Stack Order Management application** focused on end-to-end type safety, robust features, and professional UX. Features complete **CRUD operations**, **server-side pagination**, and **status filtering**.

***

## 🛠️ Tech Stack Highlights

This project uses a **pnpm monorepo** architecture to share types between the frontend and backend.

| Area | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend** | **Node.js 22**, **Express** | Runtime & Web Framework |
| **Database** | **PostgreSQL 14**, **Prisma** | ORM & Data Persistence |
| **Frontend** | **React 19**, **Vite** | UI Framework & Build Tool |
| **Type Safety** | **TypeScript 5.9**, **Zod** | End-to-end Type Safety & Validation |
| **State** | **React Query** | Server State Management & Caching |

***

## ✨ Key Features

### Core Functionality
* ✅ **Full CRUD Operations** for orders.
* ✅ **Server-side Pagination** and **Status Filtering** (PENDING, COMPLETED, CANCELLED).
* ✅ **Real-time Validation** using shared **Zod** schemas.
* ✅ **End-to-end Type Safety** across the stack.

### User Experience
* ✅ Professional **Toast Notifications** and clear **Status Badges**.
* ✅ **Responsive Design** using TailwindCSS.

### Developer Experience
* ✅ **Docker Support** for quick setup.
* ✅ **Monorepo Architecture** with shared types.
* ✅ Comprehensive **Testing** (10 backend, 5 frontend tests).

***

## 🐳 Quick Start (Recommended: Docker)

The easiest way to run the entire application with one command. No need to install PostgreSQL or Node.js locally.

### Prerequisites
* **Docker Desktop** installed and running.

### Start the Application

1.  Clone the repository and navigate to the root directory.
2.  Run the following command:

    ```bash
    docker compose up --build
    ```

### Access Points
* 🎨 **Frontend:** `http://localhost:5173`
* 🚀 **Backend API:** `http://localhost:3000`

> 💡 The database is **automatically migrated and seeded** with 10 sample orders on the first run.

***

## 💻 Manual Setup

For manual setup, you need **Node.js >= 22.0.0**, **pnpm >= 8.0.0**, and a running local **PostgreSQL >= 14** instance.

1.  **Clone & Install:**
    ```bash
    git clone <repository-url>
    cd RedditTest
    pnpm install
    ```
2.  **Database Setup:** Configure your database URL in `apps/backend/.env`, then:
    ```bash
    pnpm --filter backend prisma:generate  # Generate Prisma Client
    pnpm --filter backend prisma:migrate dev # Run migrations
    pnpm --filter backend prisma:seed      # Seed data (optional)
    ```
3.  **Start Servers:** Run these commands in two separate terminals:
    ```bash
    # Terminal 1: Backend API (http://localhost:3000)
    pnpm dev:backend 
    
    # Terminal 2: Frontend (http://localhost:5173)
    pnpm dev:frontend 
    ```

***

## 📚 API Documentation

### Base URL
`http://localhost:3000/api`

### Endpoints

| Method | Endpoint | Description | Query Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/orders` | Get paginated orders | `page`, `page_size`, `status` |
| `GET` | `/api/orders/:id` | Get order by ID | - |
| `POST` | `/api/orders` | Create new order | - |
| `PUT` | `/api/orders/:id` | Update order | - |
| `DELETE` | `/api/orders/:id` | Delete order | - |

### Response Format
All successful responses include a `success: true` flag and a `data` object. Errors include `success: false` and an `error` object with a `message` and `code`.
```markdown
# Example Success Response
```json
{ "success": true, "data": { "id": "uuid", ... } }