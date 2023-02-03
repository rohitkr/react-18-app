import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Divider from "./Divider";
import Box from "../Box/Box";

export default {
  title: `Components/Divider`,
  component: Divider,
  argTypes: {
    orientation: {
      defaultValue: "horizontal",
      options: ["horizontal", "vertical"],
      control: { type: "inline-radio" },
    },
    weight: {
      defaultValue: "1",
      options: ["1", "2"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "light",
      control: "text",
    },
    opacity: {
      defaultValue: "1",
      control: { type: "number" },
    },
    height: {
      defaultValue: "inherit",
      control: { type: "text" },
    },
    width: {
      defaultValue: "inherit",
      control: { type: "text" },
    },
    padding: {
      control: { type: "text" },
    },
    paddingLeft: {
      control: { type: "text" },
    },
    paddingRight: {
      control: { type: "text" },
    },
    paddingTop: {
      control: { type: "text" },
    },
    paddingBottom: {
      control: { type: "text" },
    },
  },
  args: {},
} as ComponentMeta<typeof Divider>;

const TemplateInput: ComponentStory<typeof Divider> = (args: any) => {
  return (
    <Box height="20px">
      <Divider {...args} />
    </Box>
  );
};

export const Default = TemplateInput.bind({});
Default.args = {
  orientation: "horizontal",
};
