import React, { ChangeEvent } from "react";
import { MenuProps } from "./Menu.types";
import { SelectProps, SelectDataProps } from "./Select.types";
import { Select, withStyles } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import "./Menu.scss";
import Box from "../Box/Box";
import Button from "../Button/Button";
import TextInput from "../Input/Input";

const minWidth = 320;

const Menu: React.FC<MenuProps> = ({
  onClose,
  onMenuChange,
  width,
  height,
  size,
  menuPlacement = "bottom",
  multiselect = false,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [selectionMap, setSelectionMap] = React.useState(() => {
    if (multiselect) {
      if (props.children?.length) {
        let map = {};
        props.children.forEach((child) => {
          if (!child.props.type) {
            map[child.props.value] = child.props.checked ? true : false;
          }
        });
        return map;
      }
    }
    return {};
  });

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  console.log(selectionMap);

  const handleClose = () => {
    props.handleClose && props.handleClose();
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      props.handleClose && props.handleClose();
    } else {
      console.log(event);
    }
    if (event.key === " ") {
      event.preventDefault();
      props.handleClose && props.handleClose();
    }
  }

  const onMenuItemClick = React.useCallback(
    ({ value, title }) => {
      if (!multiselect) {
        props.onChange && props.onChange({ value, title });
        handleClose();
      } else {
        let updatedMap = { ...selectionMap, [value]: !selectionMap[value] };
        setSelectionMap(updatedMap);
        props.onChange && props.onChange(updatedMap);
      }
    },
    [selectionMap]
  );

  return (
    <Popper
      open={open}
      anchorEl={props.anchorEl}
      role={undefined}
      placement="bottom"
      transition
    >
      <Paper
        style={{
          width: width || props.anchorEl?.offsetWidth,
          minWidth,
          boxShadow:
            "0px 6px 20px rgba(0, 0, 0, 0.14), 0px 4px 12px rgba(0, 0, 0, 0.18)",
          maxHeight: height ? height : "auto",
          overflowY: height ? "scroll" : "auto",
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            autoFocusItem={false}
            onKeyDown={handleListKeyDown}
            className="navi-menu-container"
          >
            {React.Children.map(props.children, (child: any) => {
              return React.cloneElement(child, {
                key: child.props.value,
                onMenuItemClick,
                size,
                selectable: multiselect ? true : false,
                checked: selectionMap[child.props.value],
              });
            })}
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
};
export default Menu;
