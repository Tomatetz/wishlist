import React from "react";
import LoaderIcon from "src/assets/icons/loader.svg";
import styles from "@Styles/Loader.module.scss";

export const Loader = () => (
  <div className={`${styles.loader} w-100 flex flex-column justify-center`}>
    <LoaderIcon />
    Loading...
  </div>
);
