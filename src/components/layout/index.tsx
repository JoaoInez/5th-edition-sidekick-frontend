import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../types/stateTypes";
import Meta from "./Meta";
import layout from "./Layout.module.scss";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <>
      <Meta />
      <main className={`${layout.content} ${theme}-theme`}>{children}</main>
    </>
  );
};

export default Layout;
