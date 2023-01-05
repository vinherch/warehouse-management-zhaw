import React from "react";
import StatusContext from "../contexts/StatusContext";
import StatusItemContainer from "../components/StatusItemContainer";
import { useEffect, useContext } from "react";

function Status({ setAsideMenueState }) {
  //const {} = useContext(StatusContext);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <StatusItemContainer />;
}

export default Status;
