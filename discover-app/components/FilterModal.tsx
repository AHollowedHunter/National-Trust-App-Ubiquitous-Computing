import React from "react";
import { Button } from "react-native";

type Props = {
  dismissModal: Function;
};
export default function FilterModal({ dismissModal }: Props) {
  return <Button title="Test" onPress={() => dismissModal} />;
}
