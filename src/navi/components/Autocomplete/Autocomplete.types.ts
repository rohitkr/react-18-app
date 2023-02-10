import { AutocompleteProps as MuiAutocompleteProps } from "@material-ui/lab/Autocomplete";

interface data {
  name: string
  value?: string
}

export interface AutocompleteProps extends Pick<MuiAutocompleteProps<data[], true, true, true>, Exclude<keyof MuiAutocompleteProps<string, true, true, true>, "options" | "size">> {
  size?: 'small' | 'large'
  selectable?: boolean;
  options: data[];
}

export interface CustomAutoCompleteProps<T> {
  autocompleteProps: MuiAutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>;
  selectable: boolean,
  size: 'small' | 'large',
  label: string;
  loading?: boolean;
}
