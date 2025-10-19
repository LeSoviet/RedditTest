# 🧪 Postman API Testing

## 🚀 Quick Setup

### 1. Import Files

1. Open **Postman**
2. Click **Import**
3. Drag these files:
   - `Order_Management_API.postman_collection.json`
   - `Order_Management_Dev.postman_environment.json`
4. Select **"Order Management - Development"** environment

### 2. Run All Tests

1. Click the **"Order Management API"** collection
2. Click **"Run"** button
3. Select all requests
4. Click **"Run Order Management API"**
5. Watch all tests pass! ✅

## 📋 What Gets Tested

✅ **Health Check** - Server status

✅ **Get All Orders** - Pagination & structure

✅ **Create Order** - CRUD functionality

✅ **Get Order by ID** - Individual retrieval

✅ **Update Order** - Modification

✅ **Filter by Status** - Pending & Completed

✅ **Delete Order** - Cleanup

## 🎯 Expected Results

When you run the collection:

- **8/8 requests** successful
- **~20+ automated tests** passing
- **Full CRUD workflow** validated
- **Status filtering** working
- **Error handling** tested

## 🔧 Environment Variables

| Variable           | Value                   | Description                |
| ------------------ | ----------------------- | -------------------------- |
| `BASE_URL`         | `http://localhost:3000` | API server URL             |
| `ORDER_ID`         | _auto-set_              | Used for get/update/delete |
| `CREATED_ORDER_ID` | _auto-set_              | Tracks created orders      |
| `FIRST_ORDER_ID`   | _auto-set_              | First order from list      |

Variables are automatically managed during test execution.

## 📝 Important: Order Status Values

**⚠️ Status values must be UPPERCASE:**

- ✅ `PENDING` (not "pending")
- ✅ `COMPLETED` (not "completed")
- ✅ `CANCELLED` (not "cancelled")

This ensures type safety and consistency across the application.

## 🧪 Manual Testing

If you prefer individual requests:

1. **Health Check** → Verify server running
2. **Get All Orders** → See existing data
3. **Create Order** → Add new order
4. **Get Order by ID** → Retrieve specific order
5. **Update Order** → Modify order
6. **Filter Orders** → Test status filtering
7. **Delete Order** → Remove order

**Ready to test!** 🚀

1. **Health Check** → Verify server running
2. **Get All Orders** → See existing data
3. **Create Order** → Add new order
4. **Get Order by ID** → Retrieve specific order
5. **Update Order** → Modify order
6. **Filter Orders** → Test status filtering
7. **Delete Order** → Remove order

**Ready to test!** 🚀
