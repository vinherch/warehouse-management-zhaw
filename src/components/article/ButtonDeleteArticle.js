import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import ArticlesContext from "../../contexts/ArticlesContext";

function ButtonDeleteArticle({ item }) {
  const { deleteArticle } = useContext(ArticlesContext);

  return (
    <button
      className="btn-delete"
      onClick={() => {
        //on Click - Call delete function from article context
        deleteArticle(item);
      }}
    >
      <FaTimes color="red" />
    </button>
  );
}

export default ButtonDeleteArticle;
