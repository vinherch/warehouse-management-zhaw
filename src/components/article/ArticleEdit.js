import React, { useState } from "react";
import ButtonUpdateArticle from "./ButtonUpdateArticle";
import { useContext } from "react";
import ArticlesContext from "../../contexts/ArticlesContext";

function ArticleEdit() {
  //useContext for getting data of selected article. Status data from /status endpoint
  const { selectedArticle, status } = useContext(ArticlesContext);

  /* States */
  /* State for article description text input - local state */
  const [currentArticleDescription, setCurrentArticleDescription] = useState(selectedArticle.description);
  const [currentArticleStatus, setCurrentArticleStatus] = useState({ id: selectedArticle.status.id, description: selectedArticle.status.description });

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Artikel Bearbeiten</h5>
        <div>
          <label htmlFor="article-description">Beschreibung: </label>
          <input
            type="text"
            id="article-description"
            value={currentArticleDescription}
            onChange={(e) => {
              setCurrentArticleDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="article-status">Status: </label>
          <select
            name="article-status"
            id="article-status"
            onClick={(e) => {
              const s = status.filter((s) => s.description === e.target.value);
              setCurrentArticleStatus({ id: s[0].id, description: s[0].description });
            }}
          >
            {status.map((e) => (
              <option value={e.description} key={e.id} selected={e.description === currentArticleStatus.description}>
                {e.description}
              </option>
            ))}
          </select>
        </div>
        <ButtonUpdateArticle updatedDescription={currentArticleDescription} updatedStatus={currentArticleStatus} />
      </div>
    </div>
  );
}

export default ArticleEdit;
