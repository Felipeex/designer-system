import { styled } from "../theme";

export const size = {
  small: {
    fontSize: "$ultra-small",
    padding: "$small",
  },
  medium: {
    fontSize: "$small",
    padding: "$medium",
  },
  large: {
    fontSize: "$medium",
    padding: "$medium",
  },
};

export const mode = {
  primary: {
    backgroundColor: "$blue-700",
    "&:hover:not([disabled])": {
      backgroundColor: "$blue-500",
    },
  },
  secondary: {
    backgroundColor: "$gray-700",
    "&:hover:not([disabled])": {
      backgroundColor: "$gray-600",
    },
  },
};

export const Container = styled("button", {
  fontWeight: 600,
  color: "white",
  cursor: "pointer",
  borderRadius: "5px",

  variants: {
    size,
    mode,
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  border: 0,
  outline: "none",
  transition: "all 0.3s ease 0s",
});
