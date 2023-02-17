/* eslint-disable no-use-before-define */

import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import DescriptiveMenuItem from '../DescriptiveMenuItem/DescriptiveMenuItem';
import GroupHeadingMenuItem from '../GroupHeadingMenuItem/GroupHeadingMenuItem';
import DividerMenuItem from '../DividerMenuItem/DividerMenuItem';
import EmptyStateMenuItem from '../EmptyStateMenuItem/EmptyStateMenuItem';
import MenuItem from '../MenuItem/MenuItem';
import NaviTextField from '../TextField/TextField'
import { AutocompleteProps, CustomAutoCompleteProps } from './Autocomplete.types'
import Box from '../Box/Box';
import Tag from '../Tag/Tag';
import { Tag as TagIcon } from 'tabler-icons-react';
import './Autocomplete.scss'

interface MenuItemMap {
  DescriptiveMenuItem: Function,
  GroupHeadingMenuItem: Function,
  DividerMenuItem: Function,
  EmptyStateMenuItem: Function,
  MenuItem: Function,
}
const MenuItemMap: MenuItemMap = {
  DescriptiveMenuItem: DescriptiveMenuItem,
  GroupHeadingMenuItem: GroupHeadingMenuItem,
  DividerMenuItem: DividerMenuItem,
  EmptyStateMenuItem: EmptyStateMenuItem,
  MenuItem: MenuItem,
};

const GetComponent = (option: any, selected: boolean, size?: 'small' | 'large') => {
  switch (option.type) {
    case 'DescriptiveMenuItem':
      return <DescriptiveMenuItem value={option.name} {...option} checked={selected} size={size} />
      break;
    case 'GroupHeadingMenuItem':
      return <GroupHeadingMenuItem {...option} />
      break;
    case 'DividerMenuItem':
      return <DividerMenuItem {...option} />
      break;
    case 'EmptyStateMenuItem':
      return <EmptyStateMenuItem {...option} />
      break;
    case 'MenuItem':
      return <MenuItem value={option.name} {...option} />
      break;
    default:
      return <DescriptiveMenuItem value={option.name} {...option} checked={selected} size={size} />
      break;
  }
}


export default <T,>(props: CustomAutoCompleteProps<T>) => {
  const { selectable, size, autocompleteProps, inputProps } = props;
  return (<Box className='navi-autocomplete-container'>
    <Autocomplete
      getOptionLabel={(option: any) => option.name}
      renderOption={(option: any, { selected }) => {
        const MenuComponent = GetComponent(option, selected, size);
        return (
          MenuComponent
        )
      }}
      onChange={(e, v) => { console.log(e, v) }}
      style={{ width: 500 }}
      PaperComponent={({ children }) => (
        <Paper
          className="navi-autocomplete-menu-container"
        >
          {Array.isArray(children) && children.map((val) => {
            return val
          })}
        </Paper>
      )}
      renderTags={(value: any, getTagProps) => {
        return value.map((val: { name: string }, index: number) => {
          const props: any = getTagProps({ index });
          return (
            // <Chip label={val.name} {...getTagProps({ index })}  />
            // <Box display="flex" margin={`5px 6px`}>
            <Tag
              size={"large"}
              intent="muted"
              dismissible
              LeadingIcon={<TagIcon size={8} />}
              key={index}
              label={val.name}
              value={val.name}
              {...props}
              onDismiss={(e) => { props.onDelete && props.onDelete() }}
            // onDismiss={onSelectedChipDismiss}
            // {...tagProps}
            // className={`${classes.chip} ${tagProps?.className} navi-prevent-menu-open `}
            // style={{
            //   ...tagProps?.style,
            // }}
            />
            // </Box>
          )
        });
      }}
      {...autocompleteProps}
      renderInput={({ ...params }) => {
        return (
          <NaviTextField
            label='Autocomplete using Navi Text input'
            {...params}
            inputProps={{
              ...params.inputProps,
              className: `navi-autocomplete-input ${size}`,
            }}
            minWidth={400}
          />
        )
      }}
      ListboxProps={{
        style: {
          marginTop: "10px",
        }
      }}
    />
  </Box>);
};


export const CustomAutoComplete = function CheckboxesTags({ size, selectable, options, inputProps, ...props }: AutocompleteProps) {
  return (<Box className='navi-autocomplete-container'>
    <Autocomplete
      getOptionLabel={(option: any) => option.name}
      renderOption={(option: any, { selected }) => {
        const MenuComponent = GetComponent(option, selected, size);
        return (
          MenuComponent
        );
      }}
      onChange={(e, v) => { console.log(e, v); }}
      style={{ width: 500 }}
      PaperComponent={({ children }) => (
        <Paper
          className="navi-autocomplete-menu-container"
        >
          {Array.isArray(children) && children.map((val) => {
            return val;
          })}
        </Paper>
      )}
      renderTags={(value: any, getTagProps) => {
        return value.map((val: { name: string; }, index: number) => {
          const props: any = getTagProps({ index });
          return (
            // <Chip label={val.name} {...getTagProps({ index })}  />
            // <Box display="flex" margin={`5px 6px`}>
            <Tag
              size={"large"}
              intent="muted"
              dismissible
              LeadingIcon={<TagIcon size={8} />}
              key={index}
              label={val.name}
              value={val.name}
              {...props}
              onDismiss={(e) => { props.onDelete && props.onDelete(); }} />
            // </Box>
          );
        });
      }}
      ListboxProps={{
        style: {
          marginTop: "10px",
        }
      }}
      options={options}
      {...props}
      disableCloseOnSelect={props.multiple}
      renderInput={({ ...params }) => {
        return (
          <NaviTextField
            {...inputProps}
            {...params}
            inputProps={{
              ...params.inputProps,
              className: `navi-autocomplete-input ${size}`,
            }}
          />
        );
      }}
    />
  </Box>
  );
}
