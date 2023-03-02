/* eslint-disable no-use-before-define */

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Input from "@material-ui/core/Input";
// import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import _countryList from './countryList.json';
import { Box, DescriptiveMenuItem } from '../navi';
// import NaviTextInput from "../navi/components/Input/Input";
import NaviTextField from '../navi/components/TextField/TextField';
import { InputAdornment, Paper } from '@material-ui/core'
import IconButton from '../navi/components/IconButton/IconButton';
import tokenObj from '../navi/tokens/build/json/tokens.json'
import { X, ChevronDown, Tag as TagIcon } from "tabler-icons-react";
import { MoodHappy, Pencil, Movie } from "tabler-icons-react";
import MenuDemo from './MenuDemo';
import SelectDemo from './SelectDemo';
import MuiAutocomplete from './MuiAutocomplete';
import './Autocomplete.scss'
import { Autocomplete, Input as NaviInput, Tag as Chip } from '../navi';
// import { CustomAutoComplete } from '../navi/components/Autocomplete/Autocomplete'
import { AutocompleteRenderInputParams } from '@material-ui/lab';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const countryList = _countryList.splice(0, 50);


export default function CheckboxesTags() {
  return (
    <>
      <Box display='flex' flexDirection='column' style={{ gap: "120px" }} height="1200px" >
        <Box>
          <NaviTextField
            label='Navi TextField Component'
            required
            helperText='Some helper text'
            size='large'
            maxCharacters={20}
            errorMessage='This is a required field'
            placeholder='Navi large size input placeholder'
            inputType={"default"}
            width="auto"
          />
        </Box>
        <Box>
          <NaviTextField
            label='Navi TextField Component'
            required
            size='small'
            maxCharacters={20}
            helperText='Some helper text'
            errorMessage='This is a required field'
            placeholder='Navi small size input placeholder'
            inputType={"default"}
            width="auto"

          />
        </Box>

        <Box marginLeft='30px'>
          <Autocomplete
            options={countryList}
            multiple
            // limitTags={4}
            disableCloseOnSelect={true}
            // open
            required
            size="large"
            onChange={(e, value, reason) => {
              // console.log(value, reason)
            }}
            inputProps={{
              label: "Navi Autocomplete component",
              helperText: "Helper Text",
              successMessage: "Success Message Text",
              errorMessage: "Error Message Text",
              // required: true,
              minWidth: 600,
              moreInfo: "More info text",
              placeholder: "Navi autocomplete small place holder text",
              // inputType: "critical",
              tooltipPlacement: "bottom"
            }}
          />
        </Box>

        <Box marginLeft='30px'>
          <Autocomplete
            options={countryList}
            multiple
            // limitTags={4}
            disableCloseOnSelect={true}
            // open
            required
            size="small"
            onChange={(e, value, reason) => {
              // console.log(value, reason)
            }}
            inputProps={{
              label: "Navi Autocomplete component",
              helperText: "Helper Text",
              successMessage: "Success Message Text",
              errorMessage: "Error Message Text",
              // required: true,
              minWidth: 600,
              moreInfo: "More info text",
              placeholder: "Navi autocomplete large place holder text",
              // inputType: "critical",
              tooltipPlacement: "bottom"
            }}
          />
        </Box>

        <Box>
          <MuiAutocomplete />
        </Box>
        {/* 
        <Box>
          <Autocomplete
            // multiple
            // id="checkboxes-tags-demo"
            options={countryList}
            disableCloseOnSelect
            getOptionLabel={(option: any) => option.name}
            renderOption={(option: any, { selected }) => (
              <DescriptiveMenuItem value={option.name} title={option.name} selectable selected={selected} />
            )}
            // onChange={(e, v) => { console.log(e, v) }}
            style={{ width: 500 }}
            renderInput={({ ...params }) => {
              // console.log("mui-params: ", params);
              return (
                // <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Favorites" />
                <Input {...params} inputProps={params.InputProps} {...params.InputProps} {...params.inputProps} placeholder="Favorites" />
              )
            }}
          />
        </Box>

        <Box>
          <Autocomplete
            multiple
            fullWidth={false}
            // id="checkboxes-tags-demo"
            options={countryList}
            disableCloseOnSelect
            getOptionLabel={(option: any) => option.name}
            renderOption={(option: any, { selected }) => {
              // console.log(option);
              return <DescriptiveMenuItem value={option.name} title={option.name} selectable selected={selected} />
            }}
            // onChange={(e, v) => { console.log(e, v) }}
            style={{ width: 500 }}
            renderInput={({ ...params }) => {
              // console.log("mui-params: ", params);
              return (
                <TextField {...params} variant="outlined" />
                // <Input {...params} inputProps={params.InputProps} {...params.InputProps} {...params.inputProps} placeholder="Favorites" />
              )
            }}
          />
        </Box> */}

        <Box marginLeft='30px'>
          <MenuDemo />
        </Box>
        <Box marginLeft='30px'>
          <SelectDemo />
        </Box>
        <Box marginLeft='30px'>
          <NaviInput label='Navi Text input' required />
        </Box>
      </Box>


    </>
  );
}
