/* eslint-disable no-use-before-define */

import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import DescriptiveMenuItem from '../DescriptiveMenuItem/DescriptiveMenuItem';
// import NaviTextField from './TextField';
import NaviTextField from '../TextField/TextField'
import { AutocompleteProps, CustomAutoCompleteProps } from './Autocomplete.types'
import './Autocomplete.scss'


export default <T,>(props: CustomAutoCompleteProps<T>) => {
  const { selectable, size, autocompleteProps, inputProps } = props;
  // const { selectable } = autocompleteProps;
  return (<>
    <Autocomplete
      getOptionLabel={(option: any) => option.name}
      renderOption={(option: any, { selected }) => {
        return (
          <DescriptiveMenuItem
            value={option.value}
            title={option.name}
            description={option.density}
            selectable={selectable}
            checked={selected}
            size={size}
            // leadingIcon={<MoodHappy />}
          />
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
      {...autocompleteProps}
      renderInput={({ ...params }) => {
        return (
          <NaviTextField
            label='Autocomplete using Navi Text input'
            {...params}
            minWidth={400}
          />
        )
      }}
    />
  </>);
};


export const CustomAutoComplete = function CheckboxesTags({ size, selectable, options, inputProps, ...props }: AutocompleteProps) {
  return (
    <>
      This is an auto complete
      <Autocomplete
        getOptionLabel={(option: any) => option.name}
        renderOption={(option: any, { selected }) => {
          console.log("option: ", option)
          return (
            <DescriptiveMenuItem
              value={option.value}
              title={option.name}
              description={option.density}
              selectable={selectable}
              checked={selected}
              size={size}
            // leadingIcon={<MoodHappy />}
            />
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
        // {...props}
        options={options}
        renderInput={({ ...params }) => {
          // console.log("params: ", params);
          return (
            <NaviTextField
              label='Autocomplete using Navi Text input'
              {...params}
              minWidth={400}
              {...inputProps}
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
