import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { ntColours, ntFonts } from "../config/styles";
import { NTPlace } from "../config/types";

type Props = {
  place: NTPlace;
};

export default function PlaceListItem({ place }: Props) {
  return (
    <TouchableHighlight
      style={{ flex: 1, left: 0, right: 0, marginTop: 8, paddingBottom: 8 }}
      underlayColor={ntColours.olive}
      activeOpacity={1}
      delayPressIn={60}
      onPress={() => null} // Do nothing for now
    >
      <View
        style={{
          // marginHorizontal: 8,
          // marginTop: 8,
          // backgroundColor: ntColours.crimson,
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: 24,
            bottom: -10,
            zIndex: 1000,
          }}
        >
          <Text
            style={{
              backgroundColor: ntColours.surfieGreen,
              color: "white",
              padding: 8,
              fontSize: 24,
              fontFamily: ntFonts.display,
              maxWidth: "60%",
            }}
          >
            {place.title}
          </Text>
          <Text
            style={{
              fontFamily: ntFonts.italics,
              fontSize: 18,
              backgroundColor: ntColours.desertStorm,
              flex: 1,
              paddingRight: 24,
              textAlign: "right",
              textAlignVertical: "center",
            }}
          >
            {place.subTitle}
          </Text>
        </View>

        <View style={{ height: 200 }}>
          <Image
            source={{ uri: place.imageUrl }}
            style={{ height: "100%", resizeMode: "cover" }}
            accessibilityLabel={place.imageDescription}
          />
        </View>

        <View
          style={{
            backgroundColor: ntColours.desertStorm,
            marginHorizontal: 8,
            shadowOffset: { width: 8, height: 8 },
            shadowColor: "black",
            shadowRadius: 8,
          }}
        >
          <Text>{place.description}</Text>
          <Text>{place.openStatus}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
