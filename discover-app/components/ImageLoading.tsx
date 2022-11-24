import React, { useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { Svg, Image as ImageSvg } from "react-native-svg";
import { ntColours } from "../config/styles";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {
  uri: string;
  description?: string;
  imageHeight?: number;
  offset?: number;
  useSvgImage?: boolean;
};

export default function ImageLoading({
  uri,
  description,
  imageHeight,
  offset,
  useSvgImage,
}: Props) {
  // Set default if not given
  imageHeight = imageHeight ? imageHeight : 200;
  offset = offset ?? 0;

  const [imageLoading, setImageLoading] = useState(true);

  return (
    <View style={{ top: -offset, height: imageHeight }}>
      <View
        // This view exists to placeholder the space behind the image if it
        // does not load, such as Android Map Callouts...
        style={{
          position: "absolute",
          height: imageHeight + offset,
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
            height: imageHeight + offset,
          }}
          source={{ uri: uri + "?width=1000" }}
        />
        {useSvgImage ? (
          <Svg width={"100%"} height={imageHeight + offset}>
            <ImageSvg
              width={"100%"}
              height={"100%"}
              preserveAspectRatio="xMidYMid slice"
              href={{ uri: uri + "?width=1000" }}
            />
          </Svg>
        ) : null}
        <View
          style={{
            position: "absolute",
            height: imageHeight - 48,
            top: 32,
            width: "100%",
          }}
          accessibilityLabel={description}
        ></View>
      </View>
    </View>
  );
}