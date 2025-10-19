# 🧪 Postman API Testing# 🧪 Postman API Testing

## 🚀 Quick Setup## 🚀 Quick Setup

### 1. Import Files### 1. Import Files

1. Open **Postman**1. Open **Postman**

2. Click **Import** 2. Click **Import**

3. Drag these files:3. Drag these files:
   - `Order_Management_API.postman_collection.json` - `Order_Management_API.postman_collection.json`

   - `Order_Management_Dev.postman_environment.json` - `Order_Management_Dev.postman_environment.json`

4. Select **"Order Management - Development"** environment4. Select **"Order Management - Development"** environment

### 2. Run All Tests### 2. Run All Tests

1. Click the **"Order Management API"** collection1. Click the **"Order Management API"** collection

2. Click **"Run"** button2. Click **"Run"** button

3. Select all requests3. Select all requests

4. Click **"Run Order Management API"**4. Click **"Run Order Management API"**

5. Watch all tests pass! ✅5. Watch all tests pass! ✅

## 📋 What Gets Tested## 📋 What Gets Tested

✅ **Health Check** - Server status ✅ **Health Check** - Server status

✅ **Get All Orders** - Pagination & structure ✅ **Get All Orders** - Pagination & structure

✅ **Create Order** - CRUD functionality ✅ **Create Order** - CRUD functionality

✅ **Get Order by ID** - Individual retrieval ✅ **Get Order by ID** - Individual retrieval

✅ **Update Order** - Modification ✅ **Update Order** - Modification

✅ **Filter by Status** - Pending & Completed ✅ **Filter by Status** - Pending & Completed

✅ **Delete Order** - Cleanup ✅ **Delete Order** - Cleanup

## 🎯 Expected Results## 🎯 Expected Results

When you run the collection:When you run the collection:

- **8/8 requests** successful- **8/8 requests** successful

- **~20+ automated tests** passing- **~20+ automated tests** passing

- **Full CRUD workflow** validated- **Full CRUD workflow** validated

- **Status filtering** working- **Status filtering** working

- **Error handling** tested- **Error handling** tested

## 🔧 Environment Variables## 🔧 Environment Variables

| Variable | Value | Description || Variable | Value | Description |

|----------|-------|-------------||----------|-------|-------------|

| `BASE_URL` | `http://localhost:3000` | API server URL || `BASE_URL` | `http://localhost:3000` | API server URL |

| `ORDER_ID` | _auto-set_ | Used for get/update/delete || `ORDER_ID` | _auto-set_ | Used for get/update/delete |

| `CREATED_ORDER_ID` | _auto-set_ | Tracks created orders || `CREATED_ORDER_ID` | _auto-set_ | Tracks created orders |

| `FIRST_ORDER_ID` | _auto-set_ | First order from list || `FIRST_ORDER_ID` | _auto-set_ | First order from list |

Variables are automatically managed during test execution.Variables are automatically managed during test execution.

## 📝 Important: Order Status Values## � Manual Testing

**⚠️ Status values must be UPPERCASE:**If you prefer individual requests:

- ✅ `PENDING` (not "pending")1. **Health Check** → Verify server running

- ✅ `COMPLETED` (not "completed")2. **Get All Orders** → See existing data

- ✅ `CANCELLED` (not "cancelled")3. **Create Order** → Add new order

4. **Get Order by ID** → Retrieve specific order

This ensures type safety and consistency across the application.5. **Update Order** → Modify order

6. **Filter Orders** → Test status filtering

## 🧪 Manual Testing7. **Delete Order** → Remove order

If you prefer individual requests:**Ready to test!** 🚀

1. **Health Check** → Verify server running
2. **Get All Orders** → See existing data
3. **Create Order** → Add new order
4. **Get Order by ID** → Retrieve specific order
5. **Update Order** → Modify order
6. **Filter Orders** → Test status filtering
7. **Delete Order** → Remove order

**Ready to test!** 🚀
