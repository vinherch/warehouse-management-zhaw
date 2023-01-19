import React from "react";
import CurrenciesItemContainer from "../components/currency/CurrenciesItemContainer";
import { useEffect } from "react";

function Currencies({ setAsideMenueState, setHeaderTitle }) {
  //useEffect - Ensure aside menue closes if component loads
  //Set Header Title
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Währungen");
  }, []);

  return <CurrenciesItemContainer />;
}

export default Currencies;
