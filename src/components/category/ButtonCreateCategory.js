import React from "react";

function ButtonCreateCategory({ children, setIsNewCategory, isNewCategory }) {
  return (
    <button
      className="btn-new"
      onClick={() => {
        //Toggling View for creating new category item
        setIsNewCategory(!isNewCategory);
      }}
    >
      {children}
    </button>
  );
}

export default ButtonCreateCategory;
