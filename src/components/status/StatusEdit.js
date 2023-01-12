import React, { useState } from "react";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import StatusContext from "../../contexts/StatusContext";

function StatusEdit() {
  //useContext for getting data of selected status
  const { selectedStatus, updateStatus, status, setIsExistingStatusDescription, isExistingStatusDescription } = useContext(StatusContext);

  /* States */
  /* State for status description text input - local state */
  const [currentStatusDescription, setCurrentStatusDescription] = useState(selectedStatus.description);
  /* State for status update button - toggling enable/disable - local state */
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Status Bearbeiten</h5>
        <form>
          <div>
            <label htmlFor="status-description">Beschreibung: </label>
            <input
              type="text"
              id="status-description"
              style={{ backgroundColor: isExistingStatusDescription && "rgba(255,0,0,0.3)" }}
              value={currentStatusDescription}
              onChange={(e) => {
                //Check if text input length is not 0
                if (e.target.value.trim().length != 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                setCurrentStatusDescription(e.target.value);
                //Set isExistingCategoryDescription to false before checking if currency code exists
                setIsExistingStatusDescription(false);
                status.map((s) => {
                  if (s.description === e.target.value) {
                    //If match - a status with the same description already exists
                    setIsExistingStatusDescription(true);
                  }
                });
              }}
            />
          </div>
          {/* If check status description returns true - show message*/}
          {isExistingStatusDescription && <div style={{ margin: "0.3rem 0rem 1rem 0rem", backgroundColor: "lightyellow" }}>Status / Beschreibung existiert bereits</div>}

          <button
            className={`btn-add ${isDisabled && "btn-disabled"}`}
            onClick={(e) => {
              /* Prevent site from reload */
              e.preventDefault();
              /* Check if input != "" & if status description is not already existing */
              if (!isDisabled && !isExistingStatusDescription) {
                updateStatus({ id: selectedStatus.id, description: currentStatusDescription });
              }
            }}
          >
            <FaCheck color="green" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default StatusEdit;
