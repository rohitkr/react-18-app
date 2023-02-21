import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button/Button";
import Menu from "./Menu";
import Box from "../Box/Box";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Pencil } from "tabler-icons-react";
import DescriptiveMenuItem from "../DescriptiveMenuItem/DescriptiveMenuItem";
import GroupHeadingMenuItem from "../GroupHeadingMenuItem/GroupHeadingMenuItem";
import EmptyStateMenuItem from "../EmptyStateMenuItem/EmptyStateMenuItem";
import Divider from "../Divider/Divider";
import "./Menu.overview.scss";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { CaretDown } from "tabler-icons-react";
import Tag from "../Tag/Tag";

export default {
  title: `Components/Menu`,
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>;

const CodeBlock = (props: any) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<CaretDown />} aria-controls="code-panel">
        <Typography
          style={{
            fontFamily: "Inter",
            fontSize: "14px",
          }}
        >
          Show Code
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box style={{ textAlign: "left" }}>
          <SyntaxHighlighter language="javascript" style={docco}>
            {props.children}
          </SyntaxHighlighter>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

const Template: ComponentStory<typeof Menu> = (args) => {
  const [open, setOpen] = React.useState(false);
  const [linkMenuOpen, setLinkMenuOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const tagAnchorRef = React.useRef<HTMLDivElement>(null);

  const onButtonClick = React.useCallback(
    (e: React.MouseEvent<Element, MouseEvent>) => {
      setOpen(!open);
    },
    []
  );

  const onMenuClose = React.useCallback(() => {
    setOpen(false);
    setLinkMenuOpen(false);
  }, []);

  const onLinkClick = React.useCallback(
    (e: React.MouseEvent<Element, MouseEvent>) => {
      setLinkMenuOpen(!linkMenuOpen);
    },
    []
  );
  const onMenuChange = React.useCallback(
    (selectedValues: Array<string | number>) => {
      console.log(selectedValues);
    },
    []
  );

  return (
    <Box style={{ fontFamily: "Inter" }}>
      <h1>Overview</h1>
      <p>This is the documentation of Navi Menu component</p>
      <p>
        Menu is a list of choices appearing in a popup when the user interacts
        with any component. Menus open over the anchorElement passed to the Menu
        component. However, the position of the menu can be controlled using the
        "menuPlacement" prop.
      </p>
      <Box
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "8px",
        }}
      >
        <Button ref={anchorRef} onClick={onButtonClick}>
          Button with Menu
        </Button>
        <Menu
          open={open}
          onMenuChange={onMenuChange}
          handleClose={onMenuClose}
          menuPlacement="bottom"
          anchorEl={anchorRef.current}
          size="small"
          multiSelect
          useSelectAll
        >
          <DescriptiveMenuItem
            value="descriptive_item_1"
            avatar="A"
            title="Sample menu item 1"
            description="With description"
            trailingIcon={<Pencil />}
            selected={true}
          />
          <DescriptiveMenuItem
            value="text_only"
            title="Text only menu item"
            selected={true}
            disabled
          />
          <DescriptiveMenuItem
            value="descriptive_menu_item_2"
            title="Descriptive menu item 2"
            description="Description text 2"
          />
          <DescriptiveMenuItem
            value="descriptive_item_3"
            avatar="A"
            title="Sample menu item 3"
            description="With description"
            trailingIcon={<Pencil />}
          />
          <DescriptiveMenuItem
            value="text_only_2"
            title="Text only menu item 2"
          />
          <DescriptiveMenuItem
            value="descriptive_menu-_item_4"
            title="Descriptive menu item 4"
            description="Description text 4"
          />
          <EmptyStateMenuItem
            value="empty_card"
            title="No results found"
            trailingIcon={<Pencil />}
            leadingIcon={<Pencil />}
          />
          <DescriptiveMenuItem
            value="descridsptive_item_1"
            avatar="A"
            title="Sample menu item 1"
            description="With description"
            trailingIcon={<Pencil />}
            selected={true}
          />
          <DescriptiveMenuItem
            value="textdsfg_only"
            title="Text only menu item"
            selected={true}
            disabled
          />
          <DescriptiveMenuItem
            value="descrfdgiptive_menu_item_2"
            title="Descriptive menu item 2"
            description="Description text 2"
          />
          <DescriptiveMenuItem
            value="descrfghiptive_item_3"
            avatar="A"
            title="Sample menu item 3"
            description="With description"
            trailingIcon={<Pencil />}
          />
          <DescriptiveMenuItem
            value="text_hjhfonly_2"
            title="Text only menu item 2"
          />
          <DescriptiveMenuItem
            value="descrihgjptive_menu-_item_4"
            title="Descriptive menu item 4"
            description="Description text 4"
          />
          <EmptyStateMenuItem
            value="empvcbcvty_card"
            title="No results found"
            trailingIcon={<Pencil />}
            leadingIcon={<Pencil />}
          />
          <DescriptiveMenuItem
            value="descrvcbsdiptive_item_1"
            avatar="A"
            title="Sample menu item 1"
            description="With description"
            trailingIcon={<Pencil />}
            selected={true}
          />
          <DescriptiveMenuItem
            value="texcvbxt_only"
            title="Text only menu item"
            selected={true}
            disabled
          />
          <DescriptiveMenuItem
            value="descripsdfctive_menu_item_2"
            title="Descriptive menu item 2"
            description="Description text 2"
          />
          <DescriptiveMenuItem
            value="descrcsdfiptive_item_3"
            avatar="A"
            title="Sample menu item 3"
            description="With description"
            trailingIcon={<Pencil />}
          />
          <DescriptiveMenuItem
            value="tevdsfxt_only_2"
            title="Text only menu item 2"
          />
          <DescriptiveMenuItem
            value="descriptivesdfs_menu-_item_4"
            title="Descriptive menu item 4"
            description="Description text 4"
          />
          <EmptyStateMenuItem
            value="empsdfsdty_card"
            title="No results found"
            trailingIcon={<Pencil />}
            leadingIcon={<Pencil />}
          />

          <GroupHeadingMenuItem value="gfsroup_heading_1" title="Group heading" />
        </Menu>
      </Box>
      <CodeBlock>
        {`import React from 'react';
       import { Tag, Menu, DescriptiveMenuItem } from 'navi-design-system';

       const MenuExample = (props) => {
        const [open, setOpen] = React.useState(false);
        const anchorRef = React.useRef<HTMLDivElement>(null);

        const onButtonClick = React.useCallback(
          (e: React.MouseEvent<Element, MouseEvent>) => {
            setOpen(!open);
          },
          [open]
        );

        const onMenuClose = React.useCallback(() => {
          setAnchorEl(null);
          setOpen(false);
        }, []);

        return (
          <Box>
          <Button ref={anchorRef} onClick={onButtonClick}>
            Button with Menu
          </Button>
          <Menu
            open={open}
            onMenuChange={onMenuChange}
            handleClose={onMenuClose}
            menuPlacement="bottom"
            anchorEl={anchorRef.current}
            size="small"
            multiSelect
            useSelectAll >
          <DescriptiveMenuItem
            value="descriptive_item_1"
            avatar="A"
            title="Sample menu item 1"
            description="With description"
            trailingIcon={<Pencil />}
          />
          <DescriptiveMenuItem value="text_only" title="Text only menu item" />
          <DescriptiveMenuItem
            value="descriptive_menu_item_2"
            title="Descriptive menu item 2"
            description="Description text 2"
          />
          <DescriptiveMenuItem
            value="descriptive_item_3"
            avatar="A"
            title="Sample menu item 3"
            description="With description"
            trailingIcon={<Pencil />}
          />
          <DescriptiveMenuItem
            value="text_only_2"
            title="Text only menu item 2"
          />
          <DescriptiveMenuItem
            value="descriptive_menu-_item_4"
            title="Descriptive menu item 4"
            description="Description text 4"
          />
          <EmptyStateMenuItem
            value="empty_card"
            title="No results found"
            trailingIcon={<Pencil />}
            leadingIcon={<Pencil />}
          />
          <GroupHeadingMenuItem value="group_heading_1" title="Group heading" />
        </Menu>
        </Box>
        )
      }
      `}
      </CodeBlock>
      <Divider orientation="horizontal" />
      <h3>Link with Menu</h3>
      <p>Here is anotehr example of using the menu with Link component.</p>
      <Box
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "8px",
        }}
      >
        <Tag ref={tagAnchorRef} onClick={onLinkClick} label="Tag Menu" />
        <Menu
          open={linkMenuOpen}
          onMenuChange={onMenuChange}
          handleClose={onMenuClose}
          menuPlacement="bottom"
          anchorEl={tagAnchorRef.current}
          height="300px"
          size="large"
          multiSelect
          useSelectAll
        >
          <DescriptiveMenuItem
            value="descriptive_item_1"
            avatar="A"
            title="Sample menu item 1"
            description="With description"
            trailingIcon={<Pencil />}
          />
          <DescriptiveMenuItem value="text_only" title="Text only menu item" />
          <DescriptiveMenuItem
            value="descriptive_menu_item_2"
            title="Descriptive menu item 2"
            description="Description text 2"
          />
          <DescriptiveMenuItem
            value="descriptive_item_3"
            avatar="A"
            title="Sample menu item 3"
            description="With description"
            trailingIcon={<Pencil />}
          />
          <DescriptiveMenuItem
            value="text_only_2"
            title="Text only menu item 2"
          />
          <DescriptiveMenuItem
            value="descriptive_menu-_item_4"
            title="Descriptive menu item 4"
            description="Description text 4"
          />
          <EmptyStateMenuItem
            value="empty_card"
            title="No results found"
            trailingIcon={<Pencil />}
            leadingIcon={<Pencil />}
          />
          <GroupHeadingMenuItem value="group_heading_1" title="Group heading" />
        </Menu>
      </Box>
      <CodeBlock>
        {`import React from 'react';
       import { Tag, Menu, DescriptiveMenuItem } from 'navi-design-system';

       const MenuExample = (props) => {
        const [open, setOpen] = React.useState(false);
        const anchorRef = React.useRef<HTMLLinkElement>(null);

        const onLinkClick = React.useCallback(
          (e: React.MouseEvent<Element, MouseEvent>) => {
            setOpen(!open);
          },
          [open]
        );

        const onMenuClose = React.useCallback(() => {
          setAnchorEl(null);
          setOpen(false);
        }, []);

        return (
          <Box>
          <Link ref={anchorRef} onClick={onLinkClick}>
              Menu Link
          </Link>
          <Menu
            open={open}
            onMenuChange={onMenuChange}
            handleClose={onMenuClose}
            menuPlacement="bottom"
            anchorEl={anchorRef.current}
            size="large"
            multiSelect
            useSelectAll >
          <DescriptiveMenuItem
            value="descriptive_item_1"
            avatar="A"
            title="Sample menu item 1"
            description="With description"
            trailingIcon={<Pencil />}
          />
          <DescriptiveMenuItem value="text_only" title="Text only menu item" />
          <DescriptiveMenuItem
            value="descriptive_menu_item_2"
            title="Descriptive menu item 2"
            description="Description text 2"
          />
          <DescriptiveMenuItem
            value="descriptive_item_3"
            avatar="A"
            title="Sample menu item 3"
            description="With description"
            trailingIcon={<Pencil />}
          />
          <DescriptiveMenuItem
            value="text_only_2"
            title="Text only menu item 2"
          />
          <DescriptiveMenuItem
            value="descriptive_menu-_item_4"
            title="Descriptive menu item 4"
            description="Description text 4"
          />
          <EmptyStateMenuItem
            value="empty_card"
            title="No results found"
            trailingIcon={<Pencil />}
            leadingIcon={<Pencil />}
          />
          <GroupHeadingMenuItem value="group_heading_1" title="Group heading" />
        </Menu>
        </Box>
        )
      }
      `}
      </CodeBlock>
    </Box>
  );
};
export const Overview = Template.bind({});
