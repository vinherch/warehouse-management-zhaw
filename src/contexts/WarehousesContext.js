import { createContext } from "react";

const WarehousesContext = createContext();

export const WarehousesProvider = ({ children }) => {
  //States, functions etc. for Warehouses

  return <WarehousesContext.Provider value={null}>{children}</WarehousesContext.Provider>;
};

export default WarehousesContext;
