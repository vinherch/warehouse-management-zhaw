import React from "react";
import { useContext } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import LocationsContext from "../../contexts/LocationsContext";

function LocationItem({ item }) {
  const { isEdit, setIsEdit, setSelectedLocation, deleteLocation } = useContext(LocationsContext);

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.aisle}</td>
      <td>{item.shelf}</td>
      <td>{item.tray}</td>
      <td style={{ padding: "0.5rem 0.8rem" }}>
        <button
          className="btn-edit"
          onClick={() => {
            /* Toggle Edit View */
            setIsEdit(!isEdit);
            /*Set location item as selected in context state */
            setSelectedLocation(item);
          }}
        >
          <FaEdit color="black" />
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            //on Click - Call delete function from locations context
            deleteLocation(item);
          }}
        >
          <FaTimes color="red" />
        </button>
      </td>
    </tr>
  );
}

export default LocationItem;
