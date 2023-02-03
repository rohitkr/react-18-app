import React, { ChangeEvent, FormEventHandler } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "../Box/Box";
import Tabs from "./Tabs";
import Tab from "../Tab/Tab";
import TabPanel from "../TabPanel/TabPanel";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default {
  title: `Components/Tabs`,
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [position, setPosition] = React.useState("top");
  const [showArrow, setShowArrow] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState("c");
  const code = `
  // sample code
  const handleChange = (e, v) => {
    setSelectedValue(v);
  };
  <Tabs onChange={handleChange} value={selectedValue}>
    <Tab labeltext="Tab 1" value={"a"} selectedValue={selectedValue} />
    <Tab labeltext="Tab 2" value={"b"} selectedValue={selectedValue} />
    <Tab labeltext="Tab 3" value={"c"} selectedValue={selectedValue} />
  </Tabs>
  <TabPanel selectedValue={selectedValue} index={"a"}>
    A
  </TabPanel>
  <TabPanel selectedValue={selectedValue} index={"b"}>
    B
  </TabPanel>
  <TabPanel selectedValue={selectedValue} index={"c"}>
    C
  </TabPanel>
  `;
  const handleChange = (e, v) => {
    setSelectedValue(v);
  };
  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi tabs component</p>
      <Tabs onChange={handleChange} value={selectedValue}>
        <Tab labeltext="Tab 1" value={"a"} selectedValue={selectedValue} />
        <Tab labeltext="Tab 2" value={"b"} selectedValue={selectedValue} />
        <Tab labeltext="Tab 3" value={"c"} selectedValue={selectedValue} />
      </Tabs>
      <TabPanel
        selectedValue={selectedValue}
        index={"a"}
        height="200px"
        width="200px"
      >
        <Box bgColor="crimson">A</Box>
      </TabPanel>
      <TabPanel
        selectedValue={selectedValue}
        index={"b"}
        height="200px"
        width="200px"
      >
        <Box bgColor="pink">B</Box>
      </TabPanel>
      <TabPanel
        selectedValue={selectedValue}
        index={"c"}
        height="400px"
        width="400px"
      >
        <Box bgColor="yellow">C</Box>
      </TabPanel>

      <div>
        <p>Click on the button above to see the tabs code.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const Overview = Template.bind({});
