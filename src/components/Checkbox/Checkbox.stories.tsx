import React from "react";
import { ComponentStory } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      defaultValue: "standard",
      options: ["small", "standard"],
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    indeterminate: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    justify: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

const Template: ComponentStory<typeof Checkbox> = ({ ...args }) => {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox",
};
