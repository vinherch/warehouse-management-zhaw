import { createContext, useState } from "react";

const StatusContext = createContext();

export const StatusProvider = ({ children, status, setStatus, setIsError, isAlert, setIsAlert, downloadCSV }) => {
  /* States */
  //State for checking which status is selected in the UI - Status Container
  const [selectedStatus, setSelectedStatus] = useState({});
  //State for checking if an item is in edit mode - toggle edit mask
  const [isEdit, setIsEdit] = useState(false);
  //State for new statis - toggle category new mask
  const [isNewStatus, setIsNewStatus] = useState(false);
  // State for checking if a status description code already exists
  const [isExistingStatusDescription, setIsExistingStatusDescription] = useState(false);

  //Operations for Status Management

  //Create new status
  const addStatus = async (newStatus) => {
    //POST Request /statuses
    const res = await fetch(`/api/v1/statuses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStatus),
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    const data = await res.json();
    //Update setStatus with new status
    setStatus([data, ...status]);
    //Set isNew state to false - close view for create status
    setIsNewStatus(false);
  };

  //Update existing status
  const updateStatus = async (data) => {
    //PUT Request /statuses/:id to update status
    const res = await fetch(`/api/v1/statuses/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: data.description }),
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    //Update status state (setStatus in App Component)
    setStatus(
      status.map((s) => {
        if (s.id === data.id) {
          return { ...s, ...data };
        } else {
          return s;
        }
      })
    );
    //set setIsEdit state to false after update
    setIsEdit(false);
    //SetSelectedStatus state will be set to {} after uppdate
    setSelectedStatus({});
  };

  //Delete existing status
  const deleteStatus = async (data) => {
    /*Reset alert state */
    setIsAlert({ status: false, msg: "", statusText: "" });
    //Check if no status element is in edit mode. If true, prevent delete operation
    if (isEdit) return;
    //DELETE Request /statuses/:id to delete status
    const res = await fetch(`/api/v1/statuses/${data.id}`, {
      method: "DELETE",
    });
    if (res.status === 500) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    if (res.status === 400) {
      //Set alert state to true
      setIsAlert({ status: true, statusText: res.statusText, msg: "Operation nicht möglich!" });
      return;
    }
    //Update status state (setStatus in App Component)
    setStatus(
      status.filter((s) => {
        if (s.id !== data.id) {
          return { ...s, ...data };
        }
      })
    );
  };

  return (
    <StatusContext.Provider
      value={{ status, setStatus, isNewStatus, setIsNewStatus, setIsExistingStatusDescription, isExistingStatusDescription, selectedStatus, setSelectedStatus, isEdit, setIsEdit, addStatus, updateStatus, deleteStatus, isAlert, downloadCSV }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export default StatusContext;
