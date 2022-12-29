import React from "react";
import LoaderIcon from "@Assets/icons/loader.svg";
import "./loader.scss";

export const Loader = () => (
  <div className="loader w-100 flex flex-column justify-center">
    <LoaderIcon />
    Loading...
  </div>
);
