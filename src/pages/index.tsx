import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/stateTypes";
import { changeTheme } from "../state/slices/themeSlice";
import Button from "../components/ui/Button";

const Home: FC = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: RootState) => state.theme);

  const changeCurrentTheme = (): void =>
    dispatch(changeTheme({ theme: theme === "light" ? "dark" : "light" }));

  return (
    <section>
      <h1>5th Edition Sidekick</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est excepturi
        repellat nesciunt voluptates pariatur maiores, maxime saepe veritatis
        distinctio at vel eos quo assumenda. Eaque esse repudiandae nesciunt
        praesentium sit.
      </p>
      <Button onClick={changeCurrentTheme}>Button</Button>
    </section>
  );
};

export default Home;
