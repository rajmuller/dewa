import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import styles from "./globalStyle";
import colors from "./colors";
import space from "./space";
import { headingStyles, textStyles } from "./typoStyles";

const fonts = {
  body: "'Montserrat', sans-serif",
  heading: "'Montserrat', sans-serif",
  mono: "'Montserrat', sans-serif",
};

const breakpoints = createBreakpoints({
  sm: "640px",
  md: "832px",
  lg: "1280px",
  xl: "1280px",
});

const theme = extendTheme({
  fonts,
  // @ts-ignore
  colors,
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
