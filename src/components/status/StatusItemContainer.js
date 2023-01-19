import React, { useContext } from "react";
import StatusItem from "./StatusItem";
import ButtonCreateStatus from "./ButtonCreateStatus";
import StatusContext from "../../contexts/StatusContext";
import StatusEdit from "./StatusEdit";
import StatusNew from "./StatusNew";
import Alert from "../shared/Alert";

function StatusItemContainer() {
  //useContext - Get status data / state from context
  const { isEdit, isNewStatus, setIsNewStatus, status, isAlert } = useContext(StatusContext);

  return (
    <div className="item-container">
      <div className="item-container-header">
        <ButtonCreateStatus setIsNewStatus={setIsNewStatus} isNewStatus={isNewStatus}>
          Status erfassen
        </ButtonCreateStatus>
      </div>
      {isEdit && <StatusEdit />}
      {isNewStatus && <StatusNew />}
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
    </div>
  );
}

export default StatusItemContainer;
