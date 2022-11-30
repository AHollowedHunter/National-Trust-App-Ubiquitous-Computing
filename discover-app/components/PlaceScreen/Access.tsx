import React from "react";
import { View, Text } from "react-native";
import { appStyles } from "../../config/styles";
import { AccessTag } from "../../config/types";
import AccessibleGroup from "../AccessibleGroup";
import { NTAccessIcon } from "../NationalTrustIcons";

type Props = {
  accessTags: AccessTag[];
};

export default function Access({ accessTags }: Props) {
  return (
    <>
      <Text style={appStyles.sectionHeading}>Accessibility</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {accessTags.map((access) => (
          <AccessibleGroup
            key={access.name}
            accessiblilty={{ accessibilityLabel: access.name }}
            style={{ width: "50%", justifyContent: "center" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                maxWidth: "100%",
                padding: 4,
              }}
            >
              <NTAccessIcon key={access.name} access={access.name} />
              <Text
                style={{
                  paddingHorizontal: 4,
                  flexShrink: 1,
                  flexWrap: "wrap",
                }}
              >
                {access.name}
              </Text>
            </View>
          </AccessibleGroup>
        ))}
      </View>
    </>
  );
}
