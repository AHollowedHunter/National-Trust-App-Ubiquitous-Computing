import { Activity, NTOpenStatus, PlaceCategory } from "./types";

/**
 * Maps Action type with custom payloads
 */
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Filters {
  Activity = "FILTER_ACTIVITY",
  Category = "FILTER_CATEGORY",
  Status = "FILTER_STATUS",
  Favourite = "FILTER_FAVOURITE",
  Clear = "FILTER_CLEAR",
}

export type FiltersType = {
  activities: Activity[];
  categories: PlaceCategory[];
  status: NTOpenStatus[];
  favourites: boolean;
};

type FilterPayload = {
  [Filters.Activity]: {
    activity: Activity;
  };
  [Filters.Category]: {
    category: PlaceCategory;
  };
  [Filters.Status]: {
    status: NTOpenStatus;
  };
  [Filters.Favourite]: undefined;
  [Filters.Clear]: undefined;
};

export type FilterActions =
  ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>];

export const filterReducer = (state: FiltersType, action: FilterActions) => {
  switch (action.type) {
    case Filters.Clear:
      state.activities = [];
      state.categories = [];
      state.status = [];
      state.favourites = false;
      break;
    case Filters.Activity:
      if (state.activities.includes(action.payload.activity)) {
        state.activities = state.activities.filter(
          (activity) => activity != action.payload.activity
        );
      } else {
        state.activities = [...state.activities, action.payload.activity];
      }
      break;
    case Filters.Category:
      if (state.categories.includes(action.payload.category)) {
        state.categories = state.categories.filter(
          (activity) => activity != action.payload.category
        );
      } else {
        state.categories = [...state.categories, action.payload.category];
      }
      break;
    case Filters.Favourite:
      state.favourites = !state.favourites;
      break;
    case Filters.Status:
      if (state.status.includes(action.payload.status)) {
        state.status = state.status.filter(
          (status) => status != action.payload.status
        );
      } else {
        state.status = [...state.status, action.payload.status];
      }
      break;
    default:
      break;
  }
  return state;
};
