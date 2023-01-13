import React, { ComponentPropsWithRef, forwardRef } from "react";
import { CSS } from "@stitches/react";
import { Container, mode, size } from "./styles.css";

export interface buttonProps<T extends React.ElementType>
  extends ComponentPropsWithRef<typeof Container> {
  children: React.ReactNode;
  mode: keyof typeof mode;
  size?: keyof typeof size;
  backgroundColor?: string;
  hoverColor?: string;
  disabled?: boolean;
  css?: CSS;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.MutableRefObject<HTMLButtonElement>;
  as?: T;
}

const button = <T extends React.ElementType = "a">(
  {
    children,
    size = "small",
    backgroundColor,
    hoverColor,
    css,
    style,
    ...rest
  }: buttonProps<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof buttonProps<T>>,
  ref: React.Ref<HTMLButtonElement>
) => {
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
      ref={ref}
      {...rest}
    >
      {children}
    </Container>
  );
};

export const Button = forwardRef(button);
