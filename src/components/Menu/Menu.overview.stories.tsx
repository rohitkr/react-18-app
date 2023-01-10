import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button/Button";
import { Button as MuiButton } from "@material-ui/core";
import Menu from "./Menu";
import Box from "../Box/Box";
import Input from "../Input/Input";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MenuItem from "../MenuItem/MenuItem";
import { MoodHappy, Pencil } from "tabler-icons-react";
import DescriptiveMenuItem from "../MenuItem/DescriptiveMenuItem";
import GroupHeadingMenuItem from "../MenuItem/GroupHeadingMenuItem";
import EmptyStateMenuItem from "../MenuItem/EmptyStateMenuItem";
import DividerMenuItem from "../MenuItem/DividerMenuItem";

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
  const anchorRef = React.useRef<HTMLButtonElement>(null);
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

  const onMenuChange = (selectedValues: Array<string | number>) => {};

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
        <button
          ref={anchorRef}
          onClick={onButtonClick}
          // style={{ height: "44px", backgroundColor: "blue" }}
        >
          Hello world
        </button>
        {/* </Box> */}
        <Input onClick={onButtonClick} />
        <Menu
          open={open}
          onMenuChange={onMenuChange}
          handleClose={onMenuClose}
          height="200px"
          menuPlacement="left"
          anchorEl={anchorRef.current}
          size="small"
        >
          <DescriptiveMenuItem
            value="descriptive_item_1"
            avatar="A"
            title="Sample menu item"
            description="With description"
            trailingIcon={<Pencil />}
          />
          <GroupHeadingMenuItem value="group_heading" title="Group heading" />
          <DividerMenuItem />
          <MenuItem value="divider" title="Text only" />
          <EmptyStateMenuItem
            value="empty_card"
            title="No results found"
            trailingIcon={<Pencil />}
            leadingIcon={<Pencil />}
          />
          <DescriptiveMenuItem value="text_only" title="Text only" />
          <DescriptiveMenuItem
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
