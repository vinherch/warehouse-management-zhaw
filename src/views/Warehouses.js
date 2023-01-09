import React from "react";
import WarehousesItemContainer from "../components/warehouse/WarehousesItemContainer";
import { useEffect, useContext } from "react";

function Warehouses({ setAsideMenueState }) {
  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <WarehousesItemContainer />;
}

export default Warehouses;
