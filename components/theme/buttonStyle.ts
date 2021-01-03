const buttonStyle = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "semibold",
    textTransform: "capitalize",
    borderRadius: "lg",
  },
  sizes: {
    sm: {
      fontSize: "14px",
      padding: "18px",
      h: "auto",
    },
    md: {
      fontSize: "16px",
      padding: "20px",
      h: "auto",
    },
    lg: {
      fontSize: "20px",
      padding: "24px",
      h: "auto",
    },
  },
  variants: {
    primary: {
      color: "#fff",
      bg: "primary.700",
      _hover: {
        bg: "primary.800",
      },
      _active: {
        bg: "primary.900",
      },
    },
    secondary: {
      bg: "secondary.500",
      color: "white",
      _hover: {
        bg: "secondary.600",
      },
      _active: {
        bg: "secondary.700",
      },
    },
    tertiary: {
      bg: "green.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "lg",
  },
};

export default buttonStyle;
