import * as Input from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";

export default {
  title: "Components/Input",
  component: Input.Root,
} as Meta<Input.RootProps>;

export const LeftIcon: StoryObj<Input.RootProps> = {
  args: {
    children: (
      <>
        <Input.Icon position="left">
          <EnvelopeSimple size={20} />
        </Input.Icon>
        <Input.Input
          placeholder="Digite seu e-mail"
          autoFocus
          onClick={() => console.log("oi")}
        />
      </>
    ),
  },
};

export const RightIcon: StoryObj<Input.RootProps> = {
  args: {
    children: (
      <>
        <Input.Input placeholder="Digite seu e-mail" autoFocus />
        <Input.Icon position="right">
          <EnvelopeSimple size={20} />
        </Input.Icon>
      </>
    ),
  },
};
