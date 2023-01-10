import React, { useContext } from "react";
import CurrencyItem from "./CurrencyItem";
import ButtonCreateCurrency from "./ButtonCreateCurrency";
import CurrenciesContext from "../../contexts/CurrenciesContext";
import CurrencyEdit from "./CurrencyEdit";
import CurrencyNew from "./CurrencyNew";

function CurrencyItemContainer() {
  //useContext - Get Currencies Data / State from context
  const { isEdit, isNewCurrency, setIsNewCurrency, currency } = useContext(CurrenciesContext);

  return (
    <div className="item-container">
      <div className="item-container-header">
        <ButtonCreateCurrency setIsNewCurrency={setIsNewCurrency} isNewCurrency={isNewCurrency}>
          Währung erfassen
        </ButtonCreateCurrency>
      </div>
      {isEdit && <CurrencyEdit />}
      {isNewCurrency && <CurrencyNew />}
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <td>Währungscode</td>
              <td>Land</td>
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
