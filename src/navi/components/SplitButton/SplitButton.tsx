import React from "react";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import Box from "../Box/Box";
import { SplitButtonProps } from "./SplitButton.types";
import "./SplitButton.scss";
import { ChevronDown } from "tabler-icons-react";
import Divider from "../Divider/Divider";
import Menu from "../Menu/Menu";
import tokens from "../../tokens/build/json/tokens.json";
import DescriptiveMenuItem from "../DescriptiveMenuItem/DescriptiveMenuItem";
import DividerMenuItem from "../DividerMenuItem/DividerMenuItem";
import GroupHeadingMenuItem from "../GroupHeadingMenuItem/GroupHeadingMenuItem";
import EmptyStateMenuItem from "../EmptyStateMenuItem/EmptyStateMenuItem";
import SelectAllMenuItem from "../MenuItem/SelectAllMenuItem";

const tokenObj: { [key: string]: any } = tokens;

const SplitButtonComponent: React.FC<SplitButtonProps> = ({
  intent = "prime",
  size = "large",
  tooltip,
  buttonText,
  menuItems,
  menuProps,
  onChange,
  id,
  dataTestId,
  multiSelect,
}) => {
  const anchorEl = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(menuProps?.open || false);
  const handleClick = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    if (menuProps?.open) {
      setOpen(menuProps?.open);
    }
  }, [menuProps?.open]);

  const handleClose = () => {
    setOpen(false);
  };

  const onMenuItemClick = (selectedMenuItem: Array<string | number>) => {
    onChange && onChange(selectedMenuItem);
  };
  const buttonType: {
    intent: "prime" | "info" | "muted" | "critical" | "warning" | "success";
    variant: "tertiary" | "primary" | "secondary";
  } = React.useMemo(() => {
    if (intent === "info-soft") {
      return {
        intent: "info",
        variant: "tertiary",
      };
    } else if (intent === "info-bold") {
      return {
        intent: "info",
        variant: "primary",
      };
    } else if (intent === "muted-light") {
      return {
        intent: "muted",
        variant: "tertiary",
      };
    } else if (intent === "muted-bold") {
      return {
        intent: "muted",
        variant: "primary",
      };
    } else if (intent === "prime") {
      return {
        intent: "prime",
        variant: "primary",
      };
    }
    return {
      intent: "prime",
      variant: "primary",
    };
  }, [intent]);

  const dividerColor = React.useMemo(() => {
    switch (intent) {
      case "info-soft": {
        return tokenObj["splitbutton-intent-info-soft-color"];
      }
      case "info-bold": {
        return tokenObj["splitbutton-intent-info-bold-color"];
      }
      case "muted-light": {
        return tokenObj["splitbutton-intent-muted-light-color"];
      }
      case "muted-bold": {
        return tokenObj["splitbutton-intent-muted-bold-color"];
      }
      case "prime": {
        return tokenObj["splitbutton-intent-prime-color"];
      }
      default: {
        return tokenObj["splitbutton-intent-default-color"];
      }
    }
  }, [intent]);

  const MenuItem = React.useMemo(() => {
    return menuItems.map((menuItem, index) => {
      switch (menuItem.type) {
        case "descriptive":
          return (
            <DescriptiveMenuItem
              {...menuItem}
              key={`${menuItem.value}-${index}`}
            />
          );
        case "divider":
          return (
            <DividerMenuItem {...menuItem} key={`${menuItem.value}-${index}`} />
          );
        case "group_heading":
          return (
            <GroupHeadingMenuItem
              {...menuItem}
              key={`${menuItem.value}-${index}`}
            />
          );
        case "empty":
          return (
            <EmptyStateMenuItem
              {...menuItem}
              key={`${menuItem.value}-${index}`}
            />
          );
        case "_select_all":
          return (
            <SelectAllMenuItem
              {...menuItem}
              key={`${menuItem.value}-${index}`}
            />
          );
      }
    });
  }, [menuItems]);

  const menuWidth = React.useMemo(() => {
    if (menuProps && !menuProps.width) {
      return `${anchorEl.current?.offsetWidth}px`;
    }
  }, [anchorEl.current, menuProps]);

  return (
    <Box>
      <Box
        ref={anchorEl}
        className={`navi-split-button-container ${intent}`}
        onClick={handleClick}
        id={id}
        data-testid={dataTestId}
      >
        <Button
          size={size}
          className="left-split-button"
          intent={buttonType.intent}
          variant={buttonType.variant}
          onClick={handleClick}
        >
          {buttonText}
        </Button>
        <Divider orientation="vertical" color={dividerColor} />
        <IconButton
          size={size}
          intent={buttonType.intent}
          variant={buttonType.variant}
          className="right-split-button"
          rounded={false}
          title={tooltip}
        >
          <ChevronDown />
        </IconButton>
      </Box>
      {menuItems && (
        <Menu
          size={size}
          onMenuChange={onMenuItemClick}
          anchorEl={anchorEl?.current}
          open={open}
          keepMounted
          handleClose={handleClose}
          style={{ minWidth: menuWidth, margin: "none", marginTop: "4px" }}
          multiSelect={multiSelect}
          menuPlacement="bottom-start"
          {...menuProps}
        >
          {MenuItem}
        </Menu>
      )}
    </Box>
  );
};

const SplitButton = React.forwardRef<HTMLDivElement, SplitButtonProps>(
  (props, ref) => {
    return <SplitButtonComponent {...props} forwardedRef={ref} />;
  }
);

export default SplitButton;
