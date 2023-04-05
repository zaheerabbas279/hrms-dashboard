import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const uiReducer = createSlice({
  name: "uiReducer",
  initialState: {
    isAuth: false,
    isSidebarOpen: false
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setViewSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setIsAuth, setViewSidebar } =
  uiReducer.actions;

export default uiReducer.reducer;
