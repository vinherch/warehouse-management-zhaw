import React from "react";

function ErrorMessage({ error }) {
  return (
    <div className="error-container" style={{ marginTop: "20vh" }}>
      <div>
        <img src="./assets/error.png" alt="" />
        <h3>Ups! Irgendwas ist schief gelaufen!</h3>
      </div>
      <div>
        <p>Details: </p>
        <p>{error} </p>
      </div>
    </div>
  );
}

export default ErrorMessage;
