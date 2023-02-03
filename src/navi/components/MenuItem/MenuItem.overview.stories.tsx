import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MenuItem from "./MenuItem";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import DescriptiveMenuItem from "../DescriptiveMenuItem/DescriptiveMenuItem";
import Box from "../Box/Box";
import GroupHeadingMenuItem from "../GroupHeadingMenuItem/GroupHeadingMenuItem";
import DividerMenuItem from "../DividerMenuItem/DividerMenuItem";
import EmptyStateMenuItem from "../EmptyStateMenuItem/EmptyStateMenuItem";
import { CaretDown, MoodSad } from "tabler-icons-react";

export default {
  title: `Components/MenuItem`,
  component: MenuItem,
  argTypes: {},
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => {
  const [code, setCode] = React.useState(`// sample code`);
  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Menu Item component</p>
      <p>
        Menu items are the list items that appear when the menu is open. There
        are only specific types of menu item that could be used with the Menu.
      </p>
      <h3>Descriptive menu item</h3>
      <Box
        onClick={() => {
          setCode(`//Sample code
          <DescriptiveMenuItem
            value="descriptive"
            title="Descriptive menu item"
            avatarSrc="A"
            trailingIcon={<CaretDown />}
            size="large"
            />`);
        }}
      >
        <DescriptiveMenuItem
          value="descriptive"
          title="Descriptive menu item"
          avatarSrc="A"
          trailingIcon={<CaretDown />}
          size="large"
        />
      </Box>
      <h3>Group Heading menu item</h3>
      <Box
        onClick={() => {
          setCode(`//Sample code
        <GroupHeadingMenuItem
          title="Group Heading"
          value="group_heading"
          size="large"
        />`);
        }}
      >
        <GroupHeadingMenuItem
          title="Group Heading"
          value="group_heading"
          size="large"
        />
      </Box>
      <h3>Divider menu item </h3>
      <Box
        onClick={() => {
          setCode(`//Sample code
          <DividerMenuItem size="large" />`);
        }}
      >
        <DividerMenuItem size="large" />
      </Box>
      <h3>Empty state menu item</h3>
      <Box
        className="navi-menu-container"
        onClick={() => {
          setCode(`//Sample code
          <EmptyStateMenuItem
          title="No results found"
          leadingIcon={<MoodSad />}
          size="large"
        />`);
        }}
      >
        <EmptyStateMenuItem
          title="No results found"
          leadingIcon={<MoodSad />}
          size="large"
        />
      </Box>
      <p>Click on the button above to see the Link code.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export const Overview = Template.bind({});
