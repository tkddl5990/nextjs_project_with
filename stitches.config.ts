import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      gray: "gray",
      blue: "blue",
      red: "red",
      white: "white",
    },
    fontSizes: {
      1.0: "1rem",
      1.2: "1.2rem",
      1.4: "1.4rem",
      1.6: "1.6rem",
    },
  },
});
