import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Text,
  TextStyle,
  StyleProp,
  TouchableOpacity,
} from "react-native";

import { appStyles } from "../config/styles";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {
  title: string;
  content: string;
  titleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function ExpandingSection({
  title,
  content,
  titleStyle = appStyles.sectionHeading,
  textStyle = appStyles.description,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [maxLines, setMaxLines] = useState(1);
  const animatedHeight = useRef(new Animated.Value(80)).current;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const collapseView = () => {
    Animated.timing(animatedHeight, {
      duration: 400,
      toValue: 80,
      useNativeDriver: false,
    }).start(() => setMaxLines(1));
  };

  const expandView = () => {
    setMaxLines(0);
    Animated.timing(animatedHeight, {
      duration: 400,
      toValue: 2000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (expanded) {
      expandView();
    } else {
      collapseView();
    }
  }, [expanded]);

  return (
    <TouchableOpacity onPress={toggleExpanded} activeOpacity={0.6}>
      <Text style={[titleStyle, { flex: 1 }]}>{title}</Text>
      <Animated.View style={{ maxHeight: animatedHeight, overflow: "hidden" }}>
        <Text style={textStyle} numberOfLines={maxLines}>
          {content}
        </Text>
        <NTWebIcon
          name={expanded ? "circle_up" : "circle_down"}
          size={24}
          style={{ padding: 8, alignSelf: "center" }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}
