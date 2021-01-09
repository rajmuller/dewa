const buttonStyle = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "semibold",
    textTransform: "capitalize",
    borderRadius: "lg",
    padding: ["18px", "18px", "20px", "24px"],
  },
  sizes: {
    sm: {
      h: "auto",
    },
    md: {
      h: "auto",
    },
    lg: {
      h: "auto",
    },
  },
  variants: {
    primary: {
      fontSize: ["14px", "14px", "16px", "20px"],
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
      fontSize: ["14px", "14px", "16px", "20px"],
      borderRadius: "none",
      paddingBottom: 2,
      color: "secondary.500",
      bg: "transparent",
      _hover: {
        bg: "transparent",
      },
      _active: {
        bg: "transparent",
      },
    },
    tertiary: {
      fontSize: ["14px", "14px", "16px", "20px"],
      bg: "green.500",
      color: "#fff",
    },
  },
};

export default buttonStyle;
