import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DividerMenuItem from "./DividerMenuItem";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Box from "../Box/Box";

export default {
  title: `Components/DividerMenuItem`,
  component: DividerMenuItem,
  argTypes: {},
} as ComponentMeta<typeof DividerMenuItem>;

const Template: ComponentStory<typeof DividerMenuItem> = (args) => {
  const [code, setCode] = React.useState(`// sample code`);
  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Divider Menu Item component</p>
      <h3>Divider menu item properties: Size & value</h3>
      <p>Divider menu item - large.</p>
      <Box
        className="navi-menu-container"
        onClick={() => {
          setCode(`//Sample code
          <DividerMenuItem value="divider_1" size="large" />`);
        }}
      >
        <DividerMenuItem value="divider_1" size="large" />
      </Box>
      <p>Divider menu item - small.</p>
      <Box
        className="navi-menu-container"
        onClick={() => {
          setCode(`//Sample code
          <DividerMenuItem value="divider_1" size="small" />`);
        }}
      >
        <DividerMenuItem value="divider_2" size="small" />
      </Box>
      <p>Note: Divider menu items do not have a selected and hovered states.</p>
      <p>Click on the button above to see the Link code.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export const Overview = Template.bind({});
