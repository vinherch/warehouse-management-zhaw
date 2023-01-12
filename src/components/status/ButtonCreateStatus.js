import React from "react";

function ButtonCreateStatus({ children, setIsNewStatus, isNewStatus }) {
  return (
    <button
      className="btn-new"
      onClick={() => {
        //Toggling view for creating new status item
        setIsNewStatus(!isNewStatus);
      }}
    >
      {children}
    </button>
  );
}

export default ButtonCreateStatus;
