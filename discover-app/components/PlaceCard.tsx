import { useNavigation } from "@react-navigation/native";
import React, { MutableRefObject, useRef, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { Svg, Image as ImageSvg } from "react-native-svg";
import { appStyles, ntColours } from "../config/styles";
import { NativeStackParamList, NTPlace } from "../config/types";
import ImageLoading from "./ImageLoading";
import { NTActivityIcon, NTIcon, NTWebIcon } from "./NationalTrustIcons";
import OpenStatus from "./OpenStatus";

type Props = {
  place: NTPlace;
  imageHeight?: number;
  showImage: boolean;
  useSvgImage?: boolean;
};

export default function PlaceCard({
  place,
  imageHeight,
  showImage,
  useSvgImage,
}: Props) {
  // Set default if not given
  imageHeight = imageHeight ? imageHeight : 200;

  const [imageLoading, setImageLoading] = useState(true);

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
                opacity: place.subTitle ? 1 : 0,
              },
            ]}
          >
            {place.subTitle}
          </Text>
        </View>

        {showImage ? (
          <ImageLoading
            uri={place.imageUrl}
            imageHeight={250}
            offset={24}
            useSvgImage={useSvgImage}
          />
        ) : (
          <View style={{ height: 24 }} />
        )}
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
        <Text style={{ flex: 1 }}>{place.description}</Text>
        <View style={{ alignItems: "flex-end", paddingLeft: 8 }}>
          <OpenStatus openStatus={place.openStatus} />
          {place.activityTags
            ? place.activityTags.map((tag, index) => (
                <Text key={index}>
                  {tag} {NTActivityIcon(tag, 16)}
                </Text>
              ))
            : null}
        </View>
      </View>
    </View>
  );
}
