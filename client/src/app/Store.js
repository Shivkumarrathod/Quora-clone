import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./services/allApi";

export const Store = configureStore({
   reducer:{
    [apiSlice.reducerPath]:apiSlice.reducer,
   },
   middleware: (getDefaultMiddlerware)=>
      getDefaultMiddlerware().concat(apiSlice.middleware)

})
setupListeners(Store.dispatch)