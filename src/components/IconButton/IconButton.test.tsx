import React from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import { IconButtonProps } from "./IconButton.types";
import IconButton from "./IconButton";

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<IconButton title="Icon button tooltip" onClick={handleClick}>Click Me</IconButton>)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

describe("Test Component", () => {
  let props: IconButtonProps;

  beforeEach(() => {
    props = {
      title: "Icon button tooltip",
      variant: "primary",
      intent: 'prime',
      size: 'large',
      children: 'Submit',
      "data-testid": "sample-button"
    };
  });

  const renderComponent = () => render(<IconButton {...props} />);

  it("should render Enter text correctly", () => {
    props.children = "Enter";
    const { getByTestId } = renderComponent();

    const Btn = getByTestId("sample-button");
    Btn.click();
    expect(Btn).toHaveTextContent('Enter');
  });
});
