import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import clientReducer from "./features/clientSlice";
const supplierReducer = "./features/supplierSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    client: clientReducer,
    supplier: supplierReducer,
  },
});

export default store;
