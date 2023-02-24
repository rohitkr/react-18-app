import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmptyStateMenuItem from "./EmptyStateMenuItem";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Box from "../Box/Box";
import { MoodSad2 } from "tabler-icons-react";

export default {
  title: `Components/MenuItem/EmptyStateMenuItem`,
  component: EmptyStateMenuItem,
  argTypes: {},
} as ComponentMeta<typeof EmptyStateMenuItem>;

const Template: ComponentStory<typeof EmptyStateMenuItem> = (args) => {
  const [code, setCode] = React.useState(`// sample code`);
  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Empty state Menu Item component</p>
      <h3>
        Empty state menu item properties: Size, value, leadingIcon, trailingIcon
      </h3>
      <p>Empty state menu item - large.</p>
      <Box
        className="navi-menu-container"
        onClick={() => {
          setCode(`//Sample code
          <EmptyStateMenuItem
          value="empty_1"
          size="large"
          title="No results found"
        />`);
        }}
      >
        <EmptyStateMenuItem
          value="empty_1"
          size="large"
          title="No results found"
          leadingIcon={<MoodSad2 />}
        />
      </Box>
      <p>Divider menu item - small.</p>
      <Box
        className="navi-menu-container"
        onClick={() => {
          setCode(`//Sample code
          <EmptyStateMenuItem
          value="empty_2"
          size="small"
          title="No results found"
        />`);
        }}
      >
        <EmptyStateMenuItem
          value="empty_2"
          size="small"
          title="No results found"
          trailingIcon={<MoodSad2 />}
        />
      </Box>
      <p>Note: Empty state menu items do not have a selected and hovered states.</p>
      <p>Click on the button above to see the Empty state menu item code.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export const Overview = Template.bind({});
