import { Theme } from "@/themes/default";
import { createBox } from "@shopify/restyle";
import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
} from "react-native";

export const Pressable = createBox<Theme, NativePressableProps>(
  NativePressable,
);
export type PressableProps = React.ComponentProps<typeof Pressable>;
