import React from "react";
import { MenuProps } from "./Menu.types";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import "./Menu.scss";
import SelectAllMenuItem from "../MenuItem/SelectAllMenuItem";
import { MenuItemProps } from "../MenuItem/MenuItem.types";

const minWidth = 320;

interface SelectionMapInterface {
  [key: string]: boolean | undefined;
}
interface MenuItemsMapInterface {
  [key: string]: MenuItemProps;
}

const Menu: React.FC<MenuProps> = ({
  handleClose,
  onMenuChange,
  width,
  height,
  size = "large",
  menuPlacement = "bottom",
  multiSelect = false,
  showSelectedValue = false,
  children,
  useSelectAll,
  hideOnSelect = false,
  style,
  ...props
}) => {
  const [open, setOpen] = React.useState(props.open || false);
  const [selectedValue, setSelectedValue] = React.useState(
    props.selectedValue || null
  );
  const [allSelected, setAllSelected] = React.useState(false);
  const [menuItemsMap] = React.useState(() => {
    if (React.Children.count(children)) {
      const map = React.Children.toArray(children).reduce(
        (acc: MenuItemsMapInterface, child) => {
          if (React.isValidElement(child)) {
            acc[child.props.value] = { ...child.props };
            return acc;
          }
          return acc;
        },
        {}
      );
      return map;
    } else {
      return {};
    }
  });
  const [selectionMap, setSelectionMap] = React.useState(() => {
    if (multiSelect) {
      if (React.Children.count(children)) {
        const map = React.Children.toArray(children).reduce(
          (acc: SelectionMapInterface, child) => {
            if (React.isValidElement(child)) {
              acc[child.props.value] = child.props.selected ? true : false;
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

  const onHandleClose = (e: React.MouseEvent<Document, MouseEvent>) => {
    handleClose && handleClose();
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      handleClose && handleClose();
    }
    if (event.key === " ") {
      event.preventDefault();
      handleClose && handleClose();
    }
  }

  const onSelectAllClick = () => {
    let updatedSelectionMap: { [key: string]: boolean } = {};
    Object.keys(selectionMap).forEach((key) => {
      if (menuItemsMap[key].disabled) {
        updatedSelectionMap[key] = menuItemsMap[key].selected ? true : false;
      } else if ("selected" in menuItemsMap[key]) {
        updatedSelectionMap[key] =
          menuItemsMap[key].selected || !selectionMap[key];
      } else {
        updatedSelectionMap[key] = !allSelected;
      }
    });
    let selectedValues = [];
    for (let value in updatedSelectionMap) {
      if (updatedSelectionMap[value]) {
        selectedValues.push(value);
      }
    }
    setSelectionMap(updatedSelectionMap);
    onMenuChange && onMenuChange(selectedValues);
    if (hideOnSelect) {
      handleClose && handleClose();
    }
  };

  const _onMenuItemClick = React.useCallback(
    (
      e: React.MouseEvent<HTMLLIElement, MouseEvent>,
      value: string | number
    ) => {
      if (!multiSelect) {
        onMenuChange && onMenuChange([value]);
        setSelectedValue([value]);
      } else if ("selected" in menuItemsMap[value]) {
        let updatedMap = {
          ...selectionMap,
          [value]: menuItemsMap[value].selected,
        };
        setSelectionMap(updatedMap);
        let selectedValues = [];
        for (let value in updatedMap) {
          if (updatedMap[value]) {
            selectedValues.push(value);
          }
        }
        setSelectedValue(selectedValues);
        onMenuChange && onMenuChange(selectedValues);
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
      if (hideOnSelect) {
        handleClose && handleClose();
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
          width:
            width || `${(props.anchorEl as HTMLAnchorElement)?.offsetWidth}px`,
          minWidth: width ? "" : minWidth,
          boxShadow:
            "0px 6px 20px rgba(0, 0, 0, 0.14), 0px 4px 12px rgba(0, 0, 0, 0.18)",
          maxHeight: height ? height : "30rem",
          overflowY: height ? "scroll" : "auto",
          ...style,
        }}
      >
        <ClickAwayListener onClickAway={onHandleClose}>
          <MenuList
            autoFocusItem={false}
            onKeyDown={handleListKeyDown}
            className="navi-menu-container"
          >
            {useSelectAll ? (
              <SelectAllMenuItem
                key="_select_all"
                _onMenuItemClick={onSelectAllClick}
                size={size}
                selected={allSelected}
              />
            ) : null}
            {React.Children.map(children, (child: any) => {
              return React.cloneElement(child, {
                key: child.props.value,
                _onMenuItemClick,
                size,
                selectable: multiSelect ? true : false,
                selected:
                  child.props.selected ||
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
