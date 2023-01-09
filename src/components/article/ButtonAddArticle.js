import React from "react";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import ArticlesContext from "../../contexts/ArticlesContext";

function ButtonAddArticle({ articleDescription, currency, category, status, amount, isDisabled }) {
  /* useContext */
  /* Create new article with data from ArticleNew via props. Call function from context to add new article. */
  const { addArticle } = useContext(ArticlesContext);

  return (
    <button
      className={`btn-add ${isDisabled && "btn-disabled"}`}
      onClick={() => {
        /* Cretae new article object - Call addArticle function from context. */
        if (!isDisabled) {
          addArticle({ description: articleDescription, currency, category, status, amount });
        }
      }}
    >
      <FaCheck color="green" />
    </button>
  );
}

export default ButtonAddArticle;
