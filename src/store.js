import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import warehouseReducer from "./features/warehouse/warehouseSlice";
import categoryReducer from "./features/category/categorySlice";
import productReducer from "./features/product/productSlice";
import transactionReducer from "./features/transaction/transactionSlice";
import userTransactionReducer from "./features/userTransaction/userTransactionSlice";
import miniSidebarReducer from "./features/layout/layoutSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    warehouse: warehouseReducer,
    category: categoryReducer,
    product: productReducer,
    transaction: transactionReducer,
    userTransaction: userTransactionReducer,
    miniSidebar: miniSidebarReducer,
  },
});
