import { createContext } from "react";

const LocationsContext = createContext();

export const LocationsProvider = ({ children }) => {
  //States, functions etc. for Locations

  return <LocationsContext.Provider value={null}>{children}</LocationsContext.Provider>;
};

export default LocationsContext;
