import { createTheme } from "../stitches.config";

export const defaultTheme = createTheme({
  fonts: {
    system: "system-ui",
    sansSerif: "sans-serif",
  },
  colors: {
    gray50: "#f9fafb",
    gray100: "#f2f4f6",
    gray200: "#e5e8eb",
    gray300: "#d1d6db",
    gray400: "#b0b8c1",
    gray500: "#8b95a1",
    gray600: "#6b7684",
    gray700: "#4e5968",
    gray800: "#333d4b",
    gray900: "#191f28",
  },
  fontSizes: {
    1.0: "1rem",
    1.2: "1.2rem",
    1.4: "1.4rem",
    1.6: "1.6rem",
    1.8: "1.8rem",
    2.0: "2.0rem",
    2.2: "2.2rem",
    2.4: "2.4rem",
  },
});
