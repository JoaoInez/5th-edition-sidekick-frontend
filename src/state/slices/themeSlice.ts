import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemesObject } from "types/themeTypes";

const initialState: ThemesObject = {
  theme: "system",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (
      state: ThemesObject,
      action: PayloadAction<ThemesObject>
    ): void => {
      const { theme } = action.payload;
      state.theme = theme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
