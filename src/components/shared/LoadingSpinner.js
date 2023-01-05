import React from "react";
import loadingSpinner from "../../utils/loadingspinner.gif";

function LoadingSpinner() {
  return <img src={loadingSpinner} alt="Loading..." style={{ width: "200px", margin: "auto", display: "block" }}></img>;
}

export default LoadingSpinner;
