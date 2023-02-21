import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GroupHeadingMenuItem from "./GroupHeadingMenuItem";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Box from "../Box/Box";

export default {
  title: `Components/MenuItem/GroupHeadingMenuItem`,
  component: GroupHeadingMenuItem,
  argTypes: {},
} as ComponentMeta<typeof GroupHeadingMenuItem>;

const Template: ComponentStory<typeof GroupHeadingMenuItem> = (args) => {
  const [code, setCode] = React.useState(`// sample code`);
  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Group heading Menu Item component</p>
      <h3>Group heading menu item properties: Size, title and value</h3>
      <p>Group heading menu item - large.</p>
      <Box
        className="navi-menu-container"
        onClick={() => {
          setCode(`//Sample code
          <GroupHeadingMenuItem value="group_heading_1" size="large" title="Group heading large" />`);
        }}
      >
        <GroupHeadingMenuItem
          value="group_heading_1"
          size="large"
          title="Group heading large"
        />
      </Box>
      <p>Divider menu item - small.</p>
      <Box
        className="navi-menu-container"
        onClick={() => {
          setCode(`//Sample code
          <GroupHeadingMenuItem value="group_heading_2" size="small" title="Group heading small" />`);
        }}
      >
        <GroupHeadingMenuItem
          value="group_heading_2"
          size="small"
          title="Group heading small"
        />
      </Box>
      <p>Note: Group heading menu items do not have a selected and hovered states.</p>
      <p>Click on the button above to see the Link code.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export const Overview = Template.bind({});
