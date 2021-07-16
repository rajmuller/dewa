import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import styles from "./globalStyle";
import colors from "./colors";
import space from "./space";
import shadows from "./shadows";
import { headingStyles, textStyles } from "./typoStyles";

const fonts = {
  body: "'Montserrat', sans-serif",
  heading: "'Montserrat', sans-serif",
  mono: "'Montserrat', sans-serif",
};

const breakpoints = createBreakpoints({
  sm: "40em", // 640px
  md: "52em", // 832px
  lg: "75em", // 1200px
  xl: "75em",
});

const theme = extendTheme({
  fonts,
  // @ts-ignore
  colors,
  shadows,
  space,
  styles,
  components: {
    Heading: headingStyles,
    Text: textStyles,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  breakpoints,
});

export default theme;
