import React from "react";
import LocationItem from "./LocationItem";
import ButtonNew from "./shared/ButtonNew";

function LocationsItemContainer() {
  return (
    <div className="item-container">
      <div className="item-container-header">
        <ButtonNew>Lokation erfassen</ButtonNew>
      </div>
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <td>Ländercode</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <LocationItem />
            <LocationItem />
            <LocationItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LocationsItemContainer;
