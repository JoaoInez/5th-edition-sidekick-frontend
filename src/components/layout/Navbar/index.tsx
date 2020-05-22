import React, { FC } from "react";
import navbar from "./Navbar.module.scss";

const Navbar: FC = () => (
  <nav className={navbar.navbar}>
    <div className={`${navbar.container}`}>
      <span className={navbar.logo}>5es</span>
      <div></div>
    </div>
  </nav>
);

export default Navbar;
