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

interface SelectionMapInterface {
  [key: string]: boolean;
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
  renderValueAs = "tag",
  ...props
}) => {
  const [selectedValue, setSelectValue] = React.useState<string[]>(() => {
    let allSelectedValues: Array<string> = [];

    if (props.selectValue) {
      return props.selectValue;
    }
    else {
      if (React.Children.count(children)) {
        return React.Children.toArray(children).reduce(
          (acc: Array<string>, child) => {
            if (React.isValidElement(child) && child.props.checked) {
              return [...acc, child.props.value];
            }
            return acc;
          }, [])
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
  const inputRef = React.useRef<any>(null);
  const classes = useStyles();

  React.useEffect(() => {
    const someMenuItemsSelected = Object.keys(selectionMap).some(
      (key) => !selectionMap[key]
    );
    setAllSelected(!someMenuItemsSelected);
  }, [selectionMap, allSelected]);

  React.useEffect(() => {
    setOpen(open);
  }, [open]);

  const onSelectedChipDismiss = React.useCallback((e: React.MouseEvent, value?: string) => {
    if (value) {
      setSelectValue((oldData) => {
        let _data = Array.isArray(oldData)
          ? [...oldData]
          : [oldData];
        if (typeof value === "string") {
          const index = _data.indexOf(value);
          _data.splice(index, 1);
        }
        return _data;
      });
      setSelectionMap((oldMap) => {
        let _oldMap = { ...oldMap, [String(value)]: false };
        return _oldMap;
      });
    }
  }, [selectionMap]);

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
    if (renderValueAs === "tag") {
      return (
        <Box
          flexWrap="wrap"
          display="flex"
          maxHeight={`${props.maxHeight}px`}
        >
          {selectedValue &&
            selectedValue.map((value: string) => {
              return (
                <Box display="flex" margin="5px 6px">
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
      return selectedValue;
    }
  };

  const onSelectChange = React.useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      let updatedSelectedMap: SelectionMapInterface = { ...selectionMap };
      const value = event.target.value as string[];
      if (value.indexOf("_select_all") >= 0) {
        let updatedSelectedValues: Array<string> = [];
        Object.keys(selectionMap).forEach((key) => {
          updatedSelectedMap[key] = !allSelected;
          if (!allSelected) {
            updatedSelectedValues.push(key);
          }
        });
        setSelectionMap(updatedSelectedMap);
        setSelectValue(updatedSelectedValues);
      } else {
        Object.keys(selectionMap).forEach((key) => {
          if (value.indexOf(key) >= 0) {
            updatedSelectedMap[key] = true;
          } else {
            updatedSelectedMap[key] = false;
          }
        });
        setSelectionMap(updatedSelectedMap);
        if (Array.isArray(value)) {
          setSelectValue(value);
        } else {
          setSelectValue([value]);
        }
      }
      const selectedValueArr: string[] = [];
      Object.keys(updatedSelectedMap).forEach((v) => {
        if (updatedSelectedMap[v]) {
          selectedValueArr.push(v);
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
    setSelectionMap((oldMap) => (Object.keys(oldMap).reduce((a, v) => ({ ...a, [v]: false }), {})));
    setSelectValue([]);
  };
  const selectEndAdornment = React.useMemo(() => {
    return (
      <InputAdornment position="start" style={{ marginRight: "0px" }}>
        <IconButton
          size="small"
          variant="tertiary"
          intent="muted"
          style={{
            display: selectedValue?.length ? "block" : "none",
            marginRight: "0px",
          }}
          title={"Clear"}
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
          title={"Open"}
          onClick={onMenuOpen}
        >
          {dropdownIcon || <ChevronDown />}
        </IconButton>
      </InputAdornment>
    );
  }, []);

  const items = React.useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const item = child as React.ReactElement<
          React.PropsWithChildren<MenuItemProps>
        >;
        const value = child.props.value;
        let checked = child.props.checked || selectionMap[child.props.value];

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
        input={
          <TextInput
            // navi-select-input-container class name is being used to prevent menu to be opened
            // while clicking on the batch icon
            className={`navi-select-input-container ${inputProps?.className}`}
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
        endAdornment={selectEndAdornment}
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
