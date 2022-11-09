import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { ntColours, ntFonts } from "../config/styles";
import { NTPlace } from "../config/types";
import { NTIcon } from "./NationalTrustIcon";

type Props = {
  place: NTPlace;
};

export default function PlaceListItem({ place }: Props) {
  return (
    <TouchableHighlight
      style={{ flex: 1, left: 0, right: 0 }}
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
          style={
            {
              // backgroundColor: ntColours.eminence,
              // marginVertical: 8
            }
          }
        >
          <View
            style={{
              display: "flex",
              paddingLeft: 24,
              // bottom: -16,
              // paddingTop: 16,
              zIndex: 1000,
              // backgroundColor: ntColours.apple,
            }}
          >
            <Text
              style={{
                backgroundColor: ntColours.surfieGreen,
                color: "white",
                paddingHorizontal: 16,
                paddingVertical: 8,
                fontSize: 24,
                fontFamily: ntFonts.display,
                alignSelf: "flex-start",
                zIndex: 1000,
                bottom: -16,
                // maxWidth: "60%",
              }}
            >
              {place.title}
            </Text>
            <Text
              style={{
                fontFamily: ntFonts.italics,
                fontSize: 16,
                backgroundColor: ntColours.desertStorm,
                flex: 1,
                bottom: -8,
                // left: 64,
                right: 16,
                paddingHorizontal: 16,
                paddingVertical: 8,
                textAlign: "right",
                textAlignVertical: "center",
                alignSelf: "flex-end",
              }}
            >
              {place.subTitle}
            </Text>
          </View>

          <View style={{ height: 200 }}>
            <Image
              source={{ uri: place.imageUrl }}
              style={{ height: 224, resizeMode: "cover", top: -24 }}
              accessibilityLabel={place.imageDescription}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: ntColours.desertStorm,
            marginHorizontal: 8,
            top: -16,
            padding: 4,
          }}
        >
          <Text>{place.description}</Text>
          <Text style={{ fontWeight: "bold" }}>{place.openStatus}</Text>
          <NTIcon name="Animals-in-park" style={{ fontSize: 400 }} />
        </View>
      </View>
    </TouchableHighlight>
  );
}
