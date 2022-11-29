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
  websiteUrlPath: string;
  location: { longitude: number; latitude: number };
  activityTags: Activity[];
  openStatus: NTOpenStatus;
  region: string;
  distance?: number;
  categories?: PlaceCategory[];
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

export interface DetailedPlace {
  id: number;
  emergencyNotice?: string;
  longDescription?: string;
  timedEntryUrl?: string;
  openingCalendar?: OpeningCalendar;
  directions?: Directions;
  facilities?: Facilities[];
  accessTags?: AccessTag[];
}

export interface OpeningCalendar {
  openingTimesNote: string;
  days: Day[];
}

export interface Day {
  date: string;
  status: NTOpenStatus;
  assets: {
    name: string;
    description: string;
    opensAt: string;
    closesAt: string;
  };
}

export interface Directions {
  train?: { description: string };
  road?: { description: string; parking: string; satnav: string };
  foot?: { description: string };
  ferry?: { description: string };
  bus?: { description: string };
  cycle?: { description: string };
}

export interface Facilities {
  name: string;
  description: string;
  available: boolean;
  keyFacility: boolean;
}

export interface AccessTag {
  name: string;
  description: string;
}

export enum PlaceCategory {
  IA000001 = "Churches and Chapels",
  IA000003 = "Houses and Buildings",
  IA000004 = "Sites and Monuments",
  IA000008 = "Castles and Forts",
  IA000009 = "Coast and Beaches",
  IA000012 = "Gardens and Parks",
  IA000013 = "Mills Forges and Mines",
  IA000015 = "Countryside",
  IA000017 = "Villages and Pubs",
}
