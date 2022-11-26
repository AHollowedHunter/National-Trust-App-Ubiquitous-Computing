import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Modal from "react-native-modal";

import { appStyles, ntColours, ntFonts } from "../config/styles";
import FilterModal from "./FilterModal";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {};

export default function DisoverHeader() {
  const [filterVisible, setFilterVisible] = useState(false);
  const dismissFilterModal = () => setFilterVisible(false);

  return (
    <View
      style={{
        backgroundColor: ntColours.cararra,
        height: 48,
        flexDirection: "row",
        elevation: 4,
        zIndex: 1,
      }}
    >
      <TextInput
        style={{
          flex: 2,
          margin: 8,
          paddingHorizontal: 8,
          borderWidth: 1,
          borderRadius: 0,
          borderColor: ntColours.darkGrey,
          backgroundColor: ntColours.desertStorm,
        }}
        accessibilityLabel={"Search input"}
        placeholder="Type here to find a place"
        selectionColor={ntColours.olive}
      />
      {/* <NTWebIcon
        name="search"
        style={{
          // flex: 1,
          fontSize: 24,
          paddingRight: 8,
          textAlignVertical: "center",
        }}
        accessibilityLabel={"Search Button"}
      /> */}
      <View
        style={{
          width: 2,
          marginVertical: 4,
          backgroundColor: ntColours.darkGrey,
        }}
      />
      <TouchableOpacity
        style={{ flexDirection: "row", paddingHorizontal: 8 }}
        onPress={() => setFilterVisible(true)}
      >
        <Text
          style={{
            textAlignVertical: "center",
            fontFamily: ntFonts.standard,
            fontSize: 24,
          }}
        >
          {"Filter "}
        </Text>
        <NTWebIcon
          name="settings"
          style={{
            fontSize: 24,
            textAlignVertical: "center",
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
