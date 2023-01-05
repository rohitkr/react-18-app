import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "./Tag";
import { ArrowLeft, ArrowRight } from "tabler-icons-react";
import { TagProps } from "./Tag.types";
export default {
  title: `Components/Tag`,
  component: Tag,
  argTypes: {
    size: {
      defaultValue: "large",
      options: ["large", "small"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "Sample label",
      control: "text",
    },
    intent: {
      defaultValue: "muted",
      options: ["muted", "info", "success", "warning", "critical"],
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "neutral",
      options: ["neutral", "bold", "outline"],
      control: { type: "inline-radio" },
    },
    LeadingIcon: {
      defaultValue: "None",
      options: ["None", "Left"],
      control: { type: "inline-radio" },
      mapping: {
        None: "",
        Left: <ArrowLeft />,
      },
    },
    TrailingIcon: {
      defaultValue: "None",
      options: ["None", "Right"],
      control: { type: "inline-radio" },
      mapping: {
        None: "",
        Right: <ArrowRight />,
      },
    },
    dismissible: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    disabled: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Tag>;
const TemplateInput: ComponentStory<typeof Tag> = (args: TagProps) => {
  return <Tag {...args} />;
};
export const Default = TemplateInput.bind({});
Default.args = {
  variant: "neutral",
  intent: "warning",
  LeadingIcon: <ArrowLeft />,
  TrailingIcon: <ArrowRight />,
  label: "Sample Tag",
};
