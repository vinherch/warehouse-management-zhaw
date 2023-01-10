import React from "react";

function ButtonCreateCurrency({ children, setIsNewCurrency, isNewCurrency }) {
  return (
    <button
      className="btn-new"
      onClick={() => {
        //Toggling View for creating new currency item
        setIsNewCurrency(!isNewCurrency);
      }}
    >
      {children}
    </button>
  );
}

export default ButtonCreateCurrency;
