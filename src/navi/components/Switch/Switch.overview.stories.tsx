// Button.stories.ts|tsx
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

export const Overview: ComponentStory<typeof Switch> = ({ ...args }) => {
  return <div>
    <div> <Switch label="Switch Label" labelPlacement="start" size="large" /> </div>
    <div> <Switch label="Switch Label" labelPlacement="start" size="small" /> </div>
    <div> <Switch label="Switch Label" labelPlacement="end" size="large" /> </div>
    <div> <Switch label="Switch Label" labelPlacement="end" size="small" /> </div>
    <p>&nbsp;</p>
    <div> <Switch disabled label="Switch Label" labelPlacement="start" size="large" /> </div>
    <div> <Switch disabled label="Switch Label" labelPlacement="start" size="small" /> </div>
    <div> <Switch disabled label="Switch Label" labelPlacement="end" size="large" /> </div>
    <div> <Switch disabled label="Switch Label" labelPlacement="end" size="small" /> </div>
  </div>
};
