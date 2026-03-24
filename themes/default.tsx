import { StatusBarStyle } from "react-native";

import { createTheme } from "@shopify/restyle";
import Color from "color";

const main = Color("#fff");

const colors = {
  $acsentColor: "#0679F8",
  $background: main.string(),
  $block: main.darken(0.05).string(),
  $border: main.darken(0.03).string(),
  $selectedColor: main.darken(0.1).string(),
  $separator: main.darken(0.15).string(),
  $skeleton: main.lighten(0.1).string(),
  $textPrimary: main.darken(0.9).string(),
  $textSecondary: main.darken(0.5).string(),
};

export const defaultTheme = createTheme({
  borderRadii: {
    n: 0,
    l: 25,
    m: 16,
    mle: 30,
    r: 100,
    s: 8,
    se: 10,
    xl: 40,
    xs: 4,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  colors: {
    ...colors,
    _blue: Color("blue").alpha(0.5).string(),
    _error: "#CB3D3D",
    _green: Color("green").alpha(0.1).string(),
    _orange: "orange",
    _red: "red",
    _systemDark: "#131414",
    _systemLight: "#ffffff",
    _yellow: "yellow",
    transparent: "transparent",
  },
  spacing: {
    le: 32,
    ls: 25,
    sm: 12, //---
    ss: 10,
    xss: 6,
    xxs: 2,
    l: 20,
    m: 16, //---
    s: 8,
    xl: 40,
    xs: 4,
  },
  statusBar: {
    barStyleDark: "dark-content" as StatusBarStyle,
    barStyleLight: "light-content" as StatusBarStyle,
  },
  textVariants: {
    BodyText: {
      fontSize: 13,
      fontWeight: "400",
      letterSpacing: 0,
      lineHeight: 15,
    },
    CalloutText: {
      fontSize: 12,
      fontWeight: "500",
      letterSpacing: 0,
      lineHeight: 15,
    },
    defaults: {
      // fontFamily: 'Comic Neue',
      // fontFamily: 'Noto Sans',
      // fontFamily: 'Montserrat',
      color: "$textPrimary",

      // fontFamily: 'Raleway',
      // fontFamily: 'Inter',
      fontSize: 16,
      // letterSpacing: -0.31,
      letterSpacing: 0.9,
      lineHeight: 22,
    },
    Headline: {
      fontSize: 14,
      fontWeight: "500",
      letterSpacing: -0.15,
      lineHeight: 20,
    },
    LargeTitle: {
      // fontFamily: 'Noto Sans',
      // fontFamily: 'Montserrat',§
      // fontFamily: 'Raleway',
      // fontFamily: 'Inter',

      fontSize: 20,
      fontWeight: "600",
      letterSpacing: -0.45,
      lineHeight: 20,
    },
    Subheadline: {
      fontSize: 11,
      fontWeight: "500",
      letterSpacing: 0.06,
      lineHeight: 13,
    },
    TextInput: {
      fontSize: 16,
      fontWeight: "500",
      letterSpacing: -0.3,
      lineHeight: 20,
    },
    Title1: {
      // fontFamily: 'Noto Sans',
      // fontFamily: 'Montserrat',
      // fontFamily: 'Raleway',
      // fontFamily: 'Inter',

      fontSize: 18,
      fontWeight: "600",
      letterSpacing: 0.07,
      lineHeight: 29,
    },
    Title2: {
      fontSize: 16,
      fontWeight: "500",
      letterSpacing: -0.31,
      lineHeight: 19,
    },
    Title2Bold: {
      fontSize: 16,
      fontWeight: "700",
      letterSpacing: -0.31,
      lineHeight: 20,
    },
  },
});

export type Theme = typeof defaultTheme;
