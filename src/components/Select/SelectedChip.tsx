import React from "react";
import Chip from "../Tag/Tag";
import { Tag as TagIcon } from "tabler-icons-react";
import { SelectedChipsProps } from "./Select.types";

const SelectedChip: React.FC<SelectedChipsProps> = ({
  size,
  value,
  onDismiss,
  tagProps,
}) => {
  const onDismissClick = React.useCallback(
    (e: React.MouseEvent, value?: string) => {
      value && onDismiss && onDismiss(e, value);
    },
    []
  );
  return (
    <Chip
      size={size}
      intent="muted"
      dismissible
      LeadingIcon={<TagIcon size={8} />}
      key={value}
      label={value}
      value={value}
      onDismiss={onDismissClick}
      {...tagProps}
      className={`${tagProps?.className} navi-prevent-menu-open `}
      style={{
        display: "flex",
        ...tagProps?.style,
      }}
    />
  );
};

export default SelectedChip;
