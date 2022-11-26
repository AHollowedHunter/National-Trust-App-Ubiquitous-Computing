import React from "react";
import { Button, TouchableHighlight, View, Text } from "react-native";
import { ntColours } from "../config/styles";
import { usePlacesContext } from "../contexts/PlacesContext";
import FlexButton from "./FlexButton";

type Props = {
  dismissModal: Function;
};
export default function FilterModal({ dismissModal }: Props) {
  const { setFilteredPlaces } = usePlacesContext();

  return (
    <View
      style={{
        backgroundColor: ntColours.paletteNav,
        alignSelf: "center",
        width: "90%",
        height: "90%",
        elevation: 8,
        padding: 4,
      }}
    >
      <FlexButton title="Test" onPress={() => dismissModal()} />
      <FlexButton title="Test" onPress={() => dismissModal()} />
      <FlexButton title="Test" onPress={() => dismissModal()} />
      <FlexButton title="Test" onPress={() => dismissModal()} />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <FlexButton
          title="Clear All"
          onPress={() => dismissModal()}
          backgroundColor={ntColours.crimson}
          color={"white"}
        />
        <FlexButton
          title="Done"
          onPress={() => dismissModal()}
          backgroundColor={ntColours.greenHaze}
          color={"white"}
        />
      </View>
    </View>
  );
}
