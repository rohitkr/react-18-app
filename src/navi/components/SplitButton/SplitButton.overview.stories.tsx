import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SplitButton from "./SplitButton";
import Box from "../Box/Box";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { InfoCircle, ChevronDown } from "tabler-icons-react";
import DescriptiveMenuItem from "../DescriptiveMenuItem/DescriptiveMenuItem";
import GroupHeadingMenuItem from "../GroupHeadingMenuItem/GroupHeadingMenuItem";
import DividerMenuItem from "../DividerMenuItem/DividerMenuItem";

export default {
  title: `Components/SplitButton`,
  component: SplitButton,
  argTypes: {},
} as ComponentMeta<typeof SplitButton>;

const Template: ComponentStory<typeof SplitButton> = (args) => {
  const [size, setSize] = React.useState("");
  const [type, setType] = React.useState("");
  const [label, setLabel] = React.useState("Sample label");
  const [intent, setIntent] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [leadingIcon, setLeadingIcon] = React.useState("");
  const [trailingIcon, setTrailingIcon] = React.useState("");

  const sizeValue = size ? `size="${size}"` : "";
  const typeValue = type ? `type="${type}"` : "";
  const labelValue = label ? `label="${label}"` : "";
  const intentValue = intent ? `intent="${intent}"` : "";
  const variantValue = variant ? `variant="${variant}"` : "";
  const leadingIconValue = leadingIcon
    ? `leadingIcon={<${leadingIcon} />}`
    : "";
  const trailingIconValue = trailingIcon
    ? `leadingIcon={<${trailingIcon} />}`
    : "";

  const code = `
    // sample code
    <Badge ${sizeValue} ${typeValue} ${labelValue} ${intentValue} ${variantValue} ${leadingIconValue} ${trailingIconValue}/>
    `;
  return (
    <Box className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Split button component</p>
      <p>Here is a sample split button component.</p>
      <Box style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <SplitButton
          intent="info-soft"
          tooltip="Open menu"
          buttonText="Profile menu profile menu"
          size="small"
          menuItems={[
            <GroupHeadingMenuItem title="Group heading 1" />,
            <DescriptiveMenuItem title="Descriptive menu item 1" value="d_m_1" />,
            <DescriptiveMenuItem title="Descriptive menu item 2" value="d_m_2" />,
            <DescriptiveMenuItem title="Descriptive menu item 3" value="d_m_3" />,
            <DescriptiveMenuItem title="Descriptive menu item 4" value="d_m_4" />,
            <DividerMenuItem />,
          ]}
          onChange={(selectedMenu) => {
            console.log(selectedMenu);
          }}
          menuProps={{
            multiSelect: true,
            useSelectAll: true,
            hideOnSelect: false
          }}
        />
        {/* <SplitButton
          intent="info-bold"
          buttonIcon={<ChevronDown />}
          tooltip="Open menu"
          buttonText="Split button"
          menu={[
            { label: "Menu item 1", value: "menu1" },
            { label: "Menu item 2", value: "menu2" },
            { label: "Menu item 1", value: "menu1", icon: <InfoCircle /> },
          ]}
        /> */}
        {/* <SplitButton
          intent="muted-light"
          buttonIcon={<ChevronDown />}
          tooltip="Open menu"
          buttonText="Split button"
          menu={[
            { label: "Menu item 1", value: "menu1" },
            { label: "Menu item 2", value: "menu2" },
            { label: "Menu item 1", value: "menu1", icon: <InfoCircle /> },
          ]}
        /> */}
        <SplitButton
          intent="muted-bold"
          buttonIcon={<ChevronDown />}
          tooltip="Open menu"
          buttonText="Split button"
          menuItems={[
            <GroupHeadingMenuItem title="Group heading 1" />,
            <DescriptiveMenuItem title="Descriptive menu item" value="d_m_1" />,
            <DividerMenuItem />,
          ]}
          menuProps={{ width: "400px", menuPlacement: "right", hideOnSelect: true }}
        />
        {/* <SplitButton
          intent="prime"
          buttonIcon={<ChevronDown />}
          tooltip="Open menu"
          buttonText="Split button"
          menu={[
            { label: "Menu item 1", value: "menu1" },
            { label: "Menu item 2", value: "menu2" },
            { label: "Menu item 1", value: "menu1", icon: <InfoCircle /> },
          ]}
        />
        <h2>Size -small</h2>
        <SplitButton
          intent="info-soft"
          size="small"
          buttonIcon={<ChevronDown />}
          tooltip="Open menu"
          buttonText="Split button"
          menu={[
            { label: "Menu item 1", value: "menu1" },
            { label: "Menu item 2", value: "menu2" },
            { label: "Menu item 1", value: "menu1", icon: <InfoCircle /> },
          ]}
        />
        <SplitButton
          intent="info-bold"
          size="small"
          buttonIcon={<ChevronDown />}
          tooltip="Open menu"
          buttonText="Split button"
          menu={[
            { label: "Menu item 1", value: "menu1" },
            { label: "Menu item 2", value: "menu2" },
            { label: "Menu item 1", value: "menu1", icon: <InfoCircle /> },
          ]}
        />
        <SplitButton
          intent="muted-light"
          size="small"
          buttonIcon={<ChevronDown />}
          tooltip="Open menu"
          buttonText="Split button"
          menu={[
            { label: "Menu item 1", value: "menu1" },
            { label: "Menu item 2", value: "menu2" },
            { label: "Menu item 1", value: "menu1", icon: <InfoCircle /> },
          ]}
        />
        <SplitButton
          intent="muted-bold"
          size="small"
          buttonIcon={<ChevronDown />}
          tooltip="Open menu"
          buttonText="Split button"
          menu={[
            { label: "Menu item 1", value: "menu1" },
            { label: "Menu item 2", value: "menu2" },
            { label: "Menu item 1", value: "menu1", icon: <InfoCircle /> },
          ]}
        />
        <SplitButton
          intent="prime"
          size="small"
          buttonIcon={<ChevronDown />}
          tooltip="Open menu"
          buttonText="Split button"
          menu={[
            { label: "Menu item 1", value: "menu1" },
            { label: "Menu item 2", value: "menu2" },
            { label: "Menu item 1", value: "menu1", icon: <InfoCircle /> },
          ]}
        /> */}
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
