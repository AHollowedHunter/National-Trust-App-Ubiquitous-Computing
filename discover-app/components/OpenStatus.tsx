import React from "react";
import { Text } from "react-native";
import { appStyles, ntColours } from "../config/styles";
import { NTOpenStatus } from "../config/types";

type Props = {
  openStatus: NTOpenStatus;
};

const statusColor = (status: NTOpenStatus) => {
  switch (status) {
    case NTOpenStatus.FULLY_OPEN:
      return ntColours.apple;
    case NTOpenStatus.PARTIALLY_OPEN:
      return ntColours.olive;
    case NTOpenStatus.CLOSED:
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
