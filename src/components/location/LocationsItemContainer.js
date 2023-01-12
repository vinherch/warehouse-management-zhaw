import React, { useContext } from "react";
import LocationItem from "./LocationItem";
import ButtonCreateLocation from "./ButtonCreateLocation";
import LocationsContext from "../../contexts/LocationsContext";
import LocationEdit from "./LocationEdit";
import LocationNew from "./LocationNew";

function LocationsItemContainer() {
  //useContext - Get locations data / state from context
  const { isEdit, isNewLocation, setIsNewLocation, location } = useContext(LocationsContext);

  return (
    <div className="item-container">
      <div className="item-container-header">
        <ButtonCreateLocation setIsNewLocation={setIsNewLocation} isNewLocation={isNewLocation}>
          Lokation erfassen
        </ButtonCreateLocation>
      </div>
      {isEdit && <LocationEdit />}
      {isNewLocation && <LocationNew />}
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <td>Gang</td>
              <td>Regal Nr.</td>
              <td>Fach Nr.</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {location.map((l) => (
              <LocationItem item={l} key={l.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LocationsItemContainer;
