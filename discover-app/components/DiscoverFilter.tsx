import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";

import { ntColours, ntFonts } from "../config/styles";
import { FilterProvider, useFilterContext } from "../contexts/FilterContext";
import FilterModal from "./FilterModal";
import { NTWebIcon } from "./NationalTrustIcons";

const style = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: ntFonts.standard,
    textAlignVertical: "center",
    color: "white",
  },
  badge: {
    borderColor: "white",
    backgroundColor: ntColours.veniceBlue,
    color: "white",
    width: 20,
    height: 20,
    lineHeight: 18,
    fontSize: 14,
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderRadius: 20,
    position: "absolute",
    left: -18,
    top: 12,
  },
});

export default function DiscoverFilter() {
  const [filterVisible, setFilterVisible] = useState(false);
  const dismissFilterModal = () => setFilterVisible(false);
  const { state } = useFilterContext();

  const activeFiltersCount = () => {
    return (
      state.activeFilters.activities.length +
      state.activeFilters.categories.length +
      state.activeFilters.status.length +
      (state.activeFilters.favourites ? 1 : 0)
    );
  };

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
            accessibilityElementsHidden
          >
            <Text style={style.text}>
              {(activeFiltersCount()
                ? `(\u2009${activeFiltersCount()}\u2009)`
                : "") + " Filters "}
            </Text>
            <NTWebIcon name="settings" style={style.text} />
          </View>
        </TouchableOpacity>
        <Modal
          onBackButtonPress={dismissFilterModal}
          isVisible={filterVisible}
          onBackdropPress={() => setFilterVisible(false)}
          customBackdrop={
            <TouchableWithoutFeedback onPress={dismissFilterModal}>
              <View style={{ flex: 1, backgroundColor: ntColours.darkGrey }} />
            </TouchableWithoutFeedback>
          }
          coverScreen={true}
          style={{ marginHorizontal: 4 }}
        >
          <FilterModal dismissModal={dismissFilterModal} />
        </Modal>
      </View>
    </FilterProvider>
  );
}
