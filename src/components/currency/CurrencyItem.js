import React from "react";
import { useContext } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import CurrenciesContext from "../../contexts/CurrenciesContext";

function CurrencyItem({ item }) {
  const { isEdit, setIsEdit, setSelectedCurrency, deleteCurrency } = useContext(CurrenciesContext);

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.currencyCode}</td>
      <td>{item.country}</td>
      <td style={{ padding: "0.5rem 0.8rem" }}>
        <button
          className="btn-edit"
          onClick={() => {
            /* Toggle Edit View */
            setIsEdit(!isEdit);
            /*Set currency item as selected in context state */
            setSelectedCurrency(item);
          }}
        >
          <FaEdit color="black" />
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            //on Click - Call delete function from categories context
            deleteCurrency(item);
          }}
        >
          <FaTimes color="red" />
        </button>
      </td>
    </tr>
  );
}

export default CurrencyItem;
