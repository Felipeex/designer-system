import { Button, buttonProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";

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
  },
} as Meta<buttonProps>;

export const Primary: StoryObj<buttonProps> = {
  args: {
    children: "Button",
    mode: "primary",
  },
};

export const Secondary: StoryObj<buttonProps> = {
  args: {
    children: "Button",
    mode: "secondary",
  },
};

export const Small: StoryObj<buttonProps> = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const Medium: StoryObj<buttonProps> = {
  args: {
    children: "Button",
    size: "medium",
  },
};

export const Large: StoryObj<buttonProps> = {
  args: {
    children: "Button",
    size: "large",
  },
};
