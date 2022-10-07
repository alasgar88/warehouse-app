import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import warehouseReducer from "./features/warehouse/warehouseSlice";
import categoryReducer from "./features/category/categorySlice";
import productReducer from "./features/product/productSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    warehouse: warehouseReducer,
    category: categoryReducer,
    product: productReducer,
  },
});
