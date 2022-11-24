import { useNavigation } from "@react-navigation/native";
import React, { MutableRefObject, useRef, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { Svg, Image as ImageSvg } from "react-native-svg";
import { appStyles, ntColours } from "../config/styles";
import { NativeStackParamList, NTPlace } from "../config/types";
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
          <View style={{ top: -24, height: imageHeight }}>
            <View
              // This view exists to placeholder the space behind the image if it
              // does not load, such as Android Map Callouts...
              style={{
                position: "absolute",
                height: imageHeight + 24,
                width: "100%",
                backgroundColor: ntColours.alto,
                display: imageLoading ? "flex" : "none",
              }}
            >
              <NTWebIcon
                name="picture"
                style={{
                  fontSize: 32,
                  color: ntColours.darkGrey,
                  textAlign: "center",
                  height: "100%",
                  textAlignVertical: "center",
                }}
              ></NTWebIcon>
              <ActivityIndicator
                size={96}
                color={ntColours.olive}
                style={{ position: "absolute", width: "100%", height: "100%" }}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: ntColours.darkGrey,
                  position: "relative",
                  bottom: 48,
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                Loading...
              </Text>
            </View>
            <View>
              <Image
                onLoad={() => {
                  setImageLoading(false);
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: imageHeight + 24,
                }}
                source={{ uri: place.imageUrl + "?width=1000" }}
              />
              {useSvgImage ? (
                <Svg width={"100%"} height={imageHeight + 24}>
                  <ImageSvg
                    width={"100%"}
                    height={"100%"}
                    preserveAspectRatio="xMidYMid slice"
                    href={{ uri: place.imageUrl + "?width=1000" }}
                  />
                </Svg>
              ) : null}
            </View>
          </View>
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
