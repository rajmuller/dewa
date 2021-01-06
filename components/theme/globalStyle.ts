const globalStyle = {
  global: {
    html: {
      boxSizing: "border-box",
    },

    body: {
      margin: 0,
      padding: "0",
      background: "background",
    },

    "*, *:before, *:after": {
      boxSizing: "inherit",
      margin: 0,
      padding: 0,
    },

    "input, textarea, button": {
      fontFamily: "inherit",
    },

    "h1,h2,h3,h4,h5,h6,p": {
      marginTop: 0,
      marginBottom: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },

    "p > code": {
      background: "#fff",
      padding: "2px 4px",
      boxShadow:
        "0 6px 8px rgba(102,119,136,0.03), 0 1px 2px rgba(102,119,136,0.3)",
      borderRadius: "2px",
    },
  },
};

export default globalStyle;
