/* eslint-disable no-use-before-define */

import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import DescriptiveMenuItem from '../DescriptiveMenuItem/DescriptiveMenuItem';
// import NaviTextField from './TextField';
import NaviTextField from '../Input/Input'
import { AutocompleteProps } from './Autocomplete.types'
import './Autocomplete.scss'


export default function CheckboxesTags({ size, selectable, options, ...props }: AutocompleteProps) {
  return (
    <>
      This is an auto complete
      <Autocomplete
        multiple
        // open
        // value={[countryList[1]]}
        // id="checkboxes-tags-demo"
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option: any) => option.name}
        renderOption={(option: any, { selected }) => (
          <DescriptiveMenuItem
            value={option.value}
            title={option.title}
            // description={option.density}
            selectable={selectable}
            checked={selected}
            size={size}
          // leadingIcon={<MoodHappy />}
          />
        )}
        onChange={(e, v) => { console.log(e, v) }}
        style={{ width: 500 }}
        PaperComponent={({ children }) => (
          <Paper
            // style={{ background: "yellow" }}
            className="navi-autocomplete-menu-container"
          >
            {Array.isArray(children) && children.map((val) => {
              console.log("val: ", val);
              return val
            })}
          </Paper>
        )}
        renderInput={({ ...params }) => {
          console.log("params: ", params);
          return (
            <NaviTextField
              label='Autocomplete using Navi Text input'
              {...params}
              minWidth={400}
            // inputProps={params.InputProps}
            // {...params.InputProps}
            // {...params.inputProps}
            />
          )
        }}
      />
    </>
  );
}
