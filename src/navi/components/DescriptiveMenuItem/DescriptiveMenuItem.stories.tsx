import React from "react";
import Box from "../Box/Box";
import DescriptiveMenuItem from "../DescriptiveMenuItem/DescriptiveMenuItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArrowLeft, ArrowRight } from "tabler-icons-react";
import { DescriptiveMenuItemProps } from "./DescriptiveMenuItem.types";

export default {
  title: "Components/DescriptiveMenuItem",
  component: DescriptiveMenuItem,
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
    description: {
      defaultValue: "Description text",
      control: {
        defaultValue: "Description text",
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
    avatar: {
      defaultValue: "A",
      control: {
        defaultValue: "A",
        type: "text",
      },
    },
    avatarSrc: {
      defaultValue: "",
      control: {
        defaultValue: "",
        type: "text",
      },
    },
    checked: {
      defaultValue: false,
      control: {
        defaultValue: false,
        control: "boolean",
      },
    },
    selectable: {
      defaultValue: false,
      control: {
        defaultValue: false,
        control: "boolean",
      },
    },
    disableHoverStyle: {
      defaultValue: false,
      control: {
        defaultValue: false,
        control: "boolean",
      },
    },
    disableItemClick: {
      defaultValue: false,
      control: {
        defaultValue: false,
        control: "boolean",
      },
    },
    disabled: {
      defaultValue: false,
      control: {
        defaultValue: false,
        control: "boolean",
      },
    },
  },
} as ComponentMeta<typeof DescriptiveMenuItem>;

const Template: ComponentStory<typeof DescriptiveMenuItem> = ({
  ...args
}: DescriptiveMenuItemProps) => {
  return (
    <Box className="navi-menu-container">
      <DescriptiveMenuItem {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  // open: false,
  // multiSelect: false,
  // menuPlacement: "bottom",
  value: "1",
  avatar: "H",
};
