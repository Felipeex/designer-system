import { styled } from "../theme";

export const Container = styled("div", {
  maxWidth: "482px",
  transition: "300ms",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "14px",
  borderRadius: "5px",
  border: "1.5px solid $gray-600",

  "&:focus-within": {
    border: "1.5px solid $blue-700",
    svg: {
      color: "$blue-700",
    },
  },

  svg: {
    color: "$gray-600",
  },

  background: "$gray-900",
});

export const Input = styled("input", {
  border: 0,
  padding: "14px 14px 14px 0",
  flex: 1,
  color: "white",
  fontSize: "$small",
  background: "none",
  outline: "none",

  "&:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 30px #0E1015 inset !important",
    "-webkit-text-fill-color": "white !important",
  },

  "&::placeholder": {
    fontFamily: 500,
    color: "$gray-600",
  },
});

export const position = {
  left: {
    marginLeft: 14,
  },
  right: {
    marginRight: 14,
  },
};

export const ContainerIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  variants: {
    position: {
      ...position,
    },
  },
});
