import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      "gray-900": "#0E1015",
      "gray-800": "#13151B",
      "gray-700": "#1A1C22",
      "gray-600": "#2D3439",
      "gray-500": "#75808A",
      "gray-400": "#414950",
      "gray-100": "#E1E1E6",

      "blue-700": "#0095FF",
      "blue-500": "#46B2FF",

      "cyan-900": "#244359",

      "white-900": "#ededed",
      "hover-link": "#adb5bd",

      "green-500": "#92FF6B",
    },
    fontSizes: {
      "ultra-large": "1.625rem" /* 26px */,
      large: "1.375rem" /* 22px */,
      medium: "1.25rem" /* 20px */,
      small: "1.125rem" /* 18px */,
      "ultra-small": "1rem" /* 16px */,
    },
    headingSizes: {
      large: "58px",
      medium: "48px",
      small: "38px",
      "ultra-small": "36px",
    },
    fonts: {
      default: "Poppins",
    },

    space: {
      medium: "16px 50px",
      small: "12px 38px",
    },
  },
});
