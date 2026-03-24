import { createBox } from "@shopify/restyle";
import { ComponentProps } from "react";
import { Theme } from "themes/default";

export const View = createBox<Theme>();
export type ViewProps = ComponentProps<typeof View>;
