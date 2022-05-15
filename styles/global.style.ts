import { globalCss } from "@stitches/react";

const globalStyle = globalCss({
  html: {
    fontSize: "62.5%",
  },
  body: {
    fontSize: "$1.6",
    color: "#333",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  ":root": {
    fontSize: "10px",
  },
});

export default globalStyle;
