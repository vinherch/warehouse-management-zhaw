import { createContext, useState } from "react";

const WarehousesContext = createContext();

export const WarehousesProvider = ({ children, warehouse, setWarehouse, article, location, setIsError, isAlert, setIsAlert, downloadCSV }) => {
  /* States */
  //State for checking which entry is selected in the UI
  const [selectedWarehouseEntry, setSelectedWarehouseEntry] = useState({});
  //State for checking if an item is in edit mode - toggle edis mask
  const [isEdit, setIsEdit] = useState(false);
  //State for new warehouse entry - toggle article new mask
  const [isNewWarehouse, setIsNewWarehouse] = useState(false);
  //State for mail send notification
  const [mailSent, setMailSent] = useState(false);

  //Operations for Warehouse Managmeent
  //Create new Warehouse entry
  const addWarehouse = async (newWarehouseEntry) => {
    //POST Request /warehouses/
    const res = await fetch(`/api/v1/warehouses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ article: { id: newWarehouseEntry.article.id }, location: { id: newWarehouseEntry.location.id } }),
    });
    if (res.status === 400) {
      //Set alert state to true
      setIsAlert({ status: true, statusText: res.statusText, msg: "Operation nicht möglich!" });
      return;
    }
    if (res.status === 500) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    let data = await res.json();
    data = { ...data, ...newWarehouseEntry };
    //Update setWarehouse state with new warehouse entry
    setWarehouse([data, ...warehouse]);
    //Set isNew state to false - close view for create article
    setIsNewWarehouse(false);
  };

  //Delete existing warehouse entry
  const deleteWarehouse = async (data) => {
    /*Reset alert state */
    setIsAlert({ status: false, msg: "", statusText: "" });
    //Check if no warehouse element is in edit mode. If true, prevent delete operation
    if (isEdit) return;
    //DELETE Request /warehouses/:id to delete warehouse entry
    const res = await fetch(`/api/v1/warehouses/${data.id}`, {
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
    //Update warehouse state (setWarehouse in App Component)
    setWarehouse(
      warehouse.filter((e) => {
        if (e.id !== data.id) {
          return { ...e, ...data };
        }
      })
    );
  };

  //Update existing warehouse entry - quantity can be updated
  const updateWarehouse = async (data) => {
    //PUT Request /warehouses/:id to update warehouse
    const res = await fetch(`/api/v1/warehouses/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ article: { id: data.article.id }, location: { id: data.location.id }, quantity: data.quantity }),
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
    }
    //Update warehouse state (setWarehouse in App Component)
    setWarehouse(
      warehouse.map((e) => {
        if (e.id === data.id) {
          return { ...e, ...data };
        } else {
          return e;
        }
      })
    );
    //set setIsEdit state to false after update
    setIsEdit(false);
    //SetSelectedArticle state will be set to {} after uppdate
    setSelectedWarehouseEntry({});
  };

  //Send E-Mail from - Send Mail Button in Warehouse
  const sendEmail = async () => {
    /*Reset mail sent state to false */
    setMailSent(false);
    const res = await fetch("/api/v1/mail", {
      method: "GET",
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
    if (res.ok) {
      /* Set mail sent state to true */
      setMailSent(true);
    }
  };

  return (
    <WarehousesContext.Provider
      value={{
        warehouse,
        addWarehouse,
        deleteWarehouse,
        updateWarehouse,
        setWarehouse,
        article,
        location,
        selectedWarehouseEntry,
        setSelectedWarehouseEntry,
        isNewWarehouse,
        setIsNewWarehouse,
        isEdit,
        setIsEdit,
        sendEmail,
        isAlert,
        mailSent,
        downloadCSV,
      }}
    >
      {children}
    </WarehousesContext.Provider>
  );
};

export default WarehousesContext;
