import React from "react";
import StatusItemContainer from "../components/status/StatusItemContainer";
import { useEffect } from "react";

function Status({ setAsideMenueState }) {
  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <StatusItemContainer />;
}

export default Status;
