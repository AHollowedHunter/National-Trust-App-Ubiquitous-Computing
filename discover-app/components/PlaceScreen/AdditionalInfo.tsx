import React from "react";
import { View, Text } from "react-native";
import { appStyles, ntColours } from "../../config/styles";
import { DetailedPlace, NTPlace } from "../../config/types";
import LinkButton from "../LinkButton";

type Props = {
  place: NTPlace;
  detailedPlace?: DetailedPlace;
};

export default function AdditionalInfo({ place, detailedPlace }: Props) {
  return (
    <>
      <Text style={appStyles.sectionHeading}>Additional information</Text>
      <View style={{ alignItems: "flex-start" }}>
        <LinkButton url={place.websiteUrl} title={"Website"} />
      </View>
    </>
  );
}
