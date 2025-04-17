import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";

const store = configureStore({
  reducer: { header: headerReducer },
});
export default store;
