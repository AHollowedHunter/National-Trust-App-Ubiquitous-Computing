import { StyleSheet } from "react-native";

export const ntColours = {
  funGreen: "#007A3B",
  apple: "#659136",
  greenHaze: "#03A65A",
  olive: "#8A8600",
  redViolet: "#D01170",
  grenadier: "#C74504",
  cardinalPink: "#970754",
  eminence: "#6B3670",
  veniceBlue: "#0A4A8E",
  surfieGreen: "#107786",
  crimson: "#D31145",
  desertStorm: "#FAF8F8",
  cararra: "#EDECE9",
  alto: "#DEDEDE",
  doveGrey: "#707070",
  // Others used on web
  darkGrey: "#2c2c2c",
  paletteNav: "#22404c",
};

export const ntFonts = {
  display: "NationalTrustDisplayWeb_Regular",
  standard: "NationalTrustWeb_Regular",
  italics: "NationalTrustWeb_Italic",
};

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ntColours.desertStorm,
    // fontFamily: ntFonts.display,
  },
  infoBold: {
    fontWeight: "bold",
    textAlign: "right",
  },
  heading: {
    fontSize: 24,
    fontFamily: ntFonts.display,
  },
  subHeading: {
    fontFamily: ntFonts.italics,
    fontSize: 16,
  },
  description: {
    fontSize: 16,
  },
  alert: {
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "#ffcc00",
    flexDirection: "row",
  },
  alertText: {
    color: ntColours.darkGrey,
    fontSize: 16,
    flex: 1,
    paddingHorizontal: 8,
  },
});
