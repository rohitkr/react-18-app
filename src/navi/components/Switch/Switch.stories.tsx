import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './Switch';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    size: {
      defaultValue: 'large',
      options: ['small', 'large'],
      control: { type: 'inline-radio' },
    },
    labelPlacement: {
      defaultValue: 'start',
      options: ['start', 'end'],
      control: { type: 'inline-radio' },
    },
    label: {
      defaultValue: "Switch Label",
      control: 'text',
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    checkIcon: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  }
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = ({ ...args }) => {
  return <Switch {...args} onChange={(e) => {
    setTimeout(() => {
      alert(`Checked: ${e.target.checked}`);
    }, 0)
  }}>
  </Switch>
};
