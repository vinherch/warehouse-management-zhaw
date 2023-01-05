import React from "react";
import CurrencyItem from "./CurrencyItem";
import ButtonNew from "./shared/ButtonNew";

function CurrencyItemContainer() {
  return (
    <div className="item-container">
      <div className="item-container-header">
        <ButtonNew>Währung erfassen</ButtonNew>
      </div>
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
            <CurrencyItem />
            <CurrencyItem />
            <CurrencyItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CurrencyItemContainer;
