import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { appStyles, ntColours } from "../config/styles";
import { NTPlace } from "../config/types";
import { NTIcon } from "./NationalTrustIcons";
import OpenStatus from "./OpenStatus";
import PlaceCard from "./PlaceCard";

type Props = {
  place: NTPlace;
};

export default function MapCallout({ place }: Props) {
  return (
    <TouchableHighlight
      underlayColor={ntColours.olive}
      activeOpacity={1}
      delayPressIn={60}
      onPress={() => null}
      style={{
        backgroundColor: ntColours.eminence,
      }}
    >
      <PlaceCard place={place} imageHeight={150} />
    </TouchableHighlight>
  );
}
