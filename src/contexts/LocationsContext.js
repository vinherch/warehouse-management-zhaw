import { createContext, useState } from "react";

const LocationsContext = createContext();

export const LocationsProvider = ({ children, location, setLocation, setIsError, isAlert, setIsAlert }) => {
  /* States */
  //State for checking which location is selected in the UI - Location Container
  const [selectedLocation, setSelectedLocation] = useState({});
  //State for checking if an item is in edit mode - toggle edit mask
  const [isEdit, setIsEdit] = useState(false);
  // State for checking if a location combination already exists
  const [isExistingLocationCombination, setIsExistingLocationCombination] = useState(false);
  //State for new currency - toggle currency new mask
  const [isNewLocation, setIsNewLocation] = useState(false);

  //Operations for Currency Management

  //Create new location
  const addLocation = async (newLocation) => {
    console.log(newLocation);
    //POST Request /locations
    const res = await fetch(`/api/v1/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocation),
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    const data = await res.json();
    //Update setLocation state with new location
    setLocation([data, ...location]);
    //Set isNew state to false - close view for create location
    setIsNewLocation(false);
  };

  //Update existing location
  const updateLocation = async (data) => {
    //PUT Request /locations/:id to update location
    const res = await fetch(`/api/v1/locations/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aisle: data.aisle, shelf: data.shelf, tray: data.tray }),
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
    }
    // //Update location state (setLocation in App Component)
    setLocation(
      location.map((e) => {
        if (e.id === data.id) {
          return { ...e, ...data };
        } else {
          return e;
        }
      })
    );
    //Set setIsEdit state to false after update
    setIsEdit(false);
    //SetSelectedLocation state will be set to {} after uppdate
    setSelectedLocation({});
  };

  //Delete existing location
  const deleteLocation = async (data) => {
    /*Reset alert state */
    setIsAlert({ status: false, msg: "", statusText: "" });
    //Check if no location element is in edit mode. If true, prevent delete operation
    if (isEdit) return;
    //DELETE Request /locations/:id to delete location
    const res = await fetch(`/api/v1/locations/${data.id}`, {
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
    //Update location state (setLocation in App Component)
    setLocation(
      location.filter((e) => {
        if (e.id !== data.id) {
          return { ...e, ...data };
        }
      })
    );
  };

  return (
    <LocationsContext.Provider
      value={{
        location,
        setLocation,
        isNewLocation,
        setIsNewLocation,
        selectedLocation,
        setSelectedLocation,
        isEdit,
        setIsEdit,
        isExistingLocationCombination,
        setIsExistingLocationCombination,
        addLocation,
        updateLocation,
        deleteLocation,
        isAlert,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsContext;
