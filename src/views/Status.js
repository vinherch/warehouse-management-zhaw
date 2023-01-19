import React from "react";
import StatusItemContainer from "../components/status/StatusItemContainer";
import { useEffect } from "react";

function Status({ setAsideMenueState, setHeaderTitle, setIsAlert }) {
  //useEffect - Ensure aside menue closes if component loads
  //Reset alert state
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Status");
    setIsAlert({ status: false, msg: "", statusText: "" });
  }, []);

  return <StatusItemContainer />;
}

export default Status;
