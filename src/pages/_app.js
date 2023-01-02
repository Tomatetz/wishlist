import React from "react";
import { Header } from "@Components/Header";
import { AppWrapper } from "@Context/UserContext.js";
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  );
};
export default MyApp;
