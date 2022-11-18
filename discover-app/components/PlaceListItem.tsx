import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableHighlight, View } from "react-native";
import { ntColours } from "../config/styles";
import { NativeStackProps, NTPlace } from "../config/types";
import PlaceCard from "./PlaceCard";

type Props = {
  place: NTPlace;
};

export default function PlaceListItem({ place }: Props) {
  let navigation = useNavigation<NativeStackProps>();
  return (
    <TouchableHighlight
      underlayColor={ntColours.alto}
      activeOpacity={0.8}
      delayPressIn={60}
      onPress={() => navigation.push("Place", { place: place })} // Do nothing for now
    >
      {/* Wrap all childen in a View for activeOpactiy to work 
      see https://github.com/facebook/react-native/issues/11834 */}
      <View>
        <PlaceCard place={place} showImage={true} />
      </View>
    </TouchableHighlight>
  );
}
