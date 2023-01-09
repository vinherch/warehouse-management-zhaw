import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import ArticlesContext from "../../contexts/ArticlesContext";

function ButtonUpdateArticle({ updatedDescription, updatedStatus }) {
  /* useContext */
  /* Get data from selected article (selectedArticle) from context. Updated article data form ArticleEdit */
  const { selectedArticle, updateArticle } = useContext(ArticlesContext);

  return (
    <button
      className="btn-update"
      onClick={() => {
        /* Call updateArticle function from context. 
        Object destructuring with selectedArticle. Update with new data (from ArticleEdit) */
        updateArticle({ ...selectedArticle, description: updatedDescription, status: { id: updatedStatus.id, description: updatedStatus.description } });
      }}
    >
      <FaCheck color="green" />
    </button>
  );
}

export default ButtonUpdateArticle;
