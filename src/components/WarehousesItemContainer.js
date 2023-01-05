import React from "react";
import WarehouseItem from "./WarehouseItem";

function WarehousesItemContainer() {
  return (
    <div className="item-container">
      <div className="item-container-header">
        <h4>Warehouse Übersicht</h4>
      </div>
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <td>Artikel</td>
              <td>Lokation</td>
              <td>Menge</td>
            </tr>
          </thead>
          <tbody>
            <WarehouseItem />
            <WarehouseItem />
            <WarehouseItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WarehousesItemContainer;
