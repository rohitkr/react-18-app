import React, { ChangeEvent, FormEventHandler } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from "./Tabs";
import Tab from "../Tab/Tab";
import { TabsProps } from "./Tabs.types";
import { Home } from "../../Icons/Icons";

export default {
  title: `Components/Tabs`,
  component: Tabs,
  argTypes: {
    size: {
      defaultValue: "large",
      options: ["large", "small"],
      control: { type: "inline-radio" },
    },
    intent: {
      defaultValue: "info",
      options: ["info", "prime", "mutedLight"],
      control: { type: "inline-radio" },
    },
  },
} as ComponentMeta<typeof Tabs>;
const TemplateTabs: ComponentStory<typeof Tabs> = (args: TabsProps) => {
  const [selectedValue, setSelectedValue] = React.useState("c");

  const handleChange: (event: ChangeEvent<{}>, value: any) => void = (e, v) => {
    setSelectedValue(v);
  };

  return (
    <Tabs {...args} onChange={handleChange} value={selectedValue}>
      <Tab
        labeltext="Tab 1"
        leadingIcon={<Home />}
        value={"a"}
        selectedValue={selectedValue}
      />
      <Tab
        labeltext="Tab 2"
        trailingIcon={<Home />}
        value={"b"}
        selectedValue={selectedValue}
      />
      <Tab
        labeltext="Tab 3"
        leadingIcon={<Home />}
        trailingIcon={<Home />}
        value={"c"}
        selectedValue={selectedValue}
      />
    </Tabs>
  );
};
export const Default = TemplateTabs.bind({});
Default.args = {
  size: "large",
  intent: "info",
};
