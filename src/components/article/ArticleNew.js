import React, { useState } from "react";
import { useContext } from "react";
import ArticlesContext from "../../contexts/ArticlesContext";
import ButtonAddArticle from "./ButtonAddArticle";

function ArticleNew() {
  //useContext for getting data of categories, currencies, status - which are required to create a new article
  const { category, currency, status } = useContext(ArticlesContext);

  /* States */
  /* State for article description text input - local state */
  const [currentArticleDescription, setCurrentArticleDescription] = useState("");
  /* State for selected currency - local state */
  const [currentCurrency, setCurrentCurrency] = useState({});
  /* State for selected category - local state */
  const [currentCategory, setCurrentCategory] = useState({});
  /* State for selected status - local state */
  const [currentStatus, setCurrentStatus] = useState({});
  /* State for selected amount - local state */
  const [currentAmount, setCurrentAmount] = useState(0);
  /* State for ButtonAddArticle - toggling enable/disable - local state */
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Artikel erstellen</h5>
        <div>
          <label htmlFor="article-description">Beschreibung: </label>
          <input
            type="text"
            id="article-description"
            value={currentArticleDescription}
            onChange={(e) => {
              //Check if text input length is not 0
              if (e.target.value.trim().length != 0) {
                setIsDisabled(false);
              } else {
                setIsDisabled(true);
              }
              setCurrentArticleDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="currency-select">Währung: </label>
          <select
            name="currency-select"
            id="currency-select"
            onClick={(e) => {
              const selectedCurrency = currency.filter((c) => e.target.value === c.currencyCode);
              //Set selected currency in local currency state
              setCurrentCurrency({ id: selectedCurrency[0].id, currencyCode: selectedCurrency[0].currencyCode, country: selectedCurrency[0].country });
            }}
          >
            {currency.map((e) => (
              <option value={e.currencyCode} key={e.id}>
                {e.currencyCode}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="category-select">Kategorie: </label>
          <select
            name="category-select"
            id="category-select"
            onClick={(e) => {
              const selectedCategory = category.filter((c) => e.target.value === c.description);
              //Set selected category in local currency state
              setCurrentCategory({ id: selectedCategory[0].id, description: selectedCategory[0].description });
            }}
          >
            {category.map((e) => (
              <option value={e.description} key={e.id}>
                {e.description}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="status-select">Status: </label>
          <select
            name="status-select"
            id="status-select"
            onClick={(e) => {
              const selectedStatus = status.filter((s) => e.target.value === s.description);
              //Set selected status in local status state
              setCurrentStatus({ id: selectedStatus[0].id, description: selectedStatus[0].description });
            }}
          >
            {status.map((e) => (
              <option value={e.description} key={e.id}>
                {e.description}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="article-amount">Wert: </label>
          <input
            type="number"
            min={currentAmount}
            id="article-amount"
            value={currentAmount}
            onChange={(e) => {
              setCurrentAmount(e.target.value);
            }}
          />
        </div>
        {/* Passing local props currentArticleDescription, currentCurrency, currentCategory, currentStatus, currentAmount to ButtonAddArticle */}
        <ButtonAddArticle isDisabled={isDisabled} articleDescription={currentArticleDescription} currency={currentCurrency} category={currentCategory} status={currentStatus} amount={currentAmount} />
      </div>
    </div>
  );
}

export default ArticleNew;
