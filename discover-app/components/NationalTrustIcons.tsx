import { createIconSet } from "@expo/vector-icons";
import NTWebIconGlyphMap from "../assets/fonts/NationalTrustIconsWeb.glyphMap.json";
import NTIconGlyphMap from "../assets/fonts/NationalTrustIcons.glyphmap.json";
import NTIconCustomGlyphMap from "../assets/fonts/NationalTrustIconsCustom.glyphmap.json"

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
)

export const NTActivityIcon = (activity: String, size?: number) => {
  switch (activity) {
    case "Dog walking":
      return (
        <NTIcon name="Dogs-allowed" style={{ fontSize: size ? size : 24 }} />
      );
    case "Walking":
      return (
        <NTIcon name="Walk-general" style={{ fontSize: size ? size : 24 }} />
      );
    case "Horse riding":
      return (
        <NTIcon name="Walk-general" style={{ fontSize: size ? size : 24 }} />
      );
    case "Orienteering":
      return (
        <NTIcon name="Orienteering" style={{ fontSize: size ? size : 24 }} />
      );
    case "Cycling":
      return (
        <NTIcon name="Cycling" style={{ fontSize: size ? size : 24 }} />
      );
    case "Surfing":
      return (
        <NTIcon name="Surfing" style={{ fontSize: size ? size : 24 }} />
      );
    case "Climbing":
      return (
        <NTIcon name="Rock-climbing" style={{ fontSize: size ? size : 24 }} />
      );
    case "Boating":
    case "Sailing":
      return (
        <NTIcon name="Sailing-boating" style={{ fontSize: size ? size : 24 }} />
      );
    case "Surfing":
      return (
        <NTIcon name="Surfing" style={{ fontSize: size ? size : 24 }} />
      );
    case "Canoeing and kayaking":
      return (
        <NTIcon name="Canoeing-kayaking" style={{ fontSize: size ? size : 24 }} />
      );
    case "Swimming":
      return (
        <NTIcon name="Swimming" style={{ fontSize: size ? size : 24 }} />
      );
    case "Geocaching":
      return (
        <NTIcon name="Geocaching" style={{ fontSize: size ? size : 24 }} />
      );
    case "Coasteering":
      return (
        <NTIcon name="Orienteering" style={{ fontSize: size ? size : 24 }} />
      );
    case "Fishing":
      return (
        <NTIcon name="Fishing" style={{ fontSize: size ? size : 24 }} />
      );
    case "Running":
      return (
        <NTIconCustom name="Running" style={{ fontSize: size ? size : 24 }} />
      );
    case "Archery":
      return (
        <NTIconCustom name="Archery" style={{ fontSize: size ? size : 24 }} />
      );
  }
};
