import React from "react";
import {
  StyleProp,
  ViewProps,
  FlexStyle,
  AccessibilityProps,
  View,
} from "react-native";

type Props = {
  children: JSX.Element[] | JSX.Element;
  accessiblilty: AccessibilityProps;
  style?: StyleProp<ViewProps | FlexStyle>;
};

/**
 * Apply accesible props to the root element, and ignore accessibility on child
 * components
 *
 * Wraps children in a separate view that ignores accessiblity
 *
 * @param children - Child JSX elements
 * @param accessiblilty - accessiblilty props
 * @param style? - Style to apply to root container
 * @returns JSX.Element
 */
export default function AccessibleGroup({
  children,
  accessiblilty,
  style,
}: Props) {
  return (
    <View {...accessiblilty} accessible style={style}>
      <View
        importantForAccessibility="no-hide-descendants"
        accessibilityElementsHidden
      >
        {children}
      </View>
    </View>
  );
}
