import React, { FC } from "react";
import { ThemeButton } from "components/ui";
import footer from "./Footer.module.scss";

const Footer: FC = () => (
  <footer className={footer.footer}>
    <div className={footer.container}>
      <p>© 2020 João Inez</p>
      <ThemeButton />
    </div>
  </footer>
);

export default Footer;
