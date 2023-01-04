import { createContext } from "react";

const CurrenciesContext = createContext();

export const CurrenciesProvider = ({ children }) => {
  //States, functions etc. for Currencies

  return <CurrenciesContext.Provider value={null}>{children}</CurrenciesContext.Provider>;
};

export default CurrenciesContext;
