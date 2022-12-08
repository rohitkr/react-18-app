import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
// import Button

const Left = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white" />
</svg>
const Right = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white" />
</svg>
const size = 'large';
const text = 'Button';
const variant = 'primary';

export default {
  title: `Components/Button`,
  component: Button,
  argTypes: {
    children: {
      defaultValue: text,
      control: 'text',
    },
    intent: {
      defaultValue: 'prime',
      options: ['prime', 'muted', 'info', 'critical', 'warning', 'success', 'mutedLight'],
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
    },
    leadingIcon: {
      defaultValue: 'None',
      options: ['None', 'Left'],
      control: { type: 'inline-radio' },
      mapping: {
        None: '',
        Left: <Left></Left>,
      },
    },
    trailingIcon: {
      defaultValue: 'None',
      options: ['None', 'Right'],
      control: { type: 'inline-radio' },
      mapping: {
        None: '',
        Right: <Right></Right>,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({...args}) => {
  let text = args.children;
  return <Button {...args}>{text}</Button>
};

export const Default = Template.bind({});
Default.args = {
  intent: "muted",
  variant,
  size
};
