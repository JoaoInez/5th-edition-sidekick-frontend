import React, { FC, MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "types/stateTypes";
import { changeTheme } from "state/slices/themeSlice";
import Icon from "components/icons";
import themeButton from "./ThemeButton.module.scss";

const ThemeButton: FC = () => {
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
      <Icon
        icon={
          theme === "light" ? "sun" : theme === "dark" ? "moon" : "contrast"
        }
        className={themeButton.icon}
      />
    </button>
  );
};

export default ThemeButton;
