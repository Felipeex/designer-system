import { Button, buttonProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
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
    label: "Button",
    mode: "primary",
  },
};

export const Secondary: StoryObj<buttonProps> = {
  args: {
    label: "Button",
    mode: "secondary",
  },
};

export const Small: StoryObj<buttonProps> = {
  args: {
    label: "Button",
    size: "small",
  },
};

export const Medium: StoryObj<buttonProps> = {
  args: {
    label: "Button",
    size: "medium",
  },
};

export const Large: StoryObj<buttonProps> = {
  args: {
    label: "Button",
    size: "large",
  },
};
