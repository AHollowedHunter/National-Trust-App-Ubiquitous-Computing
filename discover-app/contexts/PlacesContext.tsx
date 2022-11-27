import { createContext, useContext, Dispatch, useReducer } from "react";
import { defaultPlaces } from "../api/Places";
import { FilterActions } from "../config/reducers";
import { NTPlace } from "../config/types";

export type PlacesState = {
  allPlaces: NTPlace[];
  filteredPlaces: NTPlace[];
};

const initialState: PlacesState = {
  allPlaces: defaultPlaces,
  filteredPlaces: defaultPlaces,
};

const PlacesContext = createContext<{
  state: PlacesState;
  dispatch: Dispatch<FilterActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const placesReducer = (state: PlacesState, action: FilterActions) => ({
  allPlaces: state.allPlaces,
  filteredPlaces: state.filteredPlaces,
});

const PlacesProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(placesReducer, initialState);

  return (
    <PlacesContext.Provider value={{ state, dispatch }}>
      {children}
    </PlacesContext.Provider>
  );
};

export function usePlacesContext() {
  return useContext(PlacesContext);
}

// export default PlacesContext;
export { PlacesProvider, PlacesContext };
