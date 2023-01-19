import React from "react";
import WarehousesItemContainer from "../components/warehouse/WarehousesItemContainer";
import { useEffect, useContext } from "react";

function Warehouses({ setAsideMenueState, setHeaderTitle }) {
  //useEffect - Ensure aside menue closes if component loads
  //Set Header Title
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Warehouse");
  }, []);

  return <WarehousesItemContainer />;
}

export default Warehouses;
