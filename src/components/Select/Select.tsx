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
import Chip from "../Tag/Tag";

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
  renderValueAs,
  ...props
}) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(props.open);
  const inputRef = React.useRef<any>(null);
  const classes = useStyles();

  React.useEffect(() => {
    if (selectAll) {
      const valueArr: string[] = [];
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const value = child.props.value;
          valueArr.push(value);
        }
      });
      setSelectValue([...getSelectedValue()]);
    }
  }, [selectAll]);

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectValue(value);
    }
  }, [value]);

  React.useEffect(() => {
    setOpen(open);
  }, [open]);

  const getSelectedValue = () => {
    const valueArr: string[] = [];
    React.Children.toArray(children).forEach((child) => {
      if (React.isValidElement(child)) {
        valueArr.push(child.props.value);
      }
    });
    return valueArr;
  };

  const items = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const item = child as React.ReactElement<
        React.PropsWithChildren<MenuItemProps>
      >;
      const value = child.props.value;
      let checked = selectAll || child.props.checked;

      if (selectValue.indexOf(value) !== -1) {
        checked = selectValue.indexOf(value) !== -1;
      }

      return React.cloneElement(item, {
        key: value,
        size: size,
        selectable: multiSelect,
        checked: checked,
      });
    }
  });

  return (
    <Box className="navi-menu-component">
      <MuiSelect
        renderValue={(selected) => {
          if (renderValueAs === "tag") {
            return (
              <Box
                style={{
                  flexWrap: "wrap",
                  display: "flex",
                  maxHeight: props.maxHeight,
                }}
              >
                {(selected as string[]).map((value) => (
                  <Chip
                    size={size}
                    intent="muted"
                    dismissible
                    LeadingIcon={<TagIcon size={8} />}
                    key={value}
                    label={value}
                    value={value}
                    onDismiss={(_e: any, val?: string) => {
                      setSelectValue((oldData) => {
                        let _data = Array.isArray(oldData)
                          ? [...oldData]
                          : [oldData];
                        if (typeof val === "string") {
                          const index = _data.indexOf(val);
                          _data.splice(index, 1);
                        }
                        return _data;
                      });
                    }}
                    {...tagProps}
                    className={`${classes.chip} ${tagProps?.className} navi-prevent-menu-open `}
                    style={{
                      display: "flex",
                      ...tagProps?.style,
                    }}
                  />
                ))}
              </Box>
            );
          } else {
            return (selected as string[]).join(", ");
          }
        }}
        {...props}
        onChange={(event: React.ChangeEvent<{ value: unknown }>, ele) => {
          const { value } = event.target;
          let valueArr: string[] = [];
          if (Array.isArray(value)) {
            setSelectValue(value);
            valueArr = value;
          } else if (typeof value === "string") {
            setSelectValue([value]);
            valueArr = [value];
          }
          props.onChange && props.onChange(valueArr);
        }}
        multiple={multiSelect}
        value={selectValue}
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
        onClose={() => {
          setOpen(false);
        }}
        onOpen={(e) => {
          let ele = e.target as HTMLElement;
          let preventMenuOpen = false;
          while (ele.nodeName !== "BODY" && !preventMenuOpen) {
            ele = ele.parentNode as HTMLElement;
            preventMenuOpen = ele.classList.contains("navi-prevent-menu-open");
          }
          if (!preventMenuOpen) {
            setOpen(true);
          }
        }}
        // Placement of custom clear and dropdown icon button
        endAdornment={
          <InputAdornment position="start" style={{ marginRight: "0px" }}>
            <IconButton
              size="small"
              variant="tertiary"
              intent="muted"
              style={{
                display: selectValue.length ? "block" : "none",
                marginRight: "0px",
              }}
              title={"Clear"}
              onClick={() => {
                setSelectValue([]);
              }}
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
              onClick={(e) => {
                setOpen(true);
              }}
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
        {items}
      </MuiSelect>
    </Box>
  );
};

export default Select;
