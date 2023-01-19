import React from "react";
import LocationsItemContainer from "../components/location/LocationsItemContainer";
import { useEffect } from "react";

function Locations({ setAsideMenueState, setHeaderTitle }) {
  //useEffect - Ensure aside menue closes if component loads
  //Set Header Title
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Lokationen");
  }, []);

  return <LocationsItemContainer />;
}

export default Locations;
