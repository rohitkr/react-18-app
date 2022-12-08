import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { LinkProps } from "./Link.types";
import Link from "./Link";

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<Link onClick={handleClick}>Click Me</Link>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

describe("Test Component", () => {
  let props: LinkProps;

  beforeEach(() => {
    props = {
      size: "large",
      children: "Submit",
      "data-testid": "sample-Link",
    };
  });

  const renderComponent = () => render(<Link {...props} />);

  it("should render Enter text correctly", () => {
    props.children = "Enter";
    const { getByTestId } = renderComponent();
    const Lnk = getByTestId("sample-Link");
    Lnk.click();
    expect(Lnk).toHaveTextContent("Enter");
  });
});
