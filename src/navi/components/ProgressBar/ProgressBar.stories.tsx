
import React from "react";
import ProgressBar from "./ProgressBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/ProgressBar",
  argTypes: {
    intent: {
      defaultValue: 'info',
      options: ['info', 'critical', 'warning', 'success'],
      control: {
        defaultValue: 'primary',
        type: 'radio',
      },
    },
    labelPosition: {
      defaultValue: 'top',
      options: ['top', 'bottom'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'large',
      options: ['small', 'large'],
      control: { type: 'inline-radio' },
    },
    type: {
      defaultValue: 'solid',
      options: ['solid', 'step'],
      control: { type: 'inline-radio' },
    },
    progressType: {
      defaultValue: 'completion',
      options: ["completion", "loading"],
      control: { type: 'inline-radio' },
    },
    value: {
      defaultValue: 5,
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 1
      }
    },
    maxValue: {
      defaultValue: 100,
      control: {
        type: 'number',
      }
    },
    label: {
      control: 'text',
    },
    percentageLabel: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    stepLabel: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    stepCount: {
      defaultValue: 8,
      control: {
        type: 'number',
        min: 2,
        max: 10,
        step: 1
      }
    },
  }
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = ({ ...args }) => {
  return <ProgressBar {...args} />
};

export const Default = Template.bind({});
Default.args = {
  intent: 'info',
};
