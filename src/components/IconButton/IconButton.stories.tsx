import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "./IconButton";
// import { PhotoAdd } from 'tab'

const size = 'large';
const variant = 'primary';

const PhotoAdd = () => <div>x</div> 

export default {
  title: `Components/IconButton`,
  component: IconButton,
  argTypes: {
    rounded: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    title: {
      defaultValue: "Icon button tooltip",
      control: 'text',
    },
    tooltipPosition: {
      defaultValue: 'right',
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top"
      ],
      control: { type: 'inline-radio' },
    },
    intent: {
      defaultValue: 'primary',
      options: ['prime', 'muted', 'info', 'critical', 'warning', 'success'],
      control: {
        defaultValue: 'primary',
        type: 'radio',
      },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'large',
      options: ['small', 'large'],
      control: { type: 'inline-radio' },
    }
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = ({ ...args }) => {
  return <IconButton {...args}><PhotoAdd /></IconButton>
};

export const Default = Template.bind({});
Default.args = {
  intent: "muted",
  variant,
  size
};
