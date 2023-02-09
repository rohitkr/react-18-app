import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SplitButton from "./SplitButton";

export default {
  title: `Components/SplitButton`,
  component: SplitButton,
  argTypes: {
    size: {
      defaultValue: "large",
      options: ["large", "small"],
      control: { type: "inline-radio" },
    },
    intent: {
        defaultValue: 'info-soft',
        options: ['info-soft', 'info-bold' , 'muted-light' , 'muted-bold', 'prime']
    },
    tooltipPosition: {
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
    tooltip: {
      defaultValue: "Sample tooltip",
      control: "text",
    },
    buttonText: {
        defaultValue: "Split button",
      control: "text",
    }
  },
} as ComponentMeta<typeof SplitButton>;

const Template: ComponentStory<typeof SplitButton> = ({ ...args }) => {
  return (
    <SplitButton {...args}/>
  
  );
};

export const Default = Template.bind({});
Default.args = {
  tooltip: "Sample tooltip",
  size: "large",
  buttonText: "Sample text"
};
