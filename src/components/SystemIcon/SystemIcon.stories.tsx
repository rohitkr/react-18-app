import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SystemIcon from "./SystemIcon";
import { ArrowLeft, ArrowRight } from "tabler-icons-react";
export default {
  title: `Components/SystemIcon`,
  component: SystemIcon,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["medium", "small", "large"],
      control: { type: "inline-radio" },
    },
    intent: {
      defaultValue: "muted-dark",
      options: [
        "muted-light",
        "muted-dark",
        "info",
        "success",
        "warning",
        "critical",
      ],
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    transparent: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof SystemIcon>;
const TemplateInput: ComponentStory<typeof SystemIcon> = (args: any) => {
  return <SystemIcon {...args} />;
};
export const Default = TemplateInput.bind({});
Default.args = {
  size: "large",
  intent: "warning",
  transparent: false,
};
