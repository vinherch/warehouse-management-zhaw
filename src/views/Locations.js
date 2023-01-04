import React from "react";
import LocationsContext from "../contexts/LocationsContext";
import { useEffect, useContext } from "react";

function Locations({ setAsideMenueState }) {
  //const {} = useContext(LocationsContext);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <div>Hello from Locations</div>;
}

export default Locations;
