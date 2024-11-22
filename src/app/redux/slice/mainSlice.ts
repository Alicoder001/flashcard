import { createSlice } from "@reduxjs/toolkit";

export interface IMainState {
  isSidebarOpen: boolean;
}
const initialState: IMainState = {
  isSidebarOpen: false,
};
export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleIsOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleIsOpen } = mainSlice.actions;
export default mainSlice.reducer;
