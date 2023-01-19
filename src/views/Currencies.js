import React from "react";
import CurrenciesItemContainer from "../components/currency/CurrenciesItemContainer";
import { useEffect } from "react";

function Currencies({ setAsideMenueState, setHeaderTitle, setIsAlert }) {
  //useEffect - Ensure aside menue closes if component loads
  //Set Header Title
  //Reset alert state
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Währungen");
    setIsAlert({ status: false, msg: "", statusText: "" });
  }, []);

  return <CurrenciesItemContainer />;
}

export default Currencies;
