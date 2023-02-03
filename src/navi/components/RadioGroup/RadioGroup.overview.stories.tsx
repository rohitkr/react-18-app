import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NaviRadioGroup from "./RadioGroup";

import "./RadioGroupOverview.scss";

export default {
  title: `Components/RadioGroup`,
  component: NaviRadioGroup,
} as ComponentMeta<typeof NaviRadioGroup>;

const Template: ComponentStory<typeof NaviRadioGroup> = ({ ...args }) => {
  return (
    <div>
      <h2>Size</h2>
      <div className="block">
        <h4>Standard</h4>
        <NaviRadioGroup {...args}></NaviRadioGroup>
      </div>
      <div className="block">
        <h4>Small</h4>
        <NaviRadioGroup size="small" {...args}></NaviRadioGroup>
      </div>

      <h2>Orientation</h2>
      <div className="block">
        <h4>Vertical</h4>
        <NaviRadioGroup {...args}></NaviRadioGroup>
      </div>
      <div className="block">
        <h4>Horizontal</h4>
        <NaviRadioGroup orientation="horizontal" {...args}></NaviRadioGroup>
      </div>

      <h2>Label Placement</h2>
      <div className="block">
        <h4>End</h4>
        <NaviRadioGroup {...args}></NaviRadioGroup>
      </div>
      <div className="block">
        <h4>Start</h4>
        <NaviRadioGroup labelPlacement="start" {...args}></NaviRadioGroup>
      </div>
    </div>
  );
};

export const Overview = Template.bind({});
Overview.args = {
  options: [
    {
      label: "Radio 1",
      value: "Radio1",
    },
    {
      label: "Radio 2",
      value: "Radio2",
    },
    {
      label: "Radio 3",
      value: "Radio3",
    },
  ],
};
