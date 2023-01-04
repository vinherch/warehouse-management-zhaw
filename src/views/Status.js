import React from "react";
import StatusContext from "../contexts/StatusContext";
import { useEffect, useContext } from "react";

function States({ setAsideMenueState }) {
  //const {} = useContext(StatusContext);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <div>Hello from Status</div>;
}

export default States;
