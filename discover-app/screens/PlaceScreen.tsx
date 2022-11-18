import React from "react";
import { NativeStackParamList } from "../config/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PlaceCard from "../components/PlaceCard";

type Props = NativeStackScreenProps<NativeStackParamList, "Place">;

export function PlaceScreen({ route, navigation }: Props) {
  return <PlaceCard place={route.params.place} showImage={true} />;
}
