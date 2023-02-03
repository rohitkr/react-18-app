import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NaviRadioGroup from "./RadioGroup";

export default {
  title: `Components/RadioGroup`,
  component: NaviRadioGroup,
  argTypes: {
    size: {
      options: ["small", "standard"],
      control: { type: "inline-radio" },
    },
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "inline-radio" },
    },
    labelPlacement: {
      options: ["start", "end"],
      control: { type: "inline-radio" },
    },
    justify: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof NaviRadioGroup>;

const Template: ComponentStory<typeof NaviRadioGroup> = ({ ...args }) => {
  return <NaviRadioGroup {...args}></NaviRadioGroup>;
};

export const Default = Template.bind({});
Default.args = {
  size: "standard",
  options: [
    {
      label: "Radio 1",
      value: "Radio1",
    },
    {
      label: "Radio 2",
      value: "Radio2",
    },
    {
      label: "Radio 3",
      value: "Radio3",
    },
  ],
};
