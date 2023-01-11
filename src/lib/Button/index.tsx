import { CSS } from "@stitches/react";
import { Container, mode, size } from "./styles.css";

export interface buttonProps {
  children: React.ReactNode;
  mode: keyof typeof mode;
  size?: keyof typeof size;
  backgroundColor?: string;
  hoverColor?: string;
  disabled?: boolean;
  css?: CSS;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  children,
  size = "small",
  backgroundColor,
  hoverColor,
  css,
  style,
  ...rest
}: buttonProps) {
  return (
    <Container
      size={size}
      css={{
        backgroundColor,
        css,
        "&:hover:not([disabled])": hoverColor && {
          backgroundColor: hoverColor,
        },
      }}
      style={style}
      {...rest}
    >
      {children}
    </Container>
  );
}
