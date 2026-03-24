import { Dimensions } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";

export const useConfig = () => {
  if (initialWindowMetrics) {
    const { bottom: bottomSpaceInsets, top: headerSpace } =
      initialWindowMetrics?.insets;

    const screenHeight = Dimensions.get("screen").height;
    const screenWidth = Dimensions.get("screen").width;

    return {
      bottomSpace: bottomSpaceInsets,
      headerSpace,
      screenHeight,
      screenWidth,
      status: "ready",
    };
  } else {
    return {
      bottomSpace: null,
      headerSpace: null,
      screenHeight: null,
      screenWidth: null,
      status: "not",
    };
  }
};
