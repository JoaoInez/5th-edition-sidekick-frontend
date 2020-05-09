import React, { FC } from "react";
import button from "./Button.module.scss";

type Props = {
  children: JSX.Element | string;
};

const Button: FC<Props> = ({ children }) => (
  <button className={button.default}>{children}</button>
);

export default Button;
