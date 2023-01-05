import React from "react";
import LocationsContext from "../contexts/LocationsContext";
import LocationsItemContainer from "../components/LocationsItemContainer";
import { useEffect, useContext } from "react";

function Locations({ setAsideMenueState }) {
  //const {} = useContext(LocationsContext);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <LocationsItemContainer />;
}

export default Locations;
