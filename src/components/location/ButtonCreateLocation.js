import React from "react";

function ButtonCreateLocation({ children, setIsNewLocation, isNewLocation }) {
  return (
    <button
      className="btn-new"
      onClick={() => {
        //Toggling View for creating new location item
        setIsNewLocation(!isNewLocation);
      }}
    >
      {children}
    </button>
  );
}

export default ButtonCreateLocation;
