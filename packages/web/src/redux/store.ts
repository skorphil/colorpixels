import { configureStore } from "@reduxjs/toolkit";
import coloringBookReducer from "@/redux/slices/coloringBookSlice";

const store = configureStore({
  reducer: {
    coloringBook: coloringBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
