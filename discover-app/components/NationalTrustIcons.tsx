import { createIconSet } from "@expo/vector-icons";
import NTWebIconGlyphMap from "../assets/fonts/NationalTrustIconsWeb.glyphMap.json";
import NTIconGlyphMap from "../assets/fonts/NationalTrustIcons.glyphmap.json";
import NTIconCustomGlyphMap from "../assets/fonts/NationalTrustIconsCustom.glyphmap.json";
import { Access, Activity, Facilities, PlaceCategory } from "../config/types";

export const NTIcon = createIconSet(
  NTIconGlyphMap,
  "NationalTrustIcons",
  "NationalTrustIcons.ttf"
);

export const NTWebIcon = createIconSet(
  NTWebIconGlyphMap,
  "NationalTrustIconsWeb",
  "NationalTrustIconsWeb.ttf"
);

export const NTIconCustom = createIconSet(
  NTIconCustomGlyphMap,
  "NationalTrustIconsCustom",
  "NationalTrustIconsCustom.ttf"
);

type NTCategoryIconProps = {
  category: PlaceCategory;
  size?: number;
};

export function NTCategoryIcon({ category, size }: NTCategoryIconProps) {
  switch (category) {
    case PlaceCategory.IA000001:
      return <NTIcon name="Abbey" style={{ fontSize: size ?? 24 }} />;
    case PlaceCategory.IA000003:
      return <NTIcon name="Historic-house" style={{ fontSize: size ?? 24 }} />;
    case PlaceCategory.IA000004:
      return <NTIcon name="Viewpoint" style={{ fontSize: size ?? 24 }} />;
    case PlaceCategory.IA000008:
      return <NTIcon name="Castle" style={{ fontSize: size ?? 24 }} />;
    case PlaceCategory.IA000009:
      return <NTIcon name="Coast" style={{ fontSize: size ?? 24 }} />;
    case PlaceCategory.IA000012:
      return <NTIcon name="Park" style={{ fontSize: size ?? 24 }} />;
    case PlaceCategory.IA000013:
      return <NTIcon name="Watermill" style={{ fontSize: size ?? 24 }} />;
    case PlaceCategory.IA000015:
      return <NTIcon name="Countryside" style={{ fontSize: size ?? 24 }} />;
    case PlaceCategory.IA000017:
      return <NTIcon name="Pub" style={{ fontSize: size ?? 24 }} />;
  }
}

type NTActivityIconProps = {
  activity: Activity;
  size?: number;
};

export function NTActivityIcon({ activity, size }: NTActivityIconProps) {
  switch (activity) {
    case Activity.DogWalking:
      return <NTIcon name="Dogs-allowed" style={{ fontSize: size ?? 24 }} />;
    case Activity.Walking:
      return <NTIcon name="Walk-general" style={{ fontSize: size ?? 24 }} />;
    case Activity.HorseRiding:
      return <NTIcon name="Horseriding" style={{ fontSize: size ?? 24 }} />;
    case Activity.Orienteering:
      return <NTIcon name="Orienteering" style={{ fontSize: size ?? 24 }} />;
    case Activity.Cycling:
      return <NTIcon name="Cycling" style={{ fontSize: size ?? 24 }} />;
    case Activity.Surfing:
      return <NTIcon name="Surfing" style={{ fontSize: size ?? 24 }} />;
    case Activity.Climbing:
      return <NTIcon name="Rock-climbing" style={{ fontSize: size ?? 24 }} />;
    case Activity.Boating:
    case Activity.Sailing:
      return <NTIcon name="Sailing-boating" style={{ fontSize: size ?? 24 }} />;
    case Activity.CanoeingAndKayaking:
      return (
        <NTIcon name="Canoeing-kayaking" style={{ fontSize: size ?? 24 }} />
      );
    case Activity.Swimming:
      return <NTIcon name="Swimming" style={{ fontSize: size ?? 24 }} />;
    case Activity.Geocaching:
      return <NTIcon name="Geocaching" style={{ fontSize: size ?? 24 }} />;
    case Activity.Coasteering:
      return (
        <NTIconCustom name="Coasteering" style={{ fontSize: size ?? 24 }} />
      );
    case Activity.Fishing:
      return <NTIcon name="Fishing" style={{ fontSize: size ?? 24 }} />;
    case Activity.Running:
      return <NTIconCustom name="Running" style={{ fontSize: size ?? 24 }} />;
    case Activity.Archery:
      return <NTIconCustom name="Archery" style={{ fontSize: size ?? 24 }} />;
    case Activity.Caving:
      return (
        <NTIcon
          name="Cave-or-mine-exploration"
          style={{ fontSize: size ?? 24 }}
        />
      );
  }
}

type NTFacilityIconProps = {
  facility: string;
  size?: number;
};

