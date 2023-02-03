import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./Link";
import { ExternalLink } from "tabler-icons-react";

const size = "large";
const text = "Link";

export default {
  title: `Components/Link`,
  component: Link,
  argTypes: {
    children: {
      defaultValue: text,
      control: "text",
    },
    href: {
      defaultValue: null,
      control: "text",
    },
    target: {
      defaultValue: "_blank",
      options: ["_blank", null],
      control: { type: "inline-radio" },
    },
    size: {
      defaultValue: "small",
      options: ["xsmall", "small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    leadingIcon: {
      defaultValue: "None",
      options: ["None", "Left"],
      control: { type: "inline-radio" },
      mapping: {
        None: "",
        Left: <ExternalLink />,
      },
    },
    trailingIcon: {
      defaultValue: "None",
      options: ["None", "Right"],
      control: { type: "inline-radio" },
      mapping: {
        None: "",
        Right: <ExternalLink />,
      },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = ({ ...args }) => {
  let text = args.children;
  return <Link {...args}>{text}</Link>;
};

export const Default = Template.bind({});
Default.args = {
  size,
};
