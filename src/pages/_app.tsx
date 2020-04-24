import React, { FC } from "react";
import { AppProps } from "next/app";
import "../styles/global.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
