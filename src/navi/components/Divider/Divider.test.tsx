import React from "react";
import { render } from "@testing-library/react";
import Divider from "./Divider";

const TestDivider = () => {
  return (
    <Divider
      orientation="horizontal"
      weight="2"
      data-testid="divider"
    />
  );
};

describe("<DividerComponent />", () => {
  test("render component", async () => {
    const baseRadioDom = render(
        <TestDivider />
    );
    const badgeEl = await baseRadioDom.getByTestId("divider");
    expect(badgeEl).toBeInTheDocument();
  });
});
