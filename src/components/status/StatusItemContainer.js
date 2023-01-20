import React, { useContext } from "react";
import StatusItem from "./StatusItem";
import ButtonCreateStatus from "./ButtonCreateStatus";
import StatusContext from "../../contexts/StatusContext";
import StatusEdit from "./StatusEdit";
import StatusNew from "./StatusNew";
import Alert from "../shared/Alert";

function StatusItemContainer() {
  //useContext - Get status data / state from context
  const { isEdit, isNewStatus, setIsNewStatus, status, isAlert, downloadCSV } = useContext(StatusContext);

  return (
    <div className="item-container">
      <div className="item-container-header">
        <div className="btn-container">
          <div>
            <ButtonCreateStatus setIsNewStatus={setIsNewStatus} isNewStatus={isNewStatus}>
              Status erfassen
            </ButtonCreateStatus>
          </div>
        </div>
      </div>
      {isNewStatus && <StatusNew />}
      {isEdit && <StatusEdit />}
      {isAlert.status && <Alert statusText={isAlert.statusText} msg={isAlert.msg} />}
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Beschreibung</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {status.map((e) => (
              <StatusItem item={e} key={e.id} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn-csv-container">
        <button className="btn-csv" onClick={async () => downloadCSV("statuses", "Status")}>
          CSV Export
        </button>
      </div>
    </div>
  );
}

export default StatusItemContainer;
