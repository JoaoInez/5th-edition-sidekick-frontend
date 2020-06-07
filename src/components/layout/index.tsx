import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "types/stateTypes";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";
import layout from "./Layout.module.scss";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <div className={`${layout.content} ${theme}-theme`}>
      <Meta />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
