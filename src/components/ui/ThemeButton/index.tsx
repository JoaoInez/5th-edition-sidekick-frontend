import React, { FC, MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosSunny, IoIosMoon, IoIosContrast } from "react-icons/io";
import { RootState } from "types/stateTypes";
import { changeTheme } from "state/slices/themeSlice";
import themeButton from "./ThemeButton.module.scss";

export const ThemeButton: FC = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: RootState) => state.theme);

  const changeCurrentTheme: MouseEventHandler<HTMLButtonElement> = () =>
    dispatch(
      changeTheme({
        theme:
          theme === "light" ? "dark" : theme === "dark" ? "system" : "light",
      })
    );

  return (
    <button className={themeButton.button} onClick={changeCurrentTheme}>
      <span>{theme}</span>
      {theme === "light" ? (
        <IoIosSunny />
      ) : theme === "dark" ? (
        <IoIosMoon />
      ) : (
        <IoIosContrast />
      )}
    </button>
  );
};
