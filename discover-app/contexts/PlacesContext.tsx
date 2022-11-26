import { createContext, useContext } from "react";
import { defaultPlaces } from "../api/Places";
import { NTPlace } from "../config/types";

export type Places = {
  places: NTPlace[];
  filteredPlaces: NTPlace[];
  setFilteredPlaces: (places: NTPlace[]) => void;
};

const PlacesContext = createContext<Places>({ places: defaultPlaces, filteredPlaces: defaultPlaces, setFilteredPlaces: () => {} });

export function usePlacesContext() {
  return useContext(PlacesContext);
}

export default PlacesContext;
