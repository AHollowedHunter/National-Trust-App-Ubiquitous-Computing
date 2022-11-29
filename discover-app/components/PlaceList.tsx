import React from "react";
import { FlatList } from "react-native";
import { ntColours } from "../config/styles";
import { NTPlace } from "../config/types";
import { NTWebIcon } from "./NationalTrustIcons";
import PlaceListItem from "./PlaceListItem";
import Separator from "./Separator";

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
      ItemSeparatorComponent={() => <Separator />}
      ListFooterComponent={() => (
        <NTWebIcon
          name="nt_logo"
          size={64}
          color={ntColours.doveGrey}
          style={{ alignSelf: "center", paddingVertical: 32, opacity: 0.5 }}
        />
      )}
    />
  );
}
