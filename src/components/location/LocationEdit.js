import React, { useState } from "react";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import LocationsContext from "../../contexts/LocationsContext";

function LocationEdit() {
  //useContext for getting data of selected location
  const { selectedLocation, updateLocation, isExistingLocationCombination, setIsExistingLocationCombination, location } = useContext(LocationsContext);

  /* States */

  /* State for aisle text input - local state */
  const [currentAisle, setCurrentAisle] = useState(selectedLocation.aisle);
  /* State for numeric input - shelf - local state */
  const [currentShelf, setCurrentShelf] = useState(selectedLocation.shelf);
  /* State for numeric input - tray - local state */
  const [currentTray, setCurrentTray] = useState(selectedLocation.tray);
  /* State for location update button - toggling enable/disable - local state */
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Lokation Bearbeiten</h5>
        <form>
          <div>
            <label htmlFor="aisle">Gang: </label>
            <input
              type="text"
              id="aisle"
              style={{ backgroundColor: isExistingLocationCombination && "rgba(255,0,0,0.3)" }}
              value={currentAisle}
              onChange={(e) => {
                //Check if text input length is not 0
                if (e.target.value.trim().length !== 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                setCurrentAisle(e.target.value);
                //Reset isExistingLocationCombination to false
                setIsExistingLocationCombination(false);
              }}
            />
          </div>
          <div>
            <label htmlFor="shelf">Regal Nr.: </label>
            <input
              type="number"
              id="shelf"
              style={{ backgroundColor: isExistingLocationCombination && "rgba(255,0,0,0.3)" }}
              value={currentShelf}
              onChange={(e) => {
                //Check if text input length is not 0
                if (e.target.value.trim().length !== 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                /* + sign to convert string to number (e.target.value) */
                setCurrentShelf(+e.target.value);
                //Reset isExistingLocationCombination to false
                setIsExistingLocationCombination(false);
              }}
            />
          </div>
          <div>
            <label htmlFor="tray">Fach Nr.: </label>
            <input
              type="number"
              id="tray"
              style={{ backgroundColor: isExistingLocationCombination && "rgba(255,0,0,0.3)" }}
              value={currentTray}
              onChange={(e) => {
                //Check if text input length is not 0
                if (e.target.value.trim().length !== 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                /* + sign to convert string to number (e.target.value) */
                setCurrentTray(+e.target.value);
                //Reset isExistingLocationCombination to false
                setIsExistingLocationCombination(false);
              }}
            />
          </div>
          {/* If check isExistingLocationCombination returns true - show message*/}
          {isExistingLocationCombination && <div style={{ margin: "0.3rem 0rem 1rem 0rem", backgroundColor: "lightyellow" }}>Die Kombination aus Gang, Regal & Fach existiert bereits</div>}
          <button
            className={`btn-add ${isDisabled && "btn-disabled"}`}
            onClick={(e) => {
              /* Prevent site from reload */
              e.preventDefault();
              /* Check if currentAisle, currentShelf & currentTray is equals to an existing location combination */
              const match = location.filter((l) => l.aisle === currentAisle && l.shelf === currentShelf && l.tray === currentTray);
              if (match && match.length > 0) {
                setIsExistingLocationCombination(true);
                return;
              }
              /* Check if input != "" & if location combination is not already existing */
              if (!isDisabled && !isExistingLocationCombination) {
                updateLocation({ id: selectedLocation.id, aisle: currentAisle, shelf: currentShelf, tray: currentTray });
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

export default LocationEdit;
