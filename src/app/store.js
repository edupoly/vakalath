import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { caseDetailsApi } from "../services/caseDetailsApi";
import { usersApi } from "../services/userApi";
import userReducer from "../services/userSlice"; // <- Import user reducer

export const store = configureStore({
  reducer: {
    [caseDetailsApi.reducerPath]: caseDetailsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      caseDetailsApi.middleware,
      usersApi.middleware,
    ),
});
setupListeners(store.dispatch);
