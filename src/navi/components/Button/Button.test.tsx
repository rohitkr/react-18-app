import React from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import { ButtonProps } from "./Button.types";
import Button from "./Button";

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      variant: "primary",
      intent: 'prime',
      size: 'large',
      children: 'Submit',
      "data-testid": "sample-button"
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render Enter text correctly", () => {
    props.children = "Enter";
    const { getByTestId } = renderComponent();

    const Btn = getByTestId("sample-button");
    Btn.click();
    expect(Btn).toHaveTextContent('Enter');
  });
});
