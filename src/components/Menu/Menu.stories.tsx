import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Button from "../Button/Button";
import Menu from "./Menu";

export default {
  title: `Components/Menu`,
  component: Menu,
  argTypes: {
  },
} as ComponentMeta<typeof Menu>;



export const Default: ComponentStory<typeof Menu> = ({ ...args }) => (
  <div>
    <Menu {...args} open data={[
      { title: "Oliver Hansen" },
      { title: "Van Henry" },
      { title: "April Tucker" },
      { title: "Ralph Hubbard" },
      { title: "Omar Alexander" },
      { title: "Carlos Abbott" },
    ]}></Menu>

  </div>
);
