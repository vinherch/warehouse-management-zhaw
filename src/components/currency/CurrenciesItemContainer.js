import React, { useContext } from "react";
import CurrencyItem from "./CurrencyItem";
import ButtonCreateCurrency from "./ButtonCreateCurrency";
import CurrenciesContext from "../../contexts/CurrenciesContext";
import CurrencyEdit from "./CurrencyEdit";
import CurrencyNew from "./CurrencyNew";
import Alert from "../shared/Alert";

function CurrencyItemContainer() {
  //useContext - Get Currencies Data / State from context
  const { isEdit, isNewCurrency, setIsNewCurrency, currency, isAlert, downloadCSV } = useContext(CurrenciesContext);

  return (
    <div className="item-container">
      <div className="item-container-header">
        <div className="btn-container">
          <div>
            <ButtonCreateCurrency setIsNewCurrency={setIsNewCurrency} isNewCurrency={isNewCurrency}>
              Währung erfassen
            </ButtonCreateCurrency>
          </div>
          <div className="btn-csv-container">
            <button className="btn-csv" onClick={async () => downloadCSV("currencies", "Currencies")}>
              CSV Export
            </button>
          </div>
        </div>
      </div>
      {isNewCurrency && <CurrencyNew />}
      {isEdit && <CurrencyEdit />}
      {isAlert.status && <Alert statusText={isAlert.statusText} msg={isAlert.msg} />}
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Währungscode</th>
              <th>Land</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {currency.map((e) => (
              <CurrencyItem item={e} key={e.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CurrencyItemContainer;
