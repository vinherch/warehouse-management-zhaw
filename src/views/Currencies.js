import React from "react";
import CurrenciesContext from "../contexts/CurrenciesContext";
import CurrenciesItemContainer from "../components/CurrenciesItemContainer";
import { useEffect, useContext } from "react";

function Currencies({ setAsideMenueState }) {
  //const {} = useContext(CurrenciesContext);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <CurrenciesItemContainer />;
}

export default Currencies;
