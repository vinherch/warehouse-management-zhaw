import React from "react";
import CurrenciesContext from "../contexts/CurrenciesContext";
import { useEffect, useContext } from "react";

function Currencies({ setAsideMenueState }) {
  //const {} = useContext(CurrenciesContext);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <div>Hello from Currencies</div>;
}

export default Currencies;
