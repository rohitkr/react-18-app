import React from "react";
import Box from "../Box/Box";
import EmptyStateMenuItem from "./EmptyStateMenuItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArrowLeft, ArrowRight } from "tabler-icons-react";
import { EmptyStateMenuItemProps } from "./EmptyStateMenuItem.types";

export default {
  title: "Components/EmptyStateMenuItem",
  component: EmptyStateMenuItem,
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
    title: {
      defaultValue: "1",
      control: {
        defaultValue: "1",
        type: "text",
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
    leadingIcon: {
      defaultValue: "None",
      options: ["None", "Left"],
      control: { type: "inline-radio" },
      mapping: {
        None: "",
        Left: <ArrowLeft />,
      },
    },
    trailingIcon: {
      defaultValue: "None",
      options: ["None", "Right"],
      control: { type: "inline-radio" },
      mapping: {
        None: "",
        Right: <ArrowRight />,
      },
    },
  },
} as ComponentMeta<typeof EmptyStateMenuItem>;

const Template: ComponentStory<typeof EmptyStateMenuItem> = ({
  ...args
}: EmptyStateMenuItemProps) => {
  return (
    <Box className="navi-menu-container">
      <EmptyStateMenuItem {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: "large",
  value: "empty_State",
  title: "Empty state menu item text",
  leadingIcon: <ArrowLeft />,
};
