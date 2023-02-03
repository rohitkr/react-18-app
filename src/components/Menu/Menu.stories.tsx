import React from "react";
import Menu from "./Menu";
import Box from "../Box/Box";
import DescriptiveMenuItem from "../DescriptiveMenuItem/DescriptiveMenuItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button/Button";
import Link from "../Link/Link";

export default {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          "The menu component is a popup with a list of items to ineract with. Menu component can be attached to any other navi component using anchor element.",
      },
    },
  },
  argTypes: {
    size: {
      options: ["large", "small"],
      control: {
        defaultValue: "large",
        type: "radio",
      },
      description:
        "The size attribute passed to the menu component defines the height of each and every menu item.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    open: {
      defaultValue: "false",
      control: {
        defaultValue: "false",
        type: "boolean",
      },
      description:
        'The option prop passed to the Menu defines the open or closed state of the Menu. Menu is visiblen when "open" is set to "true"',
      table: {
        defaultValue: { summary: "" },
      },
    },
    multiSelect: {
      defaultValue: "false",
      control: {
        defaultValue: "false",
        type: "boolean",
      },
      description:
        "Multiselect allows the Menu to be used as a multiselect menu.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    width: {
      control: {
        type: "text",
      },
      description: "Pass width to set the width of the menu ",
      table: {
        defaultValue: { summary: "" },
      },
    },
    height: {
      control: {
        type: "text",
      },
      description: "Pass width to set the height of the menu ",
      table: {
        defaultValue: { summary: "" },
      },
    },
    menuPlacement: {
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
      control: {
        defaultValue: "bottom",
        type: "radio",
      },
      description:
        "Menu placement could be used to define the Menu placement with respect to anchor element.",
    },
    selectedValue: {
      description:
        "An array of string | numbers containing values of Menu Items which are selected",
    },
    showSelectedValue: {
      defaultValue: "false",
      control: {
        defaultValue: "false",
        type: "boolean",
      },
      description:
        "When true is passed, Menu displays the last selected value when opened again after closing. ",
    },
    onMenuChange: {
      description: "Callback fired when the selected menu item is changed.",
    },
    handleClose: {
      description:
        'Callback fired when the component requests to be closed. Usually a function setting the value of "open" prop passed to the Menu to false.',
    },
    anchorEl: {
      description:
        "A ref or target of the element to which you wish to attach the menu.",
    },
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = ({ ...args }) => {
  const anchorRef = React.useRef<HTMLLinkElement>(null);
  const [anchorElement, setAnchorElement] = React.useState(null);
  const onButtonClick = (e) => {
    setAnchorElement(e.currentTarget);
  };

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "8px",
      }}
    >
      <Link ref={anchorRef} onClick={onButtonClick}>
        Menu Link
      </Link>
      <Menu anchorEl={anchorRef.current || anchorElement} {...args}>
        <DescriptiveMenuItem value="1" title="1" />
        <DescriptiveMenuItem value="2" title="2" />
        <DescriptiveMenuItem value="3" title="3" />
        <DescriptiveMenuItem value="4" title="4" />
      </Menu>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  multiSelect: false,
  menuPlacement: "bottom",
};
