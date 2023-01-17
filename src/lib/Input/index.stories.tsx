import * as Input from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";

export default {
  title: "Components/Input",
  component: Input.Root,
} as Meta<Input.RootProps>;

export const Primary: StoryObj<Input.RootProps> = {
  args: {
    children: (
      <>
        <Input.Icon>
          <EnvelopeSimple size={20} />
        </Input.Icon>
        <Input.Input placeholder="Digite seu e-mail" autoFocus />
      </>
    ),
  },
};
