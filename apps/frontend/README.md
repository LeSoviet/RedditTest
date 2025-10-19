# 🎨 Frontend - Order Management

React 19 + TypeScript + Vite frontend for the Order Management System.

## 🚀 Quick Start

### Development

```bash
# From project root
pnpm dev:frontend
```

🎨 Runs on: http://localhost:5173

### Build

```bash
pnpm build:frontend
pnpm --filter frontend preview
```

## 🏗️ Tech Stack

- **React 19** - Latest React with new features
- **TypeScript** - Type safety throughout
- **Vite** - Fast build tool with HMR
- **TailwindCSS** - Utility-first styling
- **React Query** - Server state management
- **React Router** - Navigation & routing
- **React Hook Form** - Form handling
- **Axios** - HTTP client with types

## 📱 Features

✅ **Order List** - Paginated table with search/filter  
✅ **Order Details** - Full order information view  
✅ **Create/Edit** - Form validation with Zod schemas  
✅ **Delete** - Confirmation dialogs  
✅ **Status Filter** - Filter by pending/completed/cancelled  
✅ **Loading States** - Skeleton loaders  
✅ **Error Handling** - User-friendly error messages  
✅ **Responsive** - Mobile-first design

## 🗂️ Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React Query hooks
├── lib/           # API client & utilities
├── pages/         # Route components
├── services/      # API service functions
└── App.tsx        # Main app component
```

## 🔗 Integration

- **Shared Types**: Uses `@shared/types` package for type safety
- **API Client**: Type-safe Axios client in `lib/api.ts`
- **React Query**: Automatic caching, background updates
- **Form Validation**: Zod schemas ensure data integrity

Built with modern React patterns and best practices! 🚀
