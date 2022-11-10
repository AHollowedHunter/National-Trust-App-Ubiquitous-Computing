//  Root Navigation
export type NativeStackParamList = {
  Discover: undefined;
};

// Discover Nav
export type DiscoverBottomTabParamList = {
  Map: undefined;
  List: undefined;
};

// NT Place Data
export interface NTPlace {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  imageDescription: string;
  websiteUrl: string;
  location: { longitude: number; latitude: number };
  activityTags: string[];
  openStatus: NTOpenStatus;
  region: NTRegion;
};

export enum NTOpenStatus {
  Unknown = "",
  Closed = "Closed today",
  Open = "Open today",
  PartOpen = "Partially open today",
}

export enum NTRegion {
  SouthWest = "RegionSouthWest",
  Wales = "RegionWales",
  NorthWest = "RegionNorthWest",
  LondonSouthEast = "RegionLondonSouthEast",
  YorkshireNorthEast = "RegionYorkshireNorthEast",
  EastEngland = "RegionEastofEngland",
  NorthernIreland = "RegionNorthernIreland",
  Midlands = "RegionMidlands",
}
