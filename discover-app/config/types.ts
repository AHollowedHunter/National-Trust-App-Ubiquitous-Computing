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
  facilities?: Facility[];
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

export interface Facility {
  name: string;
  description?: string;
  available: boolean;
  keyFacility: boolean;
}

export enum Facilities {
  LICENSED_FOR_CIVIL_WEDDINGS = "Licensed for civil weddings",
  PLANT_SHOP = "Plant shop",
  SHOP = "Shop",
  ASSISTANCE_DOGS_ONLY = "Assistance dogs only",
  KIOSK = "Kiosk",
  TOILETS = "Toilets",
  FARM_SHOP = "Farm shop",
  ELECTRIC_VEHICLE_CHARGING_POINT = "Electric vehicle charging point",
  DOGS_ALLOWED = "Dogs allowed",
  GUIDED_TOUR = "Guided tour",
  COFFEE_SHOP = "Coffee shop",
  BOOKSHOP = "Bookshop",
  FOOD_DRINK = "Food/drink",
  AUDIO_GUIDE = "Audio guide",
  AVAILABLE_FOR_FUNCTIONS = "Available for functions",
  TEA_ROOM = "Tea-room",
  TOILET = "Toilet",
  LEVEL_ACCESS_TERRAIN = "Level access/terrain",
  RESTAURANT = "Restaurant",
  PUB = "Pub",
  CAFE = "Café",
  CAR_PARK = "Car park",
}

export enum Access {
  ACCESSIBLE_ROUTE_AND_OR_MAP = "Accessible route and/or map",
  ACCESSIBLE_TOILET = "Accessible toilet",
  CHANGING_PLACES = "Changing places",
  INDUCTION_LOOP = "Induction loop",
  LARGE_PRINT_GUIDE_OR_MENU = "Large print (guide or menu)",
  LEVEL_ACCESS_TO_FOOD_OUTLET = "Level access to food outlet",
  LEVEL_ACCESS_TERRAIN = "Level access/terrain",
  PHOTOGRAPH_ALBUM = "Photograph album",
  RAMPED_ACCESS_SLOPES = "Ramped access/slopes",
  SEATING_AVAILABLE = "Seating available",
  STEPS_UNEVEN_TERRAIN = "Steps/uneven terrain",
  TRANSFER_AVAILABLE = "Transfer available",
  WHEELCHAIRS_AVAILABLE = "Wheelchairs available",
  DESIGNATED_PARKING = "Designated parking",
  LEVEL_ACCESS_TO_SHOP = "Level access to shop",
  POWERED_MOBILITY_VEHICLE_AVAILABLE = "Powered mobility vehicle available",
  BRAILLE__GUIDE_OR_MENU_ = "Braille (guide or menu)",
  NARROW_CORRIDORS = "Narrow corridors",
  VIRTUAL_TOUR = "Virtual tour",
  DROP_OFF_POINT = "Drop-off point",
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
