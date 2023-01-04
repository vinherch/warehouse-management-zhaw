import { createContext } from "react";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  //States, functions etc. for Categories

  const data = "Hello CategoriesContext";

  return <CategoriesContext.Provider value={{ data }}>{children}</CategoriesContext.Provider>;
};

export default CategoriesContext;
