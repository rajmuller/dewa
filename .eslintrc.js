module.exports = {
  extends: ["airbnb-typescript-prettier"],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-named-as-default": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "import/prefer-default-export": "off",
    "react/jsx-pascal-case": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
};
