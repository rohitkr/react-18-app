import React from "react";
import { MenuProps } from "./Menu.types";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import "./Menu.scss";
import SelectAllMenuItem from "../MenuItem/SelectAllMenuItem";

const minWidth = 320;

interface SelectionMapInterface {
  [key: string]: boolean;
}

const Menu: React.FC<MenuProps> = ({
  onClose,
  onMenuChange,
  width,
  height,
  size = "large",
  menuPlacement = "bottom",
  multiSelect = false,
  showSelectedValue = false,
  children,
  useSelectAll,
  ...props
}) => {
  const [open, setOpen] = React.useState(props.open || false);
  const [selectedValue, setSelectedValue] = React.useState(
    props.selectedValue || null
  );
  const [allSelected, setAllSelected] = React.useState(false);
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
    const someMenuItemsDelected = Object.keys(selectionMap).some(
      (key) => !selectionMap[key]
    );
    setAllSelected(!someMenuItemsDelected);
  }, [selectionMap]);

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

  const onSelectAllClick = () => {
    let updatedSelectionMap: { [key: string]: boolean } = {};
    Object.keys(selectionMap).forEach((key) => {
      updatedSelectionMap[key] = !allSelected;
    });
    setSelectionMap(updatedSelectionMap);
  };

  const _onMenuItemClick = React.useCallback(
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
      placement={menuPlacement}
      transition
      style={{ zIndex: 3 }}
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
            autoFocusItem={true}
            onKeyDown={handleListKeyDown}
            className="navi-menu-container"
          >
            {useSelectAll ? (
              <SelectAllMenuItem
                key="_select_all"
                _onMenuItemClick={onSelectAllClick}
                size={size}
                checked={allSelected}
              />
            ) : null}
            {React.Children.map(children, (child: any) => {
              return React.cloneElement(child, {
                key: child.props.value,
                _onMenuItemClick,
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
