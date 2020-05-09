import React, { FC } from "react";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/global.css";
import "../styles/themes.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
