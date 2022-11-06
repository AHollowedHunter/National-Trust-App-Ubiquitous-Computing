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
export type NTPlaces = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  imageDescription: string;
  websiteUrl: string;
  location: any;
  activityTags: string[];
  openingTimeStatus: string; // Make enum?
  cmsRegion: string; // enum?
}
