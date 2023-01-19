import React from "react";
import StatusItemContainer from "../components/status/StatusItemContainer";
import { useEffect } from "react";

function Status({ setAsideMenueState, setHeaderTitle }) {
  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Status");
  }, []);

  return <StatusItemContainer />;
}

export default Status;
