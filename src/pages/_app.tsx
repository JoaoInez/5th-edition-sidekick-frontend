import React, { FC } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../state";
import Layout from "../components/layout";
import "../styles/global.css";
import "../styles/themes.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
