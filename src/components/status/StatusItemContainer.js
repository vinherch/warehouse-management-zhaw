import React from "react";
import StatusItem from "./StatusItem";
// import ButtonNew from "./shared/ButtonNew";

function StatusItemContainer() {
  return (
    <div className="item-container">
      <div className="item-container-header">{/* <ButtonNew>Status erfassen</ButtonNew> */}</div>
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <td>Beschreibung</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <StatusItem />
            <StatusItem />
            <StatusItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatusItemContainer;
