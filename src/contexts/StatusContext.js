import { createContext } from "react";

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  //States, functions etc. for Status

  return <StatusContext.Provider value={null}>{children}</StatusContext.Provider>;
};

export default StatusContext;
