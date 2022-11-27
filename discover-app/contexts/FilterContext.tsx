import { createContext, useContext, Dispatch, useReducer } from "react";
import { FilterActions, filterReducer, FilterType } from "../config/reducers";

export type FilterState = {
  activeFilters: FilterType;
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
