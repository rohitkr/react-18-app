import React from "react";
import Menu from "../navi/components/Menu/Menu";
import Box from "../navi/components/Box/Box";
import Input from "../navi/components/Input/Input";
import MenuItem from "../navi/components/MenuItem/MenuItem";
import { MoodHappy, Pencil, Movie } from "tabler-icons-react";
import DescriptiveMenuItem from "../navi/components/DescriptiveMenuItem/DescriptiveMenuItem";
import GroupHeadingMenuItem from "../navi/components/GroupHeadingMenuItem/GroupHeadingMenuItem";
import DividerMenuItem from "../navi/components/DividerMenuItem/DividerMenuItem";
import Button from "../navi/components/Button/Button";


export default () => {
  const [open, setMenuOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const onMenuChange = (data: any) => {
    console.log(data)
  }

  const openMenu = React.useCallback(() => {
    setMenuOpen(true);
  }, []);

  const handleMenuClose = React.useCallback(() => {
    setMenuOpen(false);
  }, [])

  return (<Box>
    <Button
      ref={anchorRef}
      onClick={openMenu
      }
    >
      Select Name
    </Button>
    <Menu
      open={open}
      onMenuChange={onMenuChange}
      handleClose={handleMenuClose}
      // menuPlacement="right"
      height="200px"
      anchorEl={anchorRef.current}
      size="small"
      multiSelect
      useSelectAll
    >
      <GroupHeadingMenuItem value="group_heading" title="Group heading" />
      <DescriptiveMenuItem
        value="Sample Menu item - 1"
        title="Sample Menu item - 1"
        // description="Description text"
        selectable
        leadingIcon={<MoodHappy />}
      />
      <DescriptiveMenuItem
        value="Sample Menu item - 2"
        title="Sample Menu item - 2"
        description="Description text"
        leadingIcon={<MoodHappy />}
      />
      <DividerMenuItem />
      <DescriptiveMenuItem
        value="Sample Menu item - 3"
        title="Sample Menu item - 3"
        description="Description text"
        leadingIcon={<MoodHappy />}
      />
      <GroupHeadingMenuItem value="group_heading" title="Group heading" />
      <DescriptiveMenuItem
        value="Sample Menu item - 4"
        title="Sample Menu item - 4"
        description="Description text"
        leadingIcon={<MoodHappy />}
      />
      <DescriptiveMenuItem
        value="Sample Menu item - 5"
        title="Sample Menu item - 5"
        description="Description text"
        leadingIcon={<MoodHappy />}
      />
      <DescriptiveMenuItem
        value="Sample Menu item - 6"
        title="Sample Menu item - 6"
        description="Description text"
        leadingIcon={<MoodHappy />}
      />
      <DescriptiveMenuItem
        value="Sample Menu item - 7"
        title="Sample Menu item - 7"
        description="Description text"
        leadingIcon={<MoodHappy />}
      />
      <DescriptiveMenuItem
        value="Sample Menu item - 8"
        title="Sample Menu item - 8"
        description="Description text"
        leadingIcon={<MoodHappy />}
      />
      <DescriptiveMenuItem
        value="Sample Menu item - 9"
        title="Sample Menu item - 9"
        description="Description text"
        leadingIcon={<MoodHappy />}
      />
    </Menu>
  </Box>)
}