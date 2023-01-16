import React from "react";
import { useContext } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import WarehousesContext from "../../contexts/WarehousesContext";

function WarehouseItem({ item }) {
  const { isEdit, setIsEdit, setSelectedWarehouseEntry, deleteWarehouse } = useContext(WarehousesContext);

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.article.id}</td>
      <td>{item.article.description}</td>
      <td>{item.article.category.description}</td>
      <td>{item.article.currency.currencyCode}</td>
      <td>{item.article.status.description}</td>
      <td>{item.location.aisle}</td>
      <td>{item.location.shelf}</td>
      <td>{item.location.tray}</td>
      <td>{item.quantity}</td>
      <td style={{ padding: "0.5rem 0.8rem" }}>
        <button
          className="btn-edit"
          onClick={() => {
            /* Toggle Edit View */
            setIsEdit(!isEdit);
            /*Set warehouse entry as selected in context state */
            setSelectedWarehouseEntry(item);
          }}
        >
          <FaEdit color="black" />
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            //on Click - Call delete function from warehouses context
            deleteWarehouse(item);
          }}
        >
          <FaTimes color="red" />
        </button>
      </td>
    </tr>
  );
}

export default WarehouseItem;
