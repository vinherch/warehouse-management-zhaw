import React, { useState } from "react";
import ButtonUpdateArticle from "./ButtonUpdateArticle";
import { useContext } from "react";
import ArticlesContext from "../../contexts/ArticlesContext";

function ArticleEdit() {
  //useContext for getting data of selected article. Status data from /status endpoint
  const { selectedArticle, article, status, isExistingArticleDescription, setIsExistingArticleDescription } = useContext(ArticlesContext);

  /* States */
  /* State for article description text input - local state */
  const [currentArticleDescription, setCurrentArticleDescription] = useState(selectedArticle.description);
  const [currentArticleStatus, setCurrentArticleStatus] = useState({ id: selectedArticle.status.id, description: selectedArticle.status.description });
  /* State for article update button - toggling enable/disable - local state */
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Artikel Bearbeiten</h5>
        <div>
          <label htmlFor="article-description">Beschreibung: </label>
          <input
            type="text"
            id="article-description"
            style={{ backgroundColor: isExistingArticleDescription && "rgba(255,0,0,0.3)" }}
            value={currentArticleDescription}
            onChange={(e) => {
              //Check if text input length is not 0
              if (e.target.value.trim().length != 0) {
                setIsDisabled(false);
              } else {
                setIsDisabled(true);
              }
              setCurrentArticleDescription(e.target.value);
              //Set isExistingArticleDescription to false before checking if an article description exists
              setIsExistingArticleDescription(false);
              article.map((a) => {
                if (a.description === e.target.value) {
                  setIsExistingArticleDescription(true);
                }
              });
            }}
          />
        </div>
        {/* If check article description returns true - show message*/}
        {isExistingArticleDescription && <div style={{ margin: "0.3rem 0rem 1rem 0rem", backgroundColor: "lightyellow" }}>Artikel / Beschreibung existiert bereits</div>}
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
        <ButtonUpdateArticle updatedDescription={currentArticleDescription} updatedStatus={currentArticleStatus} isExistingArticleDescription={isExistingArticleDescription} isDisabled={isDisabled} />
      </div>
    </div>
  );
}

export default ArticleEdit;
