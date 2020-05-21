import React, { FC, HTMLProps } from "react";
import button from "./Button.module.scss";

type Props = {
  children: string;
};

const Button: FC<Props & HTMLProps<HTMLButtonElement>> = ({
  children,
  onClick,
  className,
}) => (
  <button className={`${button.default} ${className}`} onClick={onClick}>
    <span>{children}</span>
  </button>
);

export default Button;
