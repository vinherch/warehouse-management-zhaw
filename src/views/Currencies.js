import React from "react";
import CurrenciesItemContainer from "../components/currency/CurrenciesItemContainer";
import { useEffect } from "react";

function Currencies({ setAsideMenueState }) {
  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <CurrenciesItemContainer />;
}

export default Currencies;
