import React, { useState } from "react";
import { NativeStackParamList } from "../config/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, ScrollView, Text } from "react-native";
import { appStyles, ntColours } from "../config/styles";
import { MiniMap } from "../components/MiniMap";
import ImageLoading from "../components/ImageLoading";
import OpenStatus from "../components/OpenStatus";
import { NTActivityIcon } from "../components/NationalTrustIcons";
import Separator from "../components/Separator";
import { Alert } from "../components/Alert";

type Props = NativeStackScreenProps<NativeStackParamList, "Place">;

export function PlaceScreen({ route, navigation }: Props) {
  const place = route.params.place;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: ntColours.alto }}>
      <View
        style={{
          paddingHorizontal: 24,
          zIndex: 1000,
          position: "absolute",
          width: "100%",
        }}
      >
        <Text
          style={[
            appStyles.subHeading,
            {
              backgroundColor: ntColours.desertStorm,
              paddingHorizontal: 16,
              paddingVertical: 8,
              alignSelf: "flex-end",
              maxWidth: "95%",
              opacity: place.subTitle ? 1 : 0,
              elevation: 4,
            },
          ]}
        >
          {place.subTitle}
        </Text>
      </View>

      <ImageLoading
        uri={place.imageUrl}
        description={place.imageDescription}
        imageHeight={300}
      />

      <View
        style={{
          backgroundColor: ntColours.desertStorm,
          top: -16,
          marginHorizontal: 8,
          marginBottom: -8,
          padding: 8,
          elevation: 4,
        }}
      >
        <Alert
          content={
            "This location is closed for the season.\
            We look forward to seeing you again when we reopen"
          }
        />
        <View
          style={{
            flexDirection: "row",
            marginBottom: 8,
          }}
        >
          <Text style={[appStyles.description, { flex: 1 }]}>
            {place.description}
          </Text>
          <View style={{ alignItems: "flex-end", paddingLeft: 8 }}>
            <OpenStatus openStatus={place.openStatus} />
            {place.activityTags
              ? place.activityTags.map((tag, index) => (
                  <Text
                    key={index}
                    style={{ fontSize: 16, textAlignVertical: "center" }}
                  >
                    {tag} <NTActivityIcon activity={tag} size={18} />
                  </Text>
                ))
              : null}
          </View>
        </View>

        <Separator style={{ marginVertical: 8 }} />

        <View style={{ flex: 1 }}>
          <Text style={appStyles.sectionHeading}>Location and Directions</Text>
          <MiniMap place={place} style={{ flex: 1, height: 200 }} />
        </View>
      </View>
    </ScrollView>
  );
}
