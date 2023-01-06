import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button/Button";
import { Button as MuiButton } from "@material-ui/core";
import Menu from "./Menu";
import Box from "../Box/Box";
import Input from "../Input/Input";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MenuItem from "./MenuItem";
import { MenuItemTypeEnum } from "./Menu.types";
import { MoodHappy } from "tabler-icons-react";

export default {
  title: `Components/Menu`,
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>();
  const [size, setSize] = React.useState<string>("small");
  const [leadingIcon, setLeadingIcon] = React.useState<string>("");
  const [trailingIcon, setTrailingIcon] = React.useState<string>("");
  const leadingIconVal = leadingIcon ? `leadingIcon={${leadingIcon}}` : "";
  const trailingIconVal = trailingIcon ? `trailingIcon={${trailingIcon}}` : "";
  const code = `// sample code     <Link size="${size}" ${leadingIconVal} ${trailingIconVal}>     Link Text     </Link>`;
  const anchorRef = React.useRef<HTMLInputElement>();
  const anchorRef2 = React.useRef();

  const onButtonClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (anchorEl) {
        setAnchorEl(null);
      } else {
        setAnchorEl(e.currentTarget);
      }
      setOpen(!open);
    },
    [open, anchorEl]
  );

  const onMenuClose = React.useCallback(() => {
    setAnchorEl(null);
    setOpen(false);
  }, []);

  const onMenuChange = (obj: any) => {
    console.log(obj);
  };

  return (
    <Box
      className="container"
      style={{
        height: "756px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          padding: "10px",
        }}
      >
        {/* <Box
          id="menu-button"
          onClick={onButtonClick}
          ref={anchorRef2}
          style={{ height: "44px", backgroundColor: "blue" }}
        >
          Hello wold
        </Box> */}
        {/* <Box ref={anchorRef}> */}
        <Button
        // ref={anchorRef}

        // style={{ height: "44px", backgroundColor: "blue" }}
        >
          Hello world
        </Button>
        {/* </Box> */}
        <Input inputRef={anchorRef} onClick={onButtonClick} />
        <Menu
          multiselect
          open={open}
          onChange={onMenuChange}
          handleClose={onMenuClose}
          height="200px"
          menuPlacement="left"
          onClose={() => {
            console.log("anchorRef: ", anchorRef);
          }}
          anchorEl={anchorRef.current}
          size="large"
        >
          <MenuItem
            value="profile"
            avatarText="A"
            title="Sample menu item"
            description="With description"
            selectable
          />
          <MenuItem
            title="My account"
            value="myAcc"
            selectable
            checked
          />
          <MenuItem
            title="My accountttt"
            value="myAcc2"
            selectable
          />
          <MenuItem
            type={MenuItemTypeEnum.GROUP_HEADING}
            value="group_heading"
            title="Group heading"
          />
          <MenuItem
            type={MenuItemTypeEnum.GROUP_HEADING}
            value="group_heading_small"
            title="Group heading small"
          />
          <MenuItem
            type={MenuItemTypeEnum.BULK_ACTION}
            value="bulk_action"
            title="Bulk action"
            disableHoverStyle
            disableItemClick
          />
          <MenuItem
            type={MenuItemTypeEnum.BULK_ACTION}
            value="bulk_action"
            title="Bulk action"
            disableHoverStyle
            disableItemClick
          />
          <MenuItem
            type={MenuItemTypeEnum.DIVIDER}
            value="divider"
            title="Text only"
          />
          <MenuItem type={MenuItemTypeEnum.EMPTY} value="empty_card" />
          <MenuItem
            value="text_only"
            title="Text only"
          />
          <MenuItem
            avatarText="A"
            value="persona_menu_item"
            title="Persona menu item"
            description="Persona Description text"
            checked
          />
          <MenuItem
            value="descriptive_menu-_item"
            title="Descriptive menu item"
            description="Description text"
            leadingIcon={<MoodHappy />}
          />
        </Menu>
      </Box>
      {/* <p>Click on the button above to see the Link code.</p>
<SyntaxHighlighter language="javascript" style={docco}>
{code}
</SyntaxHighlighter> */}
    </Box>
  );
};
export const Overview = Template.bind({});
