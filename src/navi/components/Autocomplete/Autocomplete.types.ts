import { AutocompleteProps as MuiAutocompleteProps, AutocompleteRenderInputParams } from "@material-ui/lab/Autocomplete";
import { NaviInputProps } from "../TextField/TextField.types";


interface data {
  name: string
  value?: string
  title?: string
  description?: string
  checked?: boolean
}
type DataObj = data[];
export interface AutocompleteProps extends Pick<MuiAutocompleteProps<data, true, true, true>, Exclude<keyof MuiAutocompleteProps<string, true, true, true>, "options" | "size" | "renderInput">> {
  inputProps?: NaviInputProps;
  size?: 'small' | 'large'
  selectable?: boolean;
  options: data[];
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

export interface CustomAutoCompleteProps<T> {
  autocompleteProps: MuiAutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>;
  inputProps?: NaviInputProps;
  selectable: boolean,
  size: 'small' | 'large',
}
