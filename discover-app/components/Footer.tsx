import React from "react";
import { ntColours } from "../config/styles";
import { NTWebIcon } from "./NationalTrustIcons";

const Footer = () => (
  <NTWebIcon
    name="nt_logo"
    size={64}
    color={ntColours.doveGrey}
    style={{ alignSelf: "center", paddingVertical: 32, opacity: 0.5 }}
    accessible={false}
    importantForAccessibility="no"
    accessibilityElementsHidden
  />
);

export default Footer;
