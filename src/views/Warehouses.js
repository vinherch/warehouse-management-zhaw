import React from "react";
import WarehousesItemContainer from "../components/warehouse/WarehousesItemContainer";
import { useEffect } from "react";

function Warehouses({ setAsideMenueState, setHeaderTitle, setIsAlert }) {
  //useEffect - Ensure aside menue closes if component loads
  //Set Header Title
  //Reset alert state
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Warehouse");
    setIsAlert({ status: false, msg: "", statusText: "" });
  }, []);

  return <WarehousesItemContainer />;
}

export default Warehouses;
