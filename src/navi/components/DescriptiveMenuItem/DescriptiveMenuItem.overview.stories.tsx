import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DescriptiveMenuItem from "./DescriptiveMenuItem";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Box from "../Box/Box";
import { CaretDown, MoodSad } from "tabler-icons-react";

export default {
  title: `Components/MenuItem/DescriptiveMenuItem`,
  component: DescriptiveMenuItem,
  argTypes: {},
} as ComponentMeta<typeof DescriptiveMenuItem>;

const Template: ComponentStory<typeof DescriptiveMenuItem> = (args) => {
  const [size, setSize] = React.useState<string>("small");
  const [leadingIcon, setLeadingIcon] = React.useState<string>("");
  const [trailingIcon, setTrailingIcon] = React.useState<string>("");
  const leadingIconVal = leadingIcon ? `leadingIcon={${leadingIcon}}` : "";
  const trailingIconVal = trailingIcon ? `trailingIcon={${trailingIcon}}` : "";
  const [code, setCode] = React.useState(`// sample code`);
  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Descriptive Menu Item component</p>
      <h3>Descriptive menu item properties:</h3>
      <p>Title, Description, Avatar, Leading Icon, Trailing Icon</p>
      <Box
        className="navi-menu-container"
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
      <p>Descriptive menu item with just title and selectable.</p>
      <Box
        className="navi-menu-container"
        onClick={() => {
          setCode(`//Sample code
          <DescriptiveMenuItem
            value="descriptive"
            title="Descriptive menu item"
            size="large"
            />`);
        }}
      >
        <DescriptiveMenuItem
          value="descriptive"
          title="Descriptive menu item"
          size="large"
          selectable
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
