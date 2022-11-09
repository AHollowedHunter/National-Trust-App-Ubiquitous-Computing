import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { ntColours, ntFonts } from "../config/styles";
import { NTPlace } from "../config/types";
import { NTIcon } from "./NationalTrustIcon";
import OpenStatus from "./OpenStatus";

type Props = {
  place: NTPlace;
};

export default function PlaceListItem({ place }: Props) {
  return (
    <TouchableHighlight
      // style={{ marginTop: 8 }}
      underlayColor={ntColours.olive}
      activeOpacity={1}
      delayPressIn={60}
      onPress={() => null} // Do nothing for now
    >
      <View
        style={
          {
            // flex: 1,
          }
        }
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
              // display: "flex",
              paddingLeft: 24,
              zIndex: 1000,
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
                marginTop: -8,
                maxWidth: "95%",
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
              {/* <NTIcon
                name="Information-centre"
                style={{ fontSize: 16, color: ntColours.olive }}
              /> */}
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
            marginBottom: -8,
            padding: 8,
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Text style={{ flex: 2 }}>{place.description}</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <OpenStatus openStatus={place.openStatus} />
            <NTIcon name="Animals-in-park" style={{ fontSize: 24 }} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
