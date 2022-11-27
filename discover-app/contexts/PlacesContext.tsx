import { createContext, useContext, useState } from "react";
import { defaultPlaces } from "../api/Places";
import { NTPlace } from "../config/types";

export type Places = {
  allPlaces: NTPlace[];
  setAllPlaces: (places: NTPlace[]) => void;
  filteredPlaces: NTPlace[];
  setFilteredPlaces: (places: NTPlace[]) => void;
};

const PlacesContext = createContext<Places>({
  allPlaces: defaultPlaces,
  setAllPlaces: () => null,
  filteredPlaces: defaultPlaces,
  setFilteredPlaces: () => null,
});

const PlacesProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [allPlaces, setAllPlaces] = useState(defaultPlaces);
  const [filteredPlaces, setFilteredPlaces] = useState(defaultPlaces);

  return (
    <PlacesContext.Provider
      value={{ allPlaces, setAllPlaces, filteredPlaces, setFilteredPlaces }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export function usePlacesContext() {
  return useContext(PlacesContext);
}

// export default PlacesContext;
export { PlacesProvider, PlacesContext };
