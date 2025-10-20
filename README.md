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


 ![503010254-0d710c82-2da1-4163-99b4-5b57c7c38288](https://github.com/user-attachments/assets/094c4860-8ebb-495a-9002-fd4214b84d58)


---

![503010254-0d710c82-2da1-4163-99b4-5b57c7c38288 (1)](https://github.com/user-attachments/assets/5d714020-538e-4d20-bb0a-b81ab70358ea)
 
---

![Docker](https://github.com/user-attachments/assets/d65966a4-3891-414e-b3f3-280e31787b4c)
---

![FrontTests](https://github.com/user-attachments/assets/e6f37e34-c37b-4ae4-921c-c15eea1d435e)
---

![BackTests](https://github.com/user-attachments/assets/f76401d0-c6aa-4609-9dab-0be322fd88e0)



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




