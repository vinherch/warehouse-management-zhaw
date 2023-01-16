import React from "react";
import { useContext } from "react";
import ArticleItem from "./ArticleItem";
import ButtonCreateArticle from "./ButtonCreateArticle";
import ArticlesContext from "../../contexts/ArticlesContext";
import ArticleEdit from "./ArticleEdit";
import ArticleNew from "./ArticleNew";

function ArticlesItemContainer() {
  //useContext - Get Articles Data / State
  const { isEdit, isNewArticle, setIsNewArticle, article } = useContext(ArticlesContext);

  return (
    <div className="item-container">
      <div className="item-container-header">
        <ButtonCreateArticle setIsNewArticle={setIsNewArticle} isNewArticle={isNewArticle}>
          Artikel erfassen
        </ButtonCreateArticle>
      </div>
      {isEdit && <ArticleEdit />}
      {isNewArticle && <ArticleNew />}
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Beschreibung</th>
              <th>Kategorien</th>
              <th>Währung</th>
              <th>Wert</th>
              <th>Status</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {article.map((e) => (
              <ArticleItem item={e} key={e.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArticlesItemContainer;
