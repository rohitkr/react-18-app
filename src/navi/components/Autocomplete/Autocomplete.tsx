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
import { AutocompleteProps, DataObj } from './Autocomplete.types'
import Box from '../Box/Box';
import Tag from '../Tag/Tag';
import { Tag as TagIcon } from 'tabler-icons-react';
import './Autocomplete.scss'

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

export default ({ size, selectable, options, inputProps, ...props }: AutocompleteProps) => {
  // const [dataValue, setDataValue] = React.useState<(string | DataObj)[]>();
  return (<Box className='navi-autocomplete-container'>
    <Autocomplete
      // To suppress the Autocomplete warning: The value provided to Autocomplete is invalid
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option: any) => option.name}
      renderOption={(option: any, { selected }) => {
        const MenuComponent = GetComponent(option, selected, size);
        return (
          MenuComponent
        );
      }}
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
            <Tag
              size={size}
              intent="muted"
              dismissible
              LeadingIcon={<TagIcon size={8} />}
              key={index}
              label={val.name}
              value={val.name}
              {...props}
              onDismiss={(e) => { props.onDelete && props.onDelete(); }}
            />
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
      onChange={(event, value, reason) => {
        const valueArr: string[] = [];
        if (Array.isArray(value)) {
          value.forEach((v: any) => valueArr.push(v.value || v.title || v.name));
        } else {
          valueArr.push(value);
        }
        // setDataValue(valueArr);
        props.onChange && props.onChange(event, value, reason);
      }}
      disableCloseOnSelect={props.multiple}
      renderInput={({ ...params }) => {
        return (
          <NaviTextField
            {...inputProps}
            {...params}
            required={props.required}
            // width="auto"
            inputProps={{
              ...params.inputProps,
              // className: `navi-autocomplete-input ${size}`,
            }}
            className={ `navi-select-input-container ${inputProps?.className}`}
            // dataValue={dataValue?.join(',')}
            size={size}
          />
        );
      }}
    />
  </Box>
  );
}
