import React, { useContext } from "react";
import WarehouseItem from "./WarehouseItem";
import WarehousesContext from "../../contexts/WarehousesContext";
import WarehouseEdit from "./WarehouseEdit";
import WarehouseNew from "./WarehouseNew";
import ButtonCreateWarehouse from "./ButtonCreateWarehouse";
import Alert from "../shared/Alert";
import FlashMessage from "../shared/FlashMessage";

function WarehousesItemContainer() {
  //useContext - Get warehouse data / States from context
  const { isEdit, isNewWarehouse, setIsNewWarehouse, warehouse, sendEmail, isAlert, mailSent, downloadCSV } = useContext(WarehousesContext);

  return (
    <div className="item-container">
      <div className="item-container-header">
        <div className="btn-container btn-warehouse-container">
          <div>
            <ButtonCreateWarehouse setIsNewWarehouse={setIsNewWarehouse} isNewWarehouse={isNewWarehouse}>
              Neue Position erfassen
            </ButtonCreateWarehouse>
          </div>
          <div>
            <button className="btn-csv" style={{ marginLeft: "auto", marginRight: "auto" }} onClick={async () => downloadCSV("warehouses", "Warehouse")}>
              CSV Export
            </button>
          </div>
          <div>
            <button
              style={{ marginLeft: "auto" }}
              className="btn-email btn-warehouse"
              onClick={async () => {
                await sendEmail();
              }}
            >
              Sende E-Mail Bestellung
            </button>
          </div>
        </div>
      </div>
      {/* Toggling article create */}
      {isNewWarehouse && <WarehouseNew />}
      {/* Toggling article edit */}
      {isEdit && <WarehouseEdit />}
      {/* Toggling failure alert */}
      {isAlert.status && <Alert statusText={isAlert.statusText} msg={isAlert.msg} />}
      {/* Flash message sent e-mail */}
      {mailSent && <FlashMessage msg="E-Mail wurde erfolgreich versendet!" />}
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Artikel ID</th>
              <th>Artikel Beschreibung</th>
              <th>Kategorie</th>
              <th>Währung</th>
              <th>Status</th>
              <th>Gang</th>
              <th>Regal</th>
              <th>Fach</th>
              <th>Menge</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {warehouse.map((e) => (
              <WarehouseItem item={e} key={e.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WarehousesItemContainer;
