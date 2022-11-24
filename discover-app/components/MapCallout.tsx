import React from "react";
import { TouchableHighlight } from "react-native";
import { ntColours } from "../config/styles";
import { NTPlace } from "../config/types";
import PlaceCard from "./PlaceCard";

type Props = {
  place: NTPlace;
  showImage: boolean;
};

export default function MapCallout({ place, showImage }: Props) {
  return (
    <TouchableHighlight
      underlayColor={ntColours.olive}
      activeOpacity={1}
      delayPressIn={60}
      style={{
        backgroundColor: ntColours.eminence,
      }}
    >
      <PlaceCard place={place} imageHeight={240} showImage={showImage} useSvgImage={true} />
    </TouchableHighlight>
  );
}
