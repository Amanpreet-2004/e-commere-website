
import { configureStore } from '@reduxjs/toolkit';

import shoppingReducer from "./shoppingSlice";

const store = configureStore({
  reducer: {
  
     cart : shoppingReducer
  },
});

export default store;