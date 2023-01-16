import React from "react";

function ButtonCreateCurrency({ children, setIsNewWarehouse, isNewWarehouse }) {
  return (
    <button
      className="btn-new"
      onClick={() => {
        //Toggling view for creating new warehouse entry
        setIsNewWarehouse(!isNewWarehouse);
      }}
    >
      {children}
    </button>
  );
}

export default ButtonCreateCurrency;
