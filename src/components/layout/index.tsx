import React, { FC } from "react";
import Meta from "./Meta";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => (
  <>
    <Meta />
    <main className="light-theme">{children}</main>
  </>
);

export default Layout;
