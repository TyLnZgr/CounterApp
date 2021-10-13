import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//store indexjs bütün componentleri saracak şekilde yerleştiriyoruz.
