import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";
import Button from "../Button/Button";

const text = "Hover over me";

export default {
  title: `Components/Tooltip`,
  component: Tooltip,
  argTypes: {
    size: {
      defaultValue: "relaxed",
      options: ["relaxed", "compact"],
      control: { type: "inline-radio" },
    },
    children: {
      defaultValue: text,
      control: "text",
    },
    title: {
      defaultValue: "This is a tooltip default",
      control: "text",
    },
    maxWidth:{
      defaultValue: 280,
      control: "text"
    },
    position: {
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
        "right-end"
      ],
      control: { type: "inline-radio" },
    },
    showArrow: {
      defaultValue: true,
      options: [true, false],
      control: { type: "inline-radio" },
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = ({ ...args }) => {
  return (
    <Tooltip {...args}>
      <Button>Hover over me</Button>
    </Tooltip>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "This is a tooltip",
  showArrow: true,
  size: "relaxed",
  position: "left",
};
