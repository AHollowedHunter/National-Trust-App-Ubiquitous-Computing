import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Modal from "react-native-modal";

import { ntColours } from "../config/styles";
import { NativeStackProps } from "../config/types";
import { useMapContext } from "../contexts/MapContext";
import PlaceCard from "./PlaceCard";

export default function MarkerModal() {
  const navigation = useNavigation<NativeStackProps>();
  const { place, visible, toggleVisible } = useMapContext();

  if (!place) return <></>;

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={() => toggleVisible()}
      customBackdrop={
        <TouchableWithoutFeedback onPress={toggleVisible}>
          <View style={{ flex: 1, backgroundColor: "transparent" }} />
        </TouchableWithoutFeedback>
      }
      coverScreen={false}
      animationIn={"zoomInUp"}
      animationInTiming={400}
      animationOut={"zoomOut"}
      animationOutTiming={200}
      style={{ justifyContent: "flex-start", marginTop: 64 }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: ntColours.cardinalPink,
          alignSelf: "center",
          width: "100%",
          elevation: 8,
        }}
        onPress={() => {
          navigation.push("Place", { place: place });
          toggleVisible();
        }}
      >
        <PlaceCard place={place} imageHeight={200} />
      </TouchableOpacity>
    </Modal>
  );
}
