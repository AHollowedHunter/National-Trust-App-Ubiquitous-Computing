import React from "react";
import { Text } from "react-native";
import { NTPlace } from "../config/types";

type Props = {
  place: NTPlace;
};

export default function PlaceListItem({ place }: Props) {
  return <Text >{place.title}</Text>;
}
