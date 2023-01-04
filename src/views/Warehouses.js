import React from "react";
import WarehousesContext from "../contexts/WarehousesContext";
import { useEffect, useContext } from "react";

function Warehouses({ setAsideMenueState }) {
  //const {} = useContext(WarehousesContext);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <div>Hello from Warehouse</div>;
}

export default Warehouses;
