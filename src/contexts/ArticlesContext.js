import { createContext } from "react";

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  //States, functions etc. for Articles

  const data = "Hello ArticlesContext";
  return <ArticlesContext.Provider value={{ data }}>{children}</ArticlesContext.Provider>;
};

export default ArticlesContext;
