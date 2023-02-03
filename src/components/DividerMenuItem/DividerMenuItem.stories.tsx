import React from "react";
import Box from "../Box/Box";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DividerMenuItemProps } from "./DividerMenuItem.types";
import DividerMenuItem from "./DividerMenuItem";

export default {
  title: "Components/DividerMenuItem",
  component: DividerMenuItem,
  parameters: {
    docs: {
      description: {
        component:
          "Descriptive menu item is a type of menu item to be used when the required item needs Text, description, avatar, icon or bulk actions.",
      },
    },
  },
  argTypes: {
    size: {
      options: ["large", "small"],
      control: {
        defaultValue: "large",
        type: "radio",
      },
      description:
        "The size attribute passed to the menu component defines the height of each and every menu item.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    width: {
      control: {
        type: "text",
      },
      description: "Pass width to set the width of the menu ",
      table: {
        defaultValue: { summary: "" },
      },
    },
    value: {
      description:
        "The value of the menu item component to be used for onChange",
    },
  },
} as ComponentMeta<typeof DividerMenuItem>;

const Template: ComponentStory<typeof DividerMenuItem> = ({
  ...args
}: DividerMenuItemProps) => {
  return (
    <Box className="navi-menu-container">
      <DividerMenuItem {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: "large",
  value: "divider_1",
};
