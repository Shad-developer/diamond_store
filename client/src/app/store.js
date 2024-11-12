import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import clientReducer from "./features/clientSlice";
import supplierReducer from "./features/supplierSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    client: clientReducer,
    supplier: supplierReducer,
  },
});

export default store;
