import React from "react";
import { Image, Text, View } from "react-native";
import { appStyles, ntColours } from "../config/styles";
import { NTPlace } from "../config/types";
import { NTIcon } from "./NationalTrustIcons";
import OpenStatus from "./OpenStatus";

type Props = {
  place: NTPlace;
  imageHeight?: number;
};

export default function PlaceCard({ place, imageHeight }: Props) {
  // Set default if not given
  imageHeight = imageHeight ? imageHeight : 200;

  return (
    <View>
      <View>
        <View
          style={{
            paddingHorizontal: 24,
            zIndex: 1000,
            bottom: -16,
            marginTop: -8,
          }}
        >
          <Text
            style={[
              appStyles.heading,
              {
                backgroundColor: ntColours.surfieGreen,
                color: "white",
                paddingHorizontal: 16,
                paddingVertical: 8,
                alignSelf: "flex-start",
                maxWidth: "95%",
                zIndex: 1000,
              },
            ]}
          >
            {place.title}
          </Text>
          <Text
            style={[
              appStyles.subHeading,
              {
                backgroundColor: ntColours.desertStorm,
                top: -8,
                paddingHorizontal: 16,
                paddingVertical: 8,
                alignSelf: "flex-end",
                maxWidth: "95%",
              },
            ]}
          >
            {place.subTitle}
          </Text>
        </View>

        <View style={{ top: -24, height: imageHeight }}>
          <View
            // This view exists to placeholder the space behind the image if it
            // does not load, such as Android Map Callouts...
            style={{
              position: "absolute",
              height: imageHeight + 24,
              width: "100%",
              backgroundColor: ntColours.doveGrey,
            }}
          />
          <Image
            source={{ uri: place.imageUrl }}
            style={{ height: imageHeight + 24 }}
            accessibilityLabel={place.imageDescription}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: ntColours.desertStorm,
          top: -16,
          marginHorizontal: 8,
          marginBottom: -8,
          padding: 8,
          flexDirection: "row",
        }}
      >
        <Text style={{ flex: 2 }}>{place.description}</Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <OpenStatus openStatus={place.openStatus} />
          <NTIcon name="Animals-in-park" style={{ fontSize: 24 }} />
        </View>
      </View>
    </View>
  );
}
