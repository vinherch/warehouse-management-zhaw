import React from "react";
import loadingSpinner from "../../utils/loadingspinner.gif";

function LoadingSpinner() {
  return <img src={loadingSpinner} alt="Loading..." style={{ width: "200px", margin: "auto", marginTop: "30vh", display: "block" }}></img>;
}

export default LoadingSpinner;
