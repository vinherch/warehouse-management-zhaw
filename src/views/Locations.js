import React from "react";
import LocationsItemContainer from "../components/location/LocationsItemContainer";
import { useEffect } from "react";

function Locations({ setAsideMenueState, setHeaderTitle, setIsAlert }) {
  //useEffect - Ensure aside menue closes if component loads
  //Set Header Title
  //Reset alert state
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Lokationen");
    setIsAlert({ status: false, msg: "", statusText: "" });
  }, []);

  return <LocationsItemContainer />;
}

export default Locations;
