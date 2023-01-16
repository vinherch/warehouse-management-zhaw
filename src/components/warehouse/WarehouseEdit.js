import React, { useState } from "react";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import WarehousesContext from "../../contexts/WarehousesContext";

function WarehouseEdit() {
  //useContext -  Get data of selected warehouse entry.
  const { selectedWarehouseEntry, updateWarehouse, location } = useContext(WarehousesContext);

  /* States */

  /* State for warehouse article quantity - local state */
  const [currentArticleQuantity, setCurrentArticleQuantity] = useState(selectedWarehouseEntry.quantity);
  /* State for selected location. Default value, if nothing has been choosen from dropdown is set to the first position of locations array - local state */
  const [currentLocation, setCurrentLocation] = useState(selectedWarehouseEntry.location);
  /* State for currency update button - toggling enable/disable - local state */
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Position Bearbeiten</h5>
        <form>
          {/* Readonly text input for selected article */}
          <div>
            <label htmlFor="article">Artikel: </label>
            <input type="text" readOnly={true} className={"read-only"} id="article" value={selectedWarehouseEntry.article.description} />
          </div>
          {/* Location selection*/}
          <div>
            <label htmlFor="location">Lokations ID: </label>
            <select
              name="location"
              id="location"
              onClick={(e) => {
                //Set selected location in local location state
                const selection = location.filter((l) => +e.target.value === l.id);
                setCurrentLocation(selection[0]);
              }}
            >
              {location.map((e) => (
                <option value={e.id} key={e.id} selected={e.id === currentLocation.id}>
                  {e.id}
                </option>
              ))}
            </select>
          </div>
          {/* Readonly text input for selected location - aisle */}
          <div>
            <label htmlFor="location-aisle">Gang: </label>
            <input type="text" readOnly={true} className={"read-only"} id="location-aisle" value={currentLocation.aisle} />
          </div>
          {/* Readonly text input for selected location - shelf  */}
          <div>
            <label htmlFor="location-shelf">Regal: </label>
            <input type="text" readOnly={true} className={"read-only"} id="location-shelf" value={currentLocation.shelf} />
          </div>
          {/* Readonly text input for selected location - tray  */}
          <div>
            <label htmlFor="location-tray">Fach: </label>
            <input type="text" readOnly={true} className={"read-only"} id="location-tray" value={currentLocation.tray} />
          </div>

          <div>
            <label htmlFor="quantity">Menge: </label>
            <input
              type="number"
              id="quantity"
              value={currentArticleQuantity}
              onChange={(e) => {
                //Check if text input length is not 0
                if (e.target.value.trim().length != 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                setCurrentArticleQuantity(e.target.value);
              }}
            />
          </div>

          {/* Call updateWarehouse function from context. 
           Object destructuring with selectedCurrency. Update with new data */}
          <button
            className={`btn-add ${isDisabled && "btn-disabled"}`}
            onClick={(e) => {
              /* Prevent site from reload */
              e.preventDefault();
              /* Check if input != "" */
              if (!isDisabled) {
                updateWarehouse({ id: selectedWarehouseEntry.id, article: selectedWarehouseEntry.article, location: currentLocation, quantity: +currentArticleQuantity });
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

export default WarehouseEdit;
