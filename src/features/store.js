import { configureStore } from "@reduxjs/toolkit";

import contestReducer from "./contests/contestSlice";

export const store = configureStore({
  reducer: { contests: contestReducer },
});
