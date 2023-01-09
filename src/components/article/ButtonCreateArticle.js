import React from "react";

function ButtonCreateArticle({ children, setIsNewArticle, isNewArticle }) {
  return (
    <button
      className="btn-new"
      onClick={() => {
        setIsNewArticle(!isNewArticle);
      }}
    >
      {children}
    </button>
  );
}

export default ButtonCreateArticle;
