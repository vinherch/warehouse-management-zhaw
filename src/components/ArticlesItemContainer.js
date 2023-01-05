import React from "react";
import ArticleItem from "./ArticleItem";
import ButtonNew from "./shared/ButtonNew";

function ArticlesItemContainer() {
  return (
    <div className="item-container">
      <div className="item-container-header">
        <ButtonNew>Artikel erfassen</ButtonNew>
      </div>
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <td>Beschreibung</td>
              <td>Kategorien</td>
              <td>Währung</td>
              <td>Status</td>
              <td>Wert</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArticlesItemContainer;
