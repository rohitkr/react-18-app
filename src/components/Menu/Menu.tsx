import React from "react";
import { MenuProps } from "./Menu.types";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import "./Menu.scss";

const minWidth = 320;

interface SelectionMapInterface {
  [key: string]: boolean;
}

const Menu: React.FC<MenuProps> = ({
  onClose,
  onMenuChange,
  width,
  height,
  size,
  menuPlacement = "bottom",
  multiSelect = false,
  showSelectedValue = false,
  children,
  ...props
}) => {
  const [open, setOpen] = React.useState(props.open || false);
  const [selectedValue, setSelectedValue] = React.useState(
    props.selectedValue || null
  );
  const [selectionMap, setSelectionMap] = React.useState(() => {
    if (multiSelect) {
      if (React.Children.count(children)) {
        const map = React.Children.toArray(children).reduce(
          (acc: SelectionMapInterface, child) => {
            if (React.isValidElement(child)) {
              acc[child.props.value] = child.props.checked ? true : false;
              return acc;
            }
            return acc;
          },
          {}
        );
        return map;
      }
    }
    return {};
  });

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    props.handleClose && props.handleClose();
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      props.handleClose && props.handleClose();
    }
    if (event.key === " ") {
      event.preventDefault();
      props.handleClose && props.handleClose();
    }
  }

  const onMenuItemClick = React.useCallback(
    (
      e: React.MouseEvent<HTMLLIElement, MouseEvent>,
      value: string | number
    ) => {
      if (!multiSelect) {
        onMenuChange && onMenuChange([value]);
        setSelectedValue([value]);
        handleClose();
      } else {
        let updatedMap = { ...selectionMap, [value]: !selectionMap[value] };
        setSelectionMap(updatedMap);
        let selectedValues = [];
        for (let value in updatedMap) {
          if (updatedMap[value]) {
            selectedValues.push(value);
          }
        }
        setSelectedValue(selectedValues);
        onMenuChange && onMenuChange(selectedValues);
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
          width: width || (props.anchorEl as HTMLAnchorElement)?.offsetWidth,
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
            {React.Children.map(children, (child: any) => {
              return React.cloneElement(child, {
                key: child.props.value,
                onMenuItemClick,
                size,
                selectable: multiSelect ? true : false,
                checked:
                  child.props.checked ||
                  selectionMap[child.props.value] ||
                  (showSelectedValue &&
                    selectedValue?.includes(child.props.value)),
              });
            })}
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
};
export default Menu;
