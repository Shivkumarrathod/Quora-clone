import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { QuestionApi } from "./services/allApi";

export const Store = configureStore({
   reducer:{
    [QuestionApi.reducerPath]:QuestionApi.reducer,
   },
   middleware: (getDefaultMiddlerware)=>
      getDefaultMiddlerware().concat(QuestionApi.middleware)

})
setupListeners(Store.dispatch)