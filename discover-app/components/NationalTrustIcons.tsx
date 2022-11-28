import { createIconSet } from "@expo/vector-icons";
import NTWebIconGlyphMap from "../assets/fonts/NationalTrustIconsWeb.glyphMap.json";
import NTIconGlyphMap from "../assets/fonts/NationalTrustIcons.glyphmap.json";
import NTIconCustomGlyphMap from "../assets/fonts/NationalTrustIconsCustom.glyphmap.json";
import { Activity } from "../config/types";

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
