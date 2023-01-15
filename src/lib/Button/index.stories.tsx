import { Button, buttonProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { Link, User } from "phosphor-react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    size: "small",
    mode: "primary",
    disabled: false,
  },
  argTypes: {
    backgroundColor: { control: "color" },
    hoverColor: { control: "color" },
    onClick: { action: "click" },
  },
} as Meta<buttonProps>;

export const Primary: StoryObj<buttonProps> = {
  args: {
    mode: "primary",
  },
};

export const Secondary: StoryObj<buttonProps> = {
  args: {
    mode: "secondary",
  },
};

export const Small: StoryObj<buttonProps> = {
  args: {
    size: "small",
  },
};

export const Medium: StoryObj<buttonProps> = {
  args: {
    size: "medium",
  },
};

export const Large: StoryObj<buttonProps> = {
  args: {
    size: "large",
  },
};

export const withIcon: StoryObj<buttonProps> = {
  args: {
    children: (
      <>
        <User weight="bold" />
        Fazer Login
      </>
    ),
  },
};

export const withLink: StoryObj<buttonProps> = {
  args: {
    asChild: true,
    css: {
      textDecoration: "none",
    },
    children: (
      <a href="#">
        <Link weight="bold" />
        Ir para o Link
      </a>
    ),
  },
};

export const Disabled: StoryObj<buttonProps> = {
  args: {
    disabled: true,
  },
};
