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
import { useUserContext } from "./UserContext";

export type FilterState = {
  activeFilters: FiltersType;
};

const initialState: FilterState = {
  activeFilters: {
    activities: [],
    categories: [],
    status: [],
    favourites: false,
  },
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
  const { favourites } = useUserContext();
  const { allPlaces, setFilteredPlaces } = usePlacesContext();

  // Whenever the active filters or mian place are updated, update the filtered
  // data. Needs to be in a useEffect to wait for this context to update before
  // attempting to update the PlacesContext
  useEffect(() => {
    let places = allPlaces;

    state.activeFilters.activities.forEach((activity) => {
      places = places.filter((place) => place.activityTags.includes(activity));
    });

    state.activeFilters.categories.forEach((category) => {
      places = places.filter((place) => place.categories?.includes(category));
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
      places = places.filter(
        (place) => place.openStatus == NTOpenStatus.FULLY_OPEN
      );
    } else if (
      state.activeFilters.status.includes(NTOpenStatus.PARTIALLY_OPEN)
    ) {
      places = places.filter(
        (place) => place.openStatus == NTOpenStatus.PARTIALLY_OPEN
      );
    }

    if (state.activeFilters.favourites) {
      places = places.filter((place) => favourites.includes(place.id));
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
