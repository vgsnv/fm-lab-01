import { Theme } from "@/themes/default";
import { createBox } from "@shopify/restyle";
import { ComponentProps } from "react";

export const View = createBox<Theme>();
export type ViewProps = ComponentProps<typeof View>;
