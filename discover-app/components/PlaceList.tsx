import React from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { NTPlace } from "../config/types";
import PlaceListItem from "./PlaceListItem";

type Props = {
  places: NTPlace[];
};

export function PlaceList(props: Props) {
  return (
    <FlatList
      style={{ flex: 1}}
      data={props.places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(place) => <PlaceListItem place={place.item}></PlaceListItem>}
    ></FlatList>
  );
}
