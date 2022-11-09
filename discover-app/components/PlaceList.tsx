import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { ntColours } from "../config/styles";
import { NTPlace } from "../config/types";
import PlaceListItem from "./PlaceListItem";

type Props = {
  places: NTPlace[];
};

export function PlaceList(props: Props) {
  return (
    <FlatList
      style={{ flex: 1, backgroundColor: ntColours.alto }}
      data={props.places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(item) => <PlaceListItem place={item.item}></PlaceListItem>}
      ItemSeparatorComponent={() => (
        <View
          style={{ height: 8, width: "100%", backgroundColor: ntColours.cararra }}
        />
      )}
    />
  );
}
