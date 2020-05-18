import React, { FC, ReactNode, HTMLProps } from "react";
import button from "./Button.module.scss";

type Props = {
  children: ReactNode;
};

const Button: FC<Props & HTMLProps<HTMLButtonElement>> = ({
  children,
  onClick,
}) => (
  <button className={button.default} onClick={onClick}>
    {children}
  </button>
);

export default Button;
