import {
  createContext,
  useContext,
  Dispatch,
  useReducer,
  useEffect,
} from "react";
import {
  FilterActions,
  filterReducer,
  FiltersType,
} from "../config/filterReducer";
import { NTPlace } from "../config/types";
import { usePlacesContext } from "./PlacesContext";

export type FilterState = {
  activeFilters: FiltersType;
};

const initialState: FilterState = {
  activeFilters: { activities: [], status: [], region: [] },
};

const FilterContext = createContext<{
  state: FilterState;
  dispatch: Dispatch<FilterActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: FilterState, action: FilterActions) => ({
  activeFilters: filterReducer(state.activeFilters, action),
});

const FilterProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const { allPlaces, setFilteredPlaces } = usePlacesContext();
  useEffect(() => {
    let places = allPlaces;

    state.activeFilters.activities.forEach((activity) => {
      places = places.filter((place) => place.activityTags.includes(activity));
    });

    setFilteredPlaces(places);
  }, [state]);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export function useFilterContext() {
  return useContext(FilterContext);
}

// export default PlacesContext;
export { FilterProvider, FilterContext };
