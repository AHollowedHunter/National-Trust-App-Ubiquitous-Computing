import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Modal from "react-native-modal";

import { appStyles, ntColours, ntFonts } from "../config/styles";
import FilterModal from "./FilterModal";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {};

export default function DiscoverFilter() {
  const [filterVisible, setFilterVisible] = useState(false);
  const dismissFilterModal = () => setFilterVisible(false);

  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: "row", paddingHorizontal: 8 }}
        onPress={() => setFilterVisible(true)}
      >
        <Text
          style={{
            textAlignVertical: "center",
            fontFamily: ntFonts.standard,
            fontSize: 24,
            color: "white",
          }}
        >
          {"Filter "}
        </Text>
        <NTWebIcon
          name="settings"
          style={{
            fontSize: 24,
            textAlignVertical: "center",
            color: "white",
          }}
          accessibilityLabel={"Search Button"}
        />
      </TouchableOpacity>
      <Modal
        isVisible={filterVisible}
        onBackdropPress={() => setFilterVisible(false)}
        customBackdrop={
          <TouchableWithoutFeedback onPress={dismissFilterModal}>
            <View style={{ flex: 1, backgroundColor: ntColours.darkGrey }} />
          </TouchableWithoutFeedback>
        }
        coverScreen={true}
      >
        <FilterModal dismissModal={dismissFilterModal} />
      </Modal>
    </View>
  );
}
