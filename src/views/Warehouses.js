import React from "react";
import WarehousesContext from "../contexts/WarehousesContext";
import WarehousesItemContainer from "../components/WarehousesItemContainer";
import { useEffect, useContext } from "react";

function Warehouses({ setAsideMenueState }) {
  //const {} = useContext(WarehousesContext);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <WarehousesItemContainer />;
}

export default Warehouses;
