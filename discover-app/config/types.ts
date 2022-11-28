import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//  Root Navigation
export type NativeStackParamList = {
  Discover: undefined;
  Place: { place: NTPlace };
};

export type NativeStackProps = NativeStackNavigationProp<NativeStackParamList>;

// Discover Nav
export type DiscoverBottomTabParamList = {
  Map: undefined;
  List: undefined;
  Search: undefined;
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
  activityTags: Activity[];
  openStatus: NTOpenStatus;
  region: string;
}

export enum Activity {
  Archery = "Archery",
  Boating = "Boating",
  CanoeingAndKayaking = "Canoeing and kayaking",
  Caving = "Caving",
  Climbing = "Climbing",
  Coasteering = "Coasteering",
  Cycling = "Cycling",
  DogWalking = "Dog walking",
  Fishing = "Fishing",
  Geocaching = "Geocaching",
  HorseRiding = "Horse riding",
  Orienteering = "Orienteering",
  Running = "Running",
  Sailing = "Sailing",
  Surfing = "Surfing",
  Swimming = "Swimming",
  Walking = "Walking",
}

export enum NTOpenStatus {
  UNKNOWN = "",
  CLOSED = "Closed today",
  FULLY_OPEN = "Open today",
  PARTIALLY_OPEN = "Partially open today",
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
