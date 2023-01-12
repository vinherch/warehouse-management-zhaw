import React from "react";
import { useContext } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import StatusContext from "../../contexts/StatusContext";

function StatusItem({ item }) {
  const { isEdit, setIsEdit, setSelectedStatus, deleteStatus } = useContext(StatusContext);

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.description}</td>
      <td style={{ padding: "0 0.7rem" }}>
        <button
          className="btn-edit"
          onClick={() => {
            /* Toggle Edit View */
            setIsEdit(!isEdit);
            /*Set status item as selected in context state */
            setSelectedStatus(item);
          }}
        >
          <FaEdit color="black" />
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            //on Click - Call delete function from status context
            deleteStatus(item);
          }}
        >
          <FaTimes color="red" />
        </button>
      </td>
    </tr>
  );
}

export default StatusItem;
