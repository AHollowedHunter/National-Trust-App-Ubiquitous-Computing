import React from "react";
import { Text } from "react-native";
import { styles } from "../config/styles";
import { NTOpenStatus } from "../config/types";

type Props = {
  openStatus: NTOpenStatus;
};

export default function OpenStatus({ openStatus }: Props) {
  if (openStatus) {
    return <Text style={styles.infoBold}>{openStatus}</Text>;
  }
  return <></>;
}
