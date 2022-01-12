import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Spinner.module.css";

import React from "react";

function Spinner() {
  return (
    <Loader
      className={s.loader}
      type="BallTriangle"
      color="#00BFFF"
      height={150}
      width={150}
      timeout={1000}
    />
  );
}

export default Spinner;
