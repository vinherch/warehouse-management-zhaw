import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useContext } from "react";
import CurrenciesContext from "../../contexts/CurrenciesContext";

function CurrencyNew() {
  /* useContext */
  /* Call function from context to add new currency. */
  const { addCurrency, currency, isExistingCurrencyCode, setIsExistingCurrencyCode } = useContext(CurrenciesContext);

  /* States */
  /* State for currency code text input - local state */
  const [currentCurrencyCode, setCurrentCurrencyCode] = useState("");
  /* State for currency country text input - local state */
  const [currentCurrencyCountry, setCurrentCurrencyCountry] = useState("");
  /* State for ButtonAddCurrency - toggling enable/disable - local state */
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Währung erstellen</h5>
        <form>
          <div>
            <label htmlFor="currency-code">Währungs Code: </label>
            <input
              type="text"
              id="currency-code"
              style={{ backgroundColor: isExistingCurrencyCode && "rgba(255,0,0,0.3)" }}
              value={currentCurrencyCode}
              onChange={(e) => {
                //Check if text input length is not 0
                if (e.target.value.trim().length != 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                setCurrentCurrencyCode(e.target.value);
                //Set isExistingCurrencyCode to false before checking if currency code exists
                setIsExistingCurrencyCode(false);
                currency.map((c) => {
                  if (c.currencyCode === e.target.value) {
                    setIsExistingCurrencyCode(true);
                  }
                });
              }}
            />
          </div>
          {/* If check currencies returns true - show message*/}
          {isExistingCurrencyCode && <div style={{ margin: "0.3rem 0rem 1rem 0rem", backgroundColor: "lightyellow" }}>Währungs Code existiert bereits</div>}
          <div>
            <label htmlFor="currency-country">Land: </label>
            <input
              type="text"
              id="currency-country"
              value={currentCurrencyCountry}
              onChange={(e) => {
                //Check if text input length is not 0
                if (e.target.value.trim().length != 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                setCurrentCurrencyCountry(e.target.value);
              }}
            />
          </div>
          <button
            className={`btn-add ${isDisabled && "btn-disabled"}`}
            onClick={(e) => {
              /* Prevent site from reload */
              e.preventDefault();
              /* Cretae new currency object - Call addCurrency function from context. */
              /* Check if input != "" & if currency is not already existing */
              if (!isDisabled && !isExistingCurrencyCode) {
                addCurrency({ currencyCode: currentCurrencyCode, country: currentCurrencyCountry });
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

export default CurrencyNew;
