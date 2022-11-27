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
  Status = "FILTER_STATUS",
  Clear = "FILTER_CLEAR",
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
  [Filters.Status]: {
    status: NTOpenStatus;
  };
  [Filters.Clear]: undefined;
};

export type FilterActions =
  ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>];

export const filterReducer = (state: FilterType, action: FilterActions) => {
  switch (action.type) {
    case Filters.Clear:
      state.activities = [];
      state.region = [];
      state.status = [];
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
    case Filters.Status:
      if (state.status.includes(action.payload.status)) {
        state.status = state.status.filter(
          (activity) => activity != action.payload.status
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
