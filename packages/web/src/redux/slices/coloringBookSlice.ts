import { createSlice } from "@reduxjs/toolkit";

type ColoringBookPage = {
  imgUrl: string;
  imgRotation?: number;
};

type ColoringBookState = {
  pages: ColoringBookPage[]; // Or replace with a more complex type depending on your page structure
};

// Define the initial state
const initialState: ColoringBookState = {
  pages: [],
};

export const coloringBookSlice = createSlice({
  name: "coloringBook",
  initialState,
  reducers: {
    addPage: (state, action: { payload: ColoringBookPage }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.pages.push(action.payload);
    },
    // removePage: state => {
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addPage } = coloringBookSlice.actions;

export default coloringBookSlice.reducer;
