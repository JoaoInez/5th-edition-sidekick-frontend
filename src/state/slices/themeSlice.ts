import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Themes } from "../../types/themeTypes";

const initialState: Themes = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state: Themes, action: PayloadAction<Themes>): void => {
      const { theme } = action.payload;
      state.theme = theme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