export function NTFacilityIcon({ facility, size = 24 }: NTFacilityIconProps) {
  switch (facility) {
    case Facilities.ASSISTANCE_DOGS_ONLY:
      return <NTIcon name="Assistance-dogs-only" style={{ fontSize: size }} />;
    case Facilities.AUDIO_GUIDE:
      return <NTIcon name="Audio-guide" style={{ fontSize: size }} />;
    case Facilities.AVAILABLE_FOR_FUNCTIONS:
      return <NTIcon name="Celebration" style={{ fontSize: size }} />;
    case Facilities.BOOKSHOP:
      return <NTIcon name="Bookshop" style={{ fontSize: size }} />;
    case Facilities.CAFE:
      return <NTIcon name="Refreshments" style={{ fontSize: size }} />;
    case Facilities.COFFEE_SHOP:
      return <NTIcon name="Refreshments" style={{ fontSize: size }} />;
    case Facilities.DOGS_ALLOWED:
      return <NTIcon name="Dogs-allowed" style={{ fontSize: size }} />;
    case Facilities.ELECTRIC_VEHICLE_CHARGING_POINT:
      return (
        <NTIcon name="Electric-vehicle-charging" style={{ fontSize: size }} />
      );
    case Facilities.FARM_SHOP:
      return <NTIcon name="Farmers-market" style={{ fontSize: size }} />;
    case Facilities.FOOD_DRINK:
      return <NTIcon name="Lunch" style={{ fontSize: size }} />;
    case Facilities.GUIDED_TOUR:
      return <NTIcon name="Guided-tour" style={{ fontSize: size }} />;
    case Facilities.KIOSK:
      return <NTIcon name="Information-centre" style={{ fontSize: size }} />;
    case Facilities.LEVEL_ACCESS_TERRAIN:
      return <NTIcon name="Level-access" style={{ fontSize: size }} />;
    case Facilities.LICENSED_FOR_CIVIL_WEDDINGS:
      return (
        <NTIcon name="Licensed-for-civil-weddings" style={{ fontSize: size }} />
      );
    case Facilities.PLANT_SHOP:
      return <NTIcon name="Plant-sales" style={{ fontSize: size }} />;
    case Facilities.PUB:
      return <NTIcon name="Pub" style={{ fontSize: size }} />;
    case Facilities.RESTAURANT:
      return <NTIcon name="Evening-meal" style={{ fontSize: size }} />;
    case Facilities.SHOP:
      return <NTIcon name="Shop" style={{ fontSize: size }} />;
    case Facilities.TEA_ROOM:
      return <NTIcon name="Tea" style={{ fontSize: size }} />;
    case Facilities.TOILET:
      return <NTIcon name="Toilet" style={{ fontSize: size }} />;
    case Facilities.TOILETS:
      return <NTIcon name="Toilet" style={{ fontSize: size }} />;
    case Facilities.CAR_PARK:
      return (
        <NTIcon name="Car-park-free---parking" style={{ fontSize: size }} />
      );
    default:
      return <></>;
  }
}

type NTAccessIconProps = {
  access: string;
  size?: number;
};

export function NTAccessIcon({ access, size = 24 }: NTAccessIconProps) {
  switch (access) {
    case Access.ACCESSIBLE_ROUTE_AND_OR_MAP:
      return (
        <NTIcon
          name="Accessible-route, and-or-map"
          style={{ fontSize: size }}
        />
      );
    case Access.ACCESSIBLE_TOILET:
      return <NTIcon name="Accessible-toilet" style={{ fontSize: size }} />;
    case Access.BRAILLE__GUIDE_OR_MENU_:
      return <NTIcon name="Braille-guide" style={{ fontSize: size }} />;
    case Access.CHANGING_PLACES:
      return (
        <NTIcon
          name="Changing-Places-toilet-facilities"
          style={{ fontSize: size }}
        />
      );
    case Access.DESIGNATED_PARKING:
      return <NTIcon name="Designated-parking" style={{ fontSize: size }} />;
    case Access.DROP_OFF_POINT:
      return <NTIcon name="Drop-off-point" style={{ fontSize: size }} />;
    case Access.INDUCTION_LOOP:
      return <NTIcon name="Induction-loop" style={{ fontSize: size }} />;
    case Access.LARGE_PRINT_GUIDE_OR_MENU:
      return (
        <NTIcon name="Large-print-guide-or-menu" style={{ fontSize: size }} />
      );
    case Access.LEVEL_ACCESS_TERRAIN:
      return (
        <NTIcon name="Level-access-level-ground" style={{ fontSize: size }} />
      );
    case Access.LEVEL_ACCESS_TO_FOOD_OUTLET:
      return (
        <NTIcon name="Level-access-level-ground" style={{ fontSize: size }} />
      );
    case Access.LEVEL_ACCESS_TO_SHOP:
      return (
        <NTIcon name="Level-access-level-ground" style={{ fontSize: size }} />
      );
    case Access.NARROW_CORRIDORS:
      return <NTIcon name="Narrow-corridors" style={{ fontSize: size }} />;
    case Access.PHOTOGRAPH_ALBUM:
      return <NTIcon name="Guidebook-available" style={{ fontSize: size }} />;
    case Access.POWERED_MOBILITY_VEHICLE_AVAILABLE:
      return (
        <NTIcon
          name="Personal-mobility-vehicle-available"
          style={{ fontSize: size }}
        />
      );
    case Access.RAMPED_ACCESS_SLOPES:
      return <NTIcon name="Ramped-access-slopes" style={{ fontSize: size }} />;
    case Access.SEATING_AVAILABLE:
      return <NTIcon name="Seating-available" style={{ fontSize: size }} />;
    case Access.STEPS_UNEVEN_TERRAIN:
      return <NTIcon name="Steps-uneven-ground" style={{ fontSize: size }} />;
    case Access.TRANSFER_AVAILABLE:
      return <NTIcon name="Transfer-available" style={{ fontSize: size }} />;
    case Access.VIRTUAL_TOUR:
      return <NTIcon name="Virtual-tour" style={{ fontSize: size }} />;
    case Access.WHEELCHAIRS_AVAILABLE:
      return <NTIcon name="Wheelchairs-available" style={{ fontSize: size }} />;
    default:
      return <></>;
  }
}
