import { createIconSet } from "@expo/vector-icons";
import NTWebIconGlyphMap from "../assets/fonts/NationalTrustIconsWeb.glyphMap.json";
import NTIconGlyphMap from "../assets/fonts/NationalTrustIcons.glyphmap.json";

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
