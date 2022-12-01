import React from "react";
import { Text, View } from "react-native";
import { Activity } from "../../config/types";
import AccessibleGroup from "../AccessibleGroup";
import { NTActivityIcon } from "../NationalTrustIcons";

type Props = {
  tag: Activity;
};

export default function ActivityTag({ tag }: Props) {
  return (
    <AccessibleGroup accessiblilty={{ accessibilityLabel: tag }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          lineBreakMode={"middle"}
          style={{
            fontSize: 16,
            paddingHorizontal: 2,
            textAlign: "right",
          }}
        >
          {tag}
        </Text>
        <NTActivityIcon activity={tag} size={18} />
      </View>
    </AccessibleGroup>
  );
}
