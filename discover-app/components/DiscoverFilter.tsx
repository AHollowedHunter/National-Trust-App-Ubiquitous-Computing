import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";

import { appStyles, ntColours, ntFonts } from "../config/styles";
import { FilterProvider } from "../contexts/FilterContext";
import FilterModal from "./FilterModal";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {};

const style = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: ntFonts.standard,
    textAlignVertical: "center",
    color: "white",
  },
});

export default function DiscoverFilter() {
  const [filterVisible, setFilterVisible] = useState(false);
  const dismissFilterModal = () => setFilterVisible(false);

  return (
    <FilterProvider>
      <View>
        <TouchableOpacity
          onPress={() => setFilterVisible(true)}
          accessibilityLabel={"Open Filters"}
        >
          <View
            style={{ flexDirection: "row", paddingVertical: 10 }}
            importantForAccessibility="no-hide-descendants"
          >
            <Text style={style.text}>{"Filters "}</Text>
            <NTWebIcon name="settings" style={style.text} />
          </View>
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
    </FilterProvider>
  );
}
