import React from "react";
import TextArea from "./TextArea";
import { CustomTextAreaEvent } from "./TextArea.types";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/TextArea",
  component: TextArea,
  argTypes: {
    type: {
      defaultValue: "default",
      options: ["default", "disabled", "success", "critical", "read-only"],
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
    placeholder: {
      defaultValue: "More information text",
      control: "text",
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
      defaultValue: 50,
      control: "number",
    },
  },
  args: {},
} as ComponentMeta<typeof TextArea>;

const TemplateTextArea: ComponentStory<typeof TextArea> = (args: any) => {
  return <TextArea {...args} />;
};

export const Default = TemplateTextArea.bind({});

Default.args = {
  required: true,
  type: "default",
  label: "Sample label",
};
