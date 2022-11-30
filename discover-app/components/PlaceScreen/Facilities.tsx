import React from "react";
import { View, Text } from "react-native";
import { appStyles } from "../../config/styles";
import { Facility } from "../../config/types";
import AccessibleGroup from "../AccessibleGroup";
import { NTFacilityIcon } from "../NationalTrustIcons";

type Props = {
  facilities: Facility[];
};

export default function Facilities({ facilities }: Props) {
  return (
    <>
      <Text style={appStyles.sectionHeading}>Facilities</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {facilities.map((facility) =>
          facility.available ? (
            <AccessibleGroup
              key={facility.name}
              accessiblilty={{ accessibilityLabel: facility.name }}
              style={{ width: "50%", justifyContent: "center" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  padding: 4,
                }}
              >
                <NTFacilityIcon key={facility.name} facility={facility.name} />
                <Text
                  style={{
                    paddingHorizontal: 4,
                    flexShrink: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {facility.name}
                </Text>
              </View>
            </AccessibleGroup>
          ) : null
        )}
      </View>
    </>
  );
}
