import React, { FC, HTMLProps } from "react";
import * as R from "ramda";
import button from "./Button.module.scss";

type Props = {
  children: string;
};

export const Button: FC<Props & HTMLProps<HTMLButtonElement>> = (props) => {
  const { children, className } = props;

  return (
    <button
      {...R.dissoc("children")(props)}
      className={`${button.default} ${className}`}
    >
      <span>{children}</span>
    </button>
  );
};
