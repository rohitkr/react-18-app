import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SplitButton from "./SplitButton";
import Box from "../Box/Box";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown } from "tabler-icons-react";

export default {
  title: `Components/SplitButton`,
  component: SplitButton,
  argTypes: {},
} as ComponentMeta<typeof SplitButton>;

const Template: ComponentStory<typeof SplitButton> = (args) => {
  const [code, setCode] = React.useState(`// sample code`);
  return (
    <Box className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Split button component</p>
      <p>
        Split button is composite component with a text and an Icon button
        combined together with an attached menu. On click of the split button, a
        menu opens with a list of menu items to choose from.
      </p>
      <p>Here is a sample split button component.</p>
      <h3>Size - Small</h3>
      <Box style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <Box
          onClick={() => {
            setCode(`//SampleCode
            <SplitButton
            intent="info-soft"
            tooltip="Open menu"
            buttonText="Profile menu profile menu"
            size="small"
            menuItems={[
              {
                type: "group_heading",
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: "divider", value: "divider_m_i" },
            ]}
            onChange={(selectedMenu) => {
              console.log(selectedMenu);
            }}
            menuProps={{
              hideOnSelect: false,
            }}
          />`);
          }}
        >
          <SplitButton
            intent="info-soft"
            tooltip="Open menu"
            buttonText="Profile menu profile menu"
            size="small"
            menuItems={[
              {
                type: "group_heading",
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: "divider", value: "divider_m_i" },
            ]}
            onChange={(selectedMenu) => {
              console.log(selectedMenu);
            }}
            menuProps={{
              hideOnSelect: false,
            }}
          />
        </Box>
        <h3>Size - Large</h3>
        <Box
          onClick={() => {
            setCode(`//SampleCode
            <SplitButton
            intent="muted-bold"
            buttonIcon={<ChevronDown />}
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: 'group_heading',
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type:'descriptive',
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: 'divider, value: "divider_m_i" },
            ]}
            menuProps={{
              hideOnSelect: false,
              showSelectedValue: true,
            }}
          />
            `);
          }}
        >
          <SplitButton
            intent="muted-bold"
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: "group_heading",
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: "divider", value: "divider_m_i" },
            ]}
            menuProps={{
              hideOnSelect: false,
              showSelectedValue: true,
            }}
          />
        </Box>
      </Box>
      <h3>Intents</h3>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          onClick={() => {
            setCode(`//SampleCode
            <SplitButton
            intent="muted-light"
            buttonIcon={<ChevronDown />}
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: 'group_heading,
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: 'divider', value: "divider_m_i" },
            ]}
            menuProps={{
              hideOnSelect: true,
            }}
          />
            `);
          }}
        >
          <p>Muted Light</p>
          <SplitButton
            intent="muted-light"
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: "group_heading",
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: "divider", value: "divider_m_i" },
            ]}
            menuProps={{
              hideOnSelect: true,
            }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          onClick={() => {
            setCode(`//SampleCode
            <SplitButton
            intent="muted-bold"
            buttonIcon={<ChevronDown />}
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: 'group_heading',
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: 'divider', value: "divider_m_i" },
            ]}
            menuProps={{
              hideOnSelect: true,
            }}
          />
            `);
          }}
        >
          <p>muted-bold</p>
          <SplitButton
            intent="muted-bold"
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: "group_heading",
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: "divider", value: "divider_m_i" },
            ]}
            menuProps={{
              hideOnSelect: true,
            }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          onClick={() => {
            setCode(`//SampleCode
            <SplitButton
            intent="info-bold"
            buttonIcon={<ChevronDown />}
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: 'group_heading,
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type:'descriptive',
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: 'descriptive'
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type:divider, value: "divider_m_i" },
            ]}
            menuProps={{
              width: "400px",
              hideOnSelect: true,
            }}
          />
            `);
          }}
        >
          <p>info-bold</p>
          <SplitButton
            intent="info-bold"
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: "group_heading",
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: "divider", value: "divider_m_i" },
            ]}
            menuProps={{
              width: "400px",
              hideOnSelect: true,
            }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          onClick={() => {
            setCode(`//SampleCode
            <SplitButton
            intent="info-soft"
            buttonIcon={<ChevronDown />}
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: 'group_heading,
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: 'divider', value: "divider_m_i" },
            ]}
            menuProps={{
              width: "400px",
              hideOnSelect: true,
            }}
          />
            `);
          }}
        >
          <p>info-soft</p>
          <SplitButton
            intent="info-soft"
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: "group_heading",
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: "divider", value: "divider_m_i" },
            ]}
            menuProps={{
              width: "400px",
              hideOnSelect: true,
            }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          onClick={() => {
            setCode(`//SampleCode
            <SplitButton
            intent="prime"
            buttonIcon={<ChevronDown />}
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: 'group_heading,
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: 'descriptive',
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: 'divider', value: "divider_m_i" },
            ]}
            menuProps={{
              width: "400px",
              hideOnSelect: true,
            }}
          />
            `);
          }}
        >
          <p>prime</p>
          <SplitButton
            intent="prime"
            tooltip="Open menu"
            buttonText="Split button"
            menuItems={[
              {
                type: "group_heading",
                title: "Group Heading 1",
                value: "group_heading_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 1",
                value: "d_m_1",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 2",
                value: "d_m_2",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 3",
                value: "d_m_3",
              },
              {
                type: "descriptive",
                title: "Descriptive menu item 4",
                value: "d_m_4",
              },
              { type: "divider", value: "divider_m_i" },
            ]}
            menuProps={{
              width: "400px",
              hideOnSelect: true,
            }}
          />
        </Box>
      </Box>
      <Box>
        <p>Click on the Element above to see the box code.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

export const Overview = Template.bind({});
