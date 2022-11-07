//  Root Navigation
export type NativeStackParamList = {
  Discover: undefined;
};

// Discover Nav
export type DiscoverBottomTabParamList = {
  Map: { places: NTPlace[] };
  List: { places: NTPlace[] };
};

// NT Place Data
export type NTPlace = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  imageDescription: string;
  websiteUrl: string;
  location: { location: number; latitude: number };
  activityTags: string[];
  openStatus: NTOpenStatus;
  region: NTRegion;
};

export enum NTOpenStatus {
  AlwayOpen = "",
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
