import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Button from "../Button/Button";
import Box from "./Box";

export default {
  title: `Components/Box`,
  component: Box,
  argTypes: {
    padding: {
      defaultValue: 0,
      control: "number",
    },
    margin: {
      defaultValue: 0,
      control: "number",
    },
  },
} as ComponentMeta<typeof Box>;

export const Default: ComponentStory<typeof Box> = ({ ...args }) => (
  <Box {...args}>
    <Button>This is a button inside box</Button>
  </Box>
);
