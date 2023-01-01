import React from "react";
import Autocomplete, { AutocompleteProps } from "@material-ui/lab/Autocomplete";
import { Select } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const options = [
  { name: "one", value: 1 },
  { name: "two", value: 2 },
  { name: "three", value: 3 },
  { name: "four", value: 4 }
];

export default function MyAutocomplete() {
  const [values, setValues] = React.useState<string[]>([]);
  const onChange = (_, val) => {
    setValues(val);
  };
  const clearSelected = () => {
    setValues([]);
  };

  return (
    <>
      <button onClick={clearSelected}>Clear selected</button>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.name}
        value={values}
        onChange={onChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Categories" />
        )}
      />

    </>
  );
}
