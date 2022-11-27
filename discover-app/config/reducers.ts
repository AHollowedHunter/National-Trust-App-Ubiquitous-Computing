import { Activity, NTOpenStatus, NTRegion } from "./types";

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
}

export type FilterType = {
  activities: Activity[];
  status: NTOpenStatus[];
  region: NTRegion[];
};

type FilterPayload = {
  [Filters.Activity]: {
    activity: Activity;
  };
};

export type FilterActions =
  ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>];

export const filterReducer = (state: FilterType, action: FilterActions) => {
  switch (action.type) {
    case Filters.Activity:
      if (state.activities.includes(action.payload.activity)) {
        state.activities = state.activities.filter(
          (activity) => activity != action.payload.activity
        );
      } else {
        state.activities = [...state.activities, action.payload.activity];
      }
      return state;
    default:
      return state;
  }
};
