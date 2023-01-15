import React, { ComponentPropsWithRef, forwardRef } from "react";
import { Container, mode, size } from "./styles.css";
import { Slot } from "@radix-ui/react-slot";
import { CSS } from "@stitches/react";

export interface buttonProps extends ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  mode: keyof typeof mode;
  size?: keyof typeof size;
  backgroundColor?: string;
  hoverColor?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.MutableRefObject<HTMLButtonElement>;
  asChild?: boolean;
  css: CSS;
}

const button = (
  {
    size = "small",
    backgroundColor,
    hoverColor,
    style,
    asChild,
    mode,
    css: CSS,
    ...rest
  }: buttonProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const css: CSS = {
    backgroundColor,
    "&:hover:not([disabled])": hoverColor && {
      backgroundColor: hoverColor,
    },
    ...CSS,
  };

  const Component = asChild ? Slot : "button";
  const styleClass = Container({
    size,
    css,
    mode,
  });

  return <Component className={styleClass} style={style} ref={ref} {...rest} />;
};

export const Button = forwardRef(button);
