import React from "react";
import LocationsItemContainer from "../components/location/LocationsItemContainer";
import { useEffect } from "react";

function Locations({ setAsideMenueState }) {
  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <LocationsItemContainer />;
}

export default Locations;
