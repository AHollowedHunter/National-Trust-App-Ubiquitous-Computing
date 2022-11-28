import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Modal from "react-native-modal";

import { ntColours } from "../config/styles";
import { NativeStackProps } from "../config/types";
import { useMapContext } from "../contexts/MapContext";
import PlaceCard from "./PlaceCard";

export default function MarkerModal() {
  const navigation = useNavigation<NativeStackProps>();
  const { place, visible, setVisible } = useMapContext();

  // Set a callback when the modal loses focus (Such as navigating to another
  // screen) to close the modal.
  useFocusEffect(
    React.useCallback(() => {
      return () => setVisible(false);
    }, [])
  );

  if (!place) return <></>;

  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}
      coverScreen={false}
      customBackdrop={
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={{ flex: 1, backgroundColor: ntColours.darkGrey, opacity: 0.35 }} />
        </TouchableWithoutFeedback>
      }
      animationIn={"zoomInUp"}
      animationInTiming={400}
      animationOut={"zoomOut"}
      animationOutTiming={200}
      useNativeDriverForBackdrop
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
        }}
      >
        <PlaceCard place={place} imageHeight={200} />
      </TouchableOpacity>
    </Modal>
  );
}
