import { createContext, useContext } from "react";
import { defaultPlaces } from "../api/Places";
import { NTPlace } from "../config/types";

export type Places = {
  places: NTPlace[];
};

const PlacesContext = createContext<Places>({ places: defaultPlaces });

export function usePlacesContext() {
  return useContext(PlacesContext);
}

export default PlacesContext;
