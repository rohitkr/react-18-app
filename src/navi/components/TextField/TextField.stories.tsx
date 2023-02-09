import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./TextField";

export default {
  title: `Components/Input`,
  component: Input,
  argTypes: {
    size: {
      defaultValue: "large",
      options: ["large", "small"],
      control: { type: "inline-radio" },
    },
    inputType: {
      defaultValue: "default",
      options: ["default", "disabled", "success", "critical", "read-only"],
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "text",
      options: ["text", "password"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "Sample label",
      control: "text",
    },
    helperText: {
      defaultValue: "Helper text",
      control: "text",
    },
    successMessage: {
      defaultValue: "Success message",
      control: "text",
    },
    errorMessage: {
      defaultValue: "Error message",
      control: "text",
    },
    moreInfo: {
      defaultValue: "More information text",
      control: "text",
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    tooltipPlacement: {
      defaultValue: "top",
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
      control: { type: "inline-radio" },
    },
    required: {
      defaultValue: false,
      options: [true, false],
      control: { type: "inline-radio" },
    },
    maxCharacters: {
      defaultValue: 100,
      control: "number",
    },
    minWidth: {
      defaultValue: 280,
      control: "number",
    },
  },
  args: {},
} as ComponentMeta<typeof Input>;

const TemplateInput: ComponentStory<typeof Input> = (args: any) => {
  return <Input {...args} />;
};

export const Default = TemplateInput.bind({});
Default.args = {
  required: true,
  type: "default",
  size: "large",
  label: "Sample label",
};
