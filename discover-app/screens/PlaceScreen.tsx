import React, { useState } from "react";
import { NativeStackParamList } from "../config/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { ntColours } from "../config/styles";
import { MiniMap } from "../components/MiniMap";
import ImageLoading from "../components/ImageLoading";

type Props = NativeStackScreenProps<NativeStackParamList, "Place">;

export function PlaceScreen({ route, navigation }: Props) {
  const place = route.params.place;

  return (
    <View style={{ flex: 1, backgroundColor: ntColours.desertStorm }}>
      <ImageLoading uri={place.imageUrl} imageHeight={250} />
      <MiniMap place={place} style={{ height: 200 }} />
    </View>
  );
}
