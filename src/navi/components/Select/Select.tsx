import React from "react";
import { SelectProps } from "./Select.types";
import MuiSelect from "@material-ui/core/Select";
import Box from "../Box/Box";
import TextInput from "../Input/Input";
import IconButton from "../IconButton/IconButton";
import { X, ChevronDown, Tag as TagIcon } from "tabler-icons-react";
import {
  createStyles,
  InputAdornment,
  makeStyles,
  Theme,
} from "@material-ui/core";
import "./Select.scss";
import { MenuItemProps } from "../MenuItem/MenuItem.types";
import SelectedChip from "./SelectedChip";
import SelectAllMenuItem from "../MenuItem/SelectAllMenuItem";
import tokenObj from "../../tokens/build/json/tokens.json";

interface SelectionMapInterface {
  [key: string]: boolean | undefined;
}

interface MenuMapInterface {
  [key: string]: SelectProps;
}
interface MenuItemsMapInterface {
  [key: string]: MenuItemProps;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
      "& > * + *": {
        marginTop: theme.spacing(3),
      },
    },
    chip: {
      margin: 4,
    },
  })
);

const Select: React.FC<SelectProps> = ({
  onClose,
  multiSelect,
  selectAll = false,
  inputProps,
  tagProps,
  checkboxes = true,
  size = "large",
  children,
  dropdownIcon,
  value,
  renderValueAsTag,
  dataTestId,
  openTooltipText,
  clearTooltipText,
  ...props
}) => {
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
  const [selectedValue, setSelectValue] = React.useState<string[]>(() => {
    let allSelectedValues: Array<string> = [];

    if (props.selectValue) {
      return props.selectValue;
    } else {
      if (React.Children.count(children)) {
        return React.Children.toArray(children).reduce(
          (acc: Array<string>, child) => {
            if (React.isValidElement(child) && child.props.checked) {
              return [...acc, child.props.value];
            }
            return acc;
          },
          []
        );
      }
      return allSelectedValues;
    }
  });
  const [open, setOpen] = React.useState(props.open || false);
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

  const [menuMap, setMenuMap] = React.useState(() => {
    if (React.Children.count(children)) {
      const map = React.Children.toArray(children).reduce(
        (acc: MenuMapInterface, child) => {
          if (React.isValidElement(child)) {
            acc[child.props.value] = { ...child.props };
            return acc;
          }
          return acc;
        },
        {}
      );
      return map;
    }
    return {};
  });

  // Used ref as <any> because MUI inputRef for select component is Any
  const inputRef = React.useRef<any>(null);
  const classes = useStyles();
  const inputPadding =
    size === "large"
      ? `${tokenObj["spacing-12"]} ${tokenObj["spacing-0"]}`
      : `${tokenObj["spacing-8"]} ${tokenObj["spacing-0"]}`;

  React.useEffect(() => {
    const someMenuItemsSelected = Object.keys(selectionMap).some(
      (key) => !selectionMap[key]
    );
    setAllSelected(!someMenuItemsSelected);
  }, [selectionMap, allSelected]);

  React.useEffect(() => {
    setOpen(open);
  }, [open]);

  const onSelectedChipDismiss = React.useCallback(
    (e: React.MouseEvent, value?: string) => {
      let updatedMap = { ...selectionMap };
      if (value) {
        if (
          "checked" in menuItemsMap[String(value)] ||
          menuItemsMap[String(value)].disabled
        ) {
          updatedMap = {
            ...updatedMap,
            [String(value)]: menuItemsMap[value].checked || false,
          };
        } else {
          updatedMap = { ...updatedMap, [String(value)]: false };
        }
      }
      setSelectionMap(updatedMap);
      let updatedSelectedValues: Array<string> = [];
      Object.keys(updatedMap).forEach((key) => {
        if (updatedMap[key]) {
          updatedSelectedValues.push(key);
        }
      });
      setSelectValue(updatedSelectedValues);
    },
    [selectionMap]
  );

  const onSelectClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  // This function prevents Menu from opening while clicking on the Chip
  const onSelectOpen = React.useCallback((e: React.ChangeEvent<{}>) => {
    let ele = e.target as HTMLElement;
    let preventMenuOpen = false;
    while (ele.nodeName !== "BODY" && !preventMenuOpen) {
      ele = ele.parentNode as HTMLElement;
      // If the element has className navi-prevent-menu-open, it will prevent
      // the menu from opening
      preventMenuOpen = ele.classList.contains("navi-prevent-menu-open");
    }
    if (!preventMenuOpen) {
      setOpen(true);
    }
  }, []);

  const selectedChips = () => {
    if (renderValueAsTag) {
      return (
        <Box flexWrap="wrap" display="flex" maxHeight={`${props.maxHeight}px`}>
          {selectedValue &&
            selectedValue.map((value: string) => {
              return (
                <Box display="flex" margin={`5px 6px`}>
                  <SelectedChip
                    size={"large"}
                    intent="muted"
                    dismissible
                    LeadingIcon={<TagIcon size={8} />}
                    key={value}
                    label={value}
                    value={value}
                    onDismiss={onSelectedChipDismiss}
                    {...tagProps}
                    className={`${classes.chip} ${tagProps?.className} navi-prevent-menu-open `}
                    style={{
                      ...tagProps?.style,
                    }}
                  />
                </Box>
              );
            })}
        </Box>
      );
    } else {
      return selectedValue.join(", ");
    }
  };

  const onSelectChange = React.useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      let updatedSelectedMap: SelectionMapInterface = { ...selectionMap };
      const value = event.target.value as string[];
      if (value.indexOf("_select_all") >= 0) {
        let updatedSelectedValues: Array<string> = [];
        Object.keys(selectionMap).forEach((key) => {
          if ("checked" in menuItemsMap[key] || menuItemsMap[key].disabled) {
            updatedSelectedMap[key] = menuItemsMap[key].checked;
          } else {
            updatedSelectedMap[key] = !allSelected;
          }
        });
        Object.keys(updatedSelectedMap).forEach((key) => {
          if (updatedSelectedMap[key]) {
            updatedSelectedValues.push(key);
          }
        });
        setSelectionMap(updatedSelectedMap);
        // const finalSelectedValues = updatedSelectedValues.map((val)=> menuItemsMap[val].title || '')
        // setSelectValue(finalSelectedValues);
      } else {
        Object.keys(selectionMap).forEach((key) => {
          if ("checked" in menuItemsMap[key] || menuItemsMap[key].disabled) {
            updatedSelectedMap[key] = menuItemsMap[key].checked;
          } else if (value.indexOf(key) >= 0) {
            updatedSelectedMap[key] = true;
          } else {
            updatedSelectedMap[key] = false;
          }
        });
        setSelectionMap(updatedSelectedMap);
        if (Array.isArray(value)) {
          console.log("value: ", value)
          const finalValues = value.map((val)=> menuItemsMap[val].title || '');
          value.forEach((v) => {
            console.log("v: ", v)
          });
          setSelectValue(finalValues);
        } else {
          const finalValue = menuItemsMap[value].title || '';
          setSelectValue([finalValue]);
        }
      }
      const selectedValueArr: string[] = [];
      Object.keys(updatedSelectedMap).forEach((val) => {
        if (updatedSelectedMap[val]) {
          selectedValueArr.push(val);
        }
      });
      props.onChange && props.onChange(selectedValueArr);
    },
    [selectionMap, allSelected]
  );

  const onMenuOpen = () => {
    setOpen(true);
  };

  const onClearClick = () => {
    let updatedMap = { ...selectionMap };
    Object.keys(selectionMap).forEach((key) => {
      if ("checked" in menuItemsMap[key] || menuItemsMap[key].disabled) {
        updatedMap = {
          ...updatedMap,
          [String(key)]: menuItemsMap[key].checked,
        };
      } else {
        updatedMap = {
          ...updatedMap,
          [String(key)]: false,
        };
      }
      setSelectionMap(updatedMap);
    });

    const selectedValueArr: string[] = [];
    Object.keys(updatedMap).forEach((key) => {
      if (updatedMap[key]) {
        selectedValueArr.push(key);
      }
    });
    setSelectValue(selectedValueArr);
  };

  const items = React.useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const item = child as React.ReactElement<
          React.PropsWithChildren<MenuItemProps>
        >;
        const value = child.props.value;
        let checked = selectionMap[child.props.value];

        return React.cloneElement(item, {
          key: value,
          size: size,
          selectable: multiSelect,
          checked: checked,
        });
      }
    });
  }, [selectionMap]);

  return (
    <Box className="navi-menu-component">
      <MuiSelect
        renderValue={selectedChips}
        {...props}
        onChange={onSelectChange}
        multiple={multiSelect}
        value={selectedValue}
        defaultValue=""
        inputRef={inputRef}
        data-testid={dataTestId || undefined}
        input={
          <TextInput
            // navi-select-input-container class name is being used to prevent menu to be opened
            // while clicking on the batch icon
            className={`navi-select-input-container ${inputProps?.className}`}
            style={{
              padding:
                renderValueAsTag && selectedValue.length ? 0 : inputPadding,
            }}
            {...{
              minWidth: props.minWidth,
              maxWidth: props.maxWidth,
              minHeight: props.minHeight,
              maxHeight: props.maxHeight,
              ...inputProps,
            }}
            size={size}
            inputType={"default"}
          />
        }
        open={open}
        inputProps={{
          // Hide the actual select component dropdown icon
          IconComponent: () => null,
        }}
        onClose={onSelectClose}
        onOpen={onSelectOpen}
        // Placement of custom clear and dropdown icon button
        endAdornment={
          <InputAdornment
            position="start"
            style={{ marginRight: `${tokenObj["spacing-0"]}` }}
          >
            <IconButton
              size="small"
              variant="tertiary"
              intent="muted"
              style={{
                display: selectedValue?.length ? "block" : "none",
                marginRight: tokenObj["spacing-0"],
              }}
              title={clearTooltipText}
              onClick={onClearClick}
            >
              <X />
            </IconButton>
            <IconButton
              size="small"
              variant="tertiary"
              intent="muted"
              style={{
                marginRight: "5px",
                transform: `${open ? "rotate(180deg)" : "rotate(0deg)"}`,
              }}
              title={openTooltipText}
              onClick={onMenuOpen}
            >
              {dropdownIcon || <ChevronDown />}
            </IconButton>
          </InputAdornment>
        }
        MenuProps={{
          // Height of the menu dropdown
          PaperProps: {
            style: {
              marginTop: "18px",
              maxHeight: "calc(100% - 200px)",
              minWidth: `calc(${inputRef?.current?.node?.offsetWidth}px - 8px)`,
            },
            className: "navi-menu-item-container",
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
          disableAutoFocusItem: true,
        }}
      >
        {selectAll ? (
          <SelectAllMenuItem
            key="_select_all"
            value="_select_all"
            size={size}
            checked={allSelected}
          />
        ) : null}
        {items}
      </MuiSelect>
    </Box>
  );
};

export default Select;
