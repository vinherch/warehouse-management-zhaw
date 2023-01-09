import React from "react";
import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import ArticlesContext from "../../contexts/ArticlesContext";

function ButtonEditArticle({ article }) {
  const { isEdit, setIsEdit, setSelectedArticle } = useContext(ArticlesContext);

  return (
    <button
      className="btn-edit"
      onClick={() => {
        /* Toggle Edit View */
        setIsEdit(!isEdit);
        /*Set article as selected in context state */
        setSelectedArticle(article);
      }}
    >
      <FaEdit color="black" />
    </button>
  );
}

export default ButtonEditArticle;
