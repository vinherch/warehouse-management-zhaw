import React, { useState } from "react";
import { useContext } from "react";
import ArticlesContext from "../../contexts/ArticlesContext";
import ButtonAddArticle from "./ButtonAddArticle";

function ArticleNew() {
  //useContext for getting data of categories, currencies, status - which are required to create a new article
  const { article, category, currency, status, isExistingArticleDescription, setIsExistingArticleDescription } = useContext(ArticlesContext);

  /* States */
  /* State for article description text input - local state */
  const [currentArticleDescription, setCurrentArticleDescription] = useState("");
  /* State for selected currency. Default value, if nothing has been choosen from dropdown is set to the first position of currencies array - local state */
  const [currentCurrency, setCurrentCurrency] = useState([currency[0]]);
  /* State for selected category. Default value, if nothing has been choosen from dropdown is set to the first position of categories array - local state */
  const [currentCategory, setCurrentCategory] = useState([category[0]]);
  /* State for selected status. Default value, if nothing has been choosen from dropdown is set to the first position of status array - local state */
  const [currentStatus, setCurrentStatus] = useState([status[0]]);
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
              //Set isExistingArticleDescription to false before checking if article description already exists
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
          <label htmlFor="currency-select">Währung: </label>
          <select
            name="currency-select"
            id="currency-select"
            onClick={(e) => {
              //Set selected currency in local currency state
              setCurrentCurrency(currency.filter((c) => e.target.value === c.currencyCode));
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
              //Set selected category in local category state
              setCurrentCategory(category.filter((c) => e.target.value === c.description));
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
              //Set selected status in local status state
              setCurrentStatus(status.filter((s) => e.target.value === s.description));
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
        <ButtonAddArticle
          isDisabled={isDisabled}
          articleDescription={currentArticleDescription}
          currency={{ id: currentCurrency[0].id, country: currentCurrency[0].country, currencyCode: currentCurrency[0].currencyCode }}
          category={{ id: currentCategory[0].id, description: currentCategory[0].description }}
          status={{ id: currentStatus[0].id, description: currentStatus[0].description }}
          amount={currentAmount}
        />
      </div>
    </div>
  );
}

export default ArticleNew;
