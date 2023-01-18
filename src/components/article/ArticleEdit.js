import React, { useState } from "react";
import ButtonUpdateArticle from "./ButtonUpdateArticle";
import { useContext } from "react";
import ArticlesContext from "../../contexts/ArticlesContext";

function ArticleEdit() {
  //useContext for getting data of selected article. Status data from /status endpoint
  const { selectedArticle, article, status, category, currency, isExistingArticleDescription, setIsExistingArticleDescription } = useContext(ArticlesContext);

  /* States */
  /* State for article description text input - local state */
  const [currentArticleDescription, setCurrentArticleDescription] = useState(selectedArticle.description);

  /* State for selected currency country code - local state */
  const [currentCurrency, setCurrentCurrency] = useState(selectedArticle.currency);
  /* State for selected category description - local state */
  const [currentCategory, setCurrentCategory] = useState(selectedArticle.category);
  /* State for selected status description - local state */
  const [currentStatus, setCurrentStatus] = useState(selectedArticle.status);
  /* State for amount of the selected article - local state */
  const [currentAmount, setCurrentAmount] = useState(selectedArticle.amount);
  /* State for article update button - toggling enable/disable - local state */
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Artikel Bearbeiten</h5>
        <div>
          <label htmlFor="article-description">Beschreibung: </label>
          <input
            type="text"
            id="article-description"
            /* Conditional style article description input - background red if isDisabled or isExistingDescription is true */
            style={{ backgroundColor: (isExistingArticleDescription && "rgba(255,0,0,0.3)") || (isDisabled && "rgba(255,0,0,0.3)") }}
            value={currentArticleDescription}
            onChange={(e) => {
              //Check if text input length is not empty
              if (currentArticleDescription.length <= 1) {
                setIsDisabled(true);
              } else {
                setIsDisabled(false);
              }
              setCurrentArticleDescription(e.target.value);
              //Set isExistingArticleDescription to false before checking if an article description exists
              setIsExistingArticleDescription(false);
              article.map((a) => {
                /* Check if an article description already exists & is not the selected article */
                if (a.description === e.target.value && a.description !== selectedArticle.description) {
                  setIsExistingArticleDescription(true);
                }
              });
            }}
          />
        </div>
        {/* If check article description returns true - show error message (article already exists) */}
        {isExistingArticleDescription && <div style={{ margin: "0.3rem 0rem 1rem 0rem", backgroundColor: "lightyellow" }}>Artikel / Beschreibung existiert bereits</div>}
        {isDisabled && <div style={{ margin: "0.3rem 0rem 1rem 0rem", backgroundColor: "lightyellow" }}>Feld "Beschreibung" darf nicht leer sein</div>}
        <div>
          <label htmlFor="article-category">Kategorie: </label>
          <select
            name="article-category"
            id="article-category"
            onClick={(e) => {
              const target = category.filter((c) => c.description === e.target.value);
              setCurrentCategory(target[0]);
            }}
          >
            {category.map((e) => (
              <option value={e.description} key={e.id} selected={e.description === currentCategory.description}>
                {e.description}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="article-currency">Währung: </label>
          <select
            name="article-currency"
            id="article-currency"
            onClick={(e) => {
              const target = currency.filter((c) => c.currencyCode === e.target.value);
              setCurrentCurrency(target[0]);
            }}
          >
            {currency.map((e) => (
              <option value={e.currencyCode} key={e.id} selected={e.currencyCode === currentCurrency.currencyCode}>
                {e.currencyCode}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="article-status">Status: </label>
          <select
            name="article-status"
            id="article-status"
            onClick={(e) => {
              const target = status.filter((s) => s.description === e.target.value);
              setCurrentStatus(target[0]);
            }}
          >
            {status.map((e) => (
              <option value={e.description} key={e.id} selected={e.description === currentStatus.description}>
                {e.description}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="amount">Wert: </label>
          <input
            type="number"
            id="amount"
            value={currentAmount}
            onChange={(e) => {
              //Check if amount is > 0
              if (currentAmount > 0) {
                setIsDisabled(false);
              } else {
                setIsDisabled(true);
              }
              setCurrentAmount(e.target.value);
            }}
          />
        </div>
        <ButtonUpdateArticle
          updatedArticle={{ id: selectedArticle.id, description: currentArticleDescription, category: currentCategory, currency: currentCurrency, status: currentStatus, amount: +currentAmount }}
          isExistingArticleDescription={isExistingArticleDescription}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
}

export default ArticleEdit;
