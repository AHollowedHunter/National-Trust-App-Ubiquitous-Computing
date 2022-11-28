import React, { useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { ntColours } from "../config/styles";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {
  uri: string;
  description?: string;
  imageHeight?: number;
  offset?: number;
};

export default function ImageLoading({
  uri,
  description,
  imageHeight = 200,
  offset = 0,
}: Props) {
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
        importantForAccessibility={"no-hide-descendants"}
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
          accessible={false}
        />
        <View
          style={{
            position: "absolute",
            height: imageHeight - 48,
            top: 32,
            width: "100%",
          }}
          accessibilityLabel={"Image: " + description}
        ></View>
      </View>
    </View>
  );
}
