import React, { useState, FC, HTMLProps, ReactNode } from "react";
import * as R from "ramda";
import input from "./Input.module.scss";

type Props = {
  icon?: ReactNode;
  errors?: Array<string>;
};

export const Input: FC<Props & HTMLProps<HTMLInputElement>> = (props) => {
  const { className, type, icon } = props;
  const [focus, setFocus] = useState(false);

  return type === "submit" ? (
    <input
      {...R.dissoc("icon")(props)}
      className={`${input.button} ${className ? className : ""}`}
    />
  ) : (
    <div
      className={`${input.wrapper} ${focus ? input.focus : ""} ${
        className ? className : ""
      }`}
    >
      {icon}
      <input
        {...R.omit(["icon", "className"])(props)}
        onFocus={(): void => setFocus(true)}
        onBlur={(): void => setFocus(false)}
      />
    </div>
  );
};
