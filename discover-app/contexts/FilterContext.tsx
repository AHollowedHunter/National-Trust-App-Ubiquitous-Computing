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
import { NTOpenStatus } from "../config/types";
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

  // Whenever the active filters or mian place are updated, update the filtered 
  // data. Needs to be in a useEffect to wait for this context to update before 
  // attempting to update the PlacesContext
  useEffect(() => {
    let places = allPlaces;

    state.activeFilters.activities.forEach((activity) => {
      places = places.filter((place) => place.activityTags.includes(activity));
    });

  
    if (
      state.activeFilters.status.includes(NTOpenStatus.FULLY_OPEN) &&
      state.activeFilters.status.includes(NTOpenStatus.PARTIALLY_OPEN)
    ) {
      places = places.filter(
        (place) =>
          place.openStatus == NTOpenStatus.FULLY_OPEN ||
          place.openStatus == NTOpenStatus.PARTIALLY_OPEN
      );
    } else if (state.activeFilters.status.includes(NTOpenStatus.FULLY_OPEN)) {
      places = places.filter((place) => place.openStatus == NTOpenStatus.FULLY_OPEN);
    } else if (state.activeFilters.status.includes(NTOpenStatus.PARTIALLY_OPEN)) {
      places = places.filter(
        (place) => place.openStatus == NTOpenStatus.PARTIALLY_OPEN
      );
    }

    setFilteredPlaces(places);
  }, [state, allPlaces]);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export function useFilterContext() {
  return useContext(FilterContext);
}

export { FilterProvider, FilterContext };
