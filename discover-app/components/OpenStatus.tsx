import React from "react";
import { Text } from "react-native";
import { appStyles, ntColours } from "../config/styles";
import { NTOpenStatus } from "../config/types";

type Props = {
  openStatus: NTOpenStatus;
};

const statusColor = (status: NTOpenStatus) => {
  switch (status) {
    case NTOpenStatus.Open:
      return ntColours.apple;
    case NTOpenStatus.PartOpen:
      return ntColours.olive;
    case NTOpenStatus.Closed:
      return ntColours.crimson;
  }
};

export default function OpenStatus({ openStatus }: Props) {
  if (openStatus) {
    return (
      <Text
        style={[
          {
            fontSize: 16,
            backgroundColor: statusColor(openStatus),
            color: "white",
            paddingVertical: 4,
            paddingHorizontal: 8,
            elevation: 2,
            marginBottom: 4,
          },
          appStyles.infoBold,
        ]}
      >
        {openStatus}
      </Text>
    );
  }
  return <></>;
}
