import React, { FC } from "react";
import styles from "./Button.module.scss";

type Props = {
  children: JSX.Element | string;
};

const Button: FC<Props> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
