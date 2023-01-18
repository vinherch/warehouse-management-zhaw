import React from "react";

function ErrorRoute() {
  return (
    <div className="error-container" style={{ marginTop: "20vh" }}>
      <div>
        <img src="./assets/error.png" alt="" />
        <h3>Falsche abgebogen! Das ist eine ungültige Route...</h3>
      </div>
    </div>
  );
}

export default ErrorRoute;
