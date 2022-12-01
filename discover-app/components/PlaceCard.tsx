import React from "react";
import { Text, View } from "react-native";
import { appStyles, ntColours } from "../config/styles";
import { NTPlace } from "../config/types";
import Distance from "./Distance";
import ImageLoading from "./ImageLoading";
import { NTActivityIcon } from "./NationalTrustIcons";
import OpenStatus from "./OpenStatus";
import ActivityTag from "./PlaceScreen/ActivityTag";

type Props = {
  place: NTPlace;
  imageHeight?: number;
};

export default function PlaceCard({ place, imageHeight = 200 }: Props) {
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
                elevation: 4,
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
                opacity: place.subTitle ? 1 : 0,
                elevation: 4,
              },
            ]}
          >
            {place.subTitle}
          </Text>
        </View>
        <ImageLoading
          uri={place.imageUrl}
          description={place.imageDescription}
          imageHeight={imageHeight}
          offset={24}
        />
      </View>

      <View
        style={{
          backgroundColor: ntColours.desertStorm,
          top: -16,
          marginHorizontal: 8,
          marginBottom: -8,
          padding: 8,
          flexDirection: "row",
          elevation: 4,
        }}
      >
        <View style={{ flex: 1 }}>
          <Distance distance={place.distance} />
          <Text style={[appStyles.description]}>{place.description}</Text>
        </View>
        <View style={{ alignItems: "flex-end", paddingLeft: 8 }}>
          <OpenStatus openStatus={place.openStatus} />
          {place.activityTags
            ? place.activityTags.map((tag) => (
                <ActivityTag key={tag} tag={tag} />
              ))
            : null}
        </View>
      </View>
    </View>
  );
}
