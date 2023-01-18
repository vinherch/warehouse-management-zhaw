import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import ArticlesContext from "../../contexts/ArticlesContext";

function ButtonUpdateArticle({ updatedArticle, isExistingArticleDescription, isDisabled }) {
  /* useContext */
  /* Get data from selected article (selectedArticle) from context. Updated article data form ArticleEdit */
  const { updateArticle } = useContext(ArticlesContext);

  return (
    <button
      className={`btn-add ${isDisabled && "btn-disabled"}`}
      onClick={() => {
        /* Check if input != "" & article description is not already existing */
        if (!isDisabled && !isExistingArticleDescription) {
          /* Call updateArticle function from context. 
          Object destructuring with selectedArticle. Update with new data (from ArticleEdit) */
          updateArticle(updatedArticle);
        }
      }}
    >
      <FaCheck color="green" />
    </button>
  );
}

export default ButtonUpdateArticle;
