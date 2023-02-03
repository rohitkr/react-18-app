import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";
import { ArrowLeft, ArrowRight } from "tabler-icons-react";

export default {
  title: `Components/Badge`,
  component: Badge,
  argTypes: {
    size: {
      defaultValue: "large",
      options: ["large", "small"],
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "status",
      options: ["status", "notification"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "Sample label",
      control: "text",
    },
    intent: {
      defaultValue: "muted",
      options: ["muted", "info", "success", "warning", "orange", "crimson"],
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "neutral",
      options: ["neutral", "bold", "transparent", "outline"],
      control: { type: "inline-radio" },
    },
    LeadingIcon: {
      defaultValue: "None",
      options: ["None", "Left"],
      control: { type: "inline-radio" },
      mapping: {
        None: "",
        Left: ArrowLeft,
      },
    },
    TrailingIcon: {
      defaultValue: "None",
      options: ["None", "Right"],
      control: { type: "inline-radio" },
      mapping: {
        None: "",
        Right: ArrowRight,
      },
    },
  },
  args: {},
} as ComponentMeta<typeof Badge>;

const TemplateInput: ComponentStory<typeof Badge> = (args: any) => {
  return <Badge {...args} />;
};

export const Default = TemplateInput.bind({});
Default.args = {
  variant: "neutral",
  intent: "warning",
  LeadingIcon: ArrowLeft,
  TrailingIcon: ArrowRight,
  label: "Sample Badge",
};
