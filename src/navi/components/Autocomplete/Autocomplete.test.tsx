
import React from "react";
import { render } from "@testing-library/react";
import Autocomplete from "./Autocomplete";
import { AutocompleteProps } from "./Autocomplete.types";
import { TextField } from "@material-ui/core";


const data = [{
  name: "Option 1",
  value: "",
  test: ""
}, {
  name: "Option 2"
}, {
  name: "Option 3"
}, {
  name: "Option 4"
}]

describe("Test Component", () => {
  let props: AutocompleteProps;
  beforeEach(() => {
    props = {
      options: data,
      renderInput: () => <TextField></TextField>
    };
  });

  const renderComponent = () => render(<Autocomplete {...props} />);

  it("should render foo text correctly", () => {
    // props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Autocomplete");

    expect(component).toHaveTextContent("harvey was here");
  });
});
