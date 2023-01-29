import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useContext } from "react";
import WarehousesContext from "../../contexts/WarehousesContext";

function WarehouseNew() {
  /* useContext */
  /* Call function from context to add new warehouse entry. */
  const { addWarehouse, article, location } = useContext(WarehousesContext);

  /* States */
  /* State for selected article. Default value, if nothing has been choosen from dropdown is set to the first position of articles array - local state */
  const [currentArticle, setCurrentArticle] = useState([article[0]]);
  /* State for warehouse article quantity - local state */
  const [currentArticleQuantity, setCurrentArticleQuantity] = useState(0);
  /* State for selected location. Default value, if nothing has been choosen from dropdown is set to the first position of locations array - local state */
  const [currentLocation, setCurrentLocation] = useState([location[0]]);
  /* State for ButtonAddCurrency - toggling enable/disable - local state */
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Position erfassen</h5>
        <form>
          <div>
            <label htmlFor="article">Artikel: </label>
            <select
              name="article"
              id="article"
              onClick={(e) => {
                //Set selected article in local article state
                setCurrentArticle(article.filter((a) => e.target.value === a.description));
              }}
            >
              {article.map((e) => (
                <option value={e.description} key={e.id}>
                  {e.description}
                </option>
              ))}
            </select>
          </div>
          {/* Readonly text input for category, currency, status of selected article */}
          <div>
            <label htmlFor="article-category-description">Kategorie: </label>
            <input type="text" readOnly={true} id="article-category-description" className="read-only" value={currentArticle[0].category.description} />
          </div>
          {/* Readonly text input for category, currency, status of selected article */}
          <div>
            <label htmlFor="article-currencycode">Währung: </label>
            <input type="text" readOnly={true} id="article-currencycode" className="read-only" value={currentArticle[0].currency.currencyCode} />
          </div>
          {/* Readonly text input for category, currency, status of selected article */}
          <div>
            <label htmlFor="article-status">Status: </label>
            <input type="text" readOnly={true} id="article-status" className="read-only" value={currentArticle[0].status.description} />
          </div>
          <div>
            <label htmlFor="location">Lokations ID: </label>
            <select
              name="location"
              id="location"
              onClick={(e) => {
                //Set selected location in local location state
                const selection = location.filter((l) => +e.target.value === l.id);
                setCurrentLocation(selection);
              }}
            >
              {location.map((e) => (
                <option value={e.id} key={e.id}>
                  {e.id}
                </option>
              ))}
            </select>
          </div>
          {/* Readonly text input for aisle, shelf, tray - of selected locaton object */}
          <div>
            <label htmlFor="location-aisle">Gang: </label>
            <input type="text" readOnly={true} id="location-aisle" className="read-only" value={currentLocation[0].aisle} />
          </div>
          {/* Readonly text input for aisle, shelf, tray - of selected locaton object */}
          <div>
            <label htmlFor="location-shelf">Regal: </label>
            <input type="text" readOnly={true} id="location-shelf" className="read-only" value={currentLocation[0].shelf} />
          </div>
          {/* Readonly text input for aisle, shelf, tray - of selected locaton object */}
          <div>
            <label htmlFor="location-tray">Fach: </label>
            <input type="text" readOnly={true} id="location-tray" className="read-only" value={currentLocation[0].tray} />
          </div>

          <div>
            <label htmlFor="quantity">Menge: </label>
            <input
              type="number"
              id="quantity"
              value={currentArticleQuantity}
              onChange={(e) => {
                //Check for negativ value
                if (e.target.value < 0) return;
                //Check if text input length is not 0
                if (e.target.value.trim().length !== 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                setCurrentArticleQuantity(e.target.value);
              }}
            />
          </div>

          <button
            className={`btn-add ${isDisabled && "btn-disabled"}`}
            onClick={(e) => {
              /* Prevent site from reload */
              e.preventDefault();
              /* Create new warehouse entry - Call addWarehouse function from context. */
              /* Check if input != "" */
              if (!isDisabled) {
                addWarehouse({ article: currentArticle[0], location: currentLocation[0], quantity: currentArticleQuantity[0] });
              }
            }}
          >
            <FaCheck color="green" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default WarehouseNew;
