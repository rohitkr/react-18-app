import React from "react";
import { render } from "@testing-library/react";
import Badge from "./Badge";
import Box from "../Box/Box";

const TestBadge = () => {
  return (
    <Badge
      label="Sample badge label"
      intent="info"
      variant="bold"
      type="status"
      dataTestId="badge"
    />
  );
};

describe("<BadgeComponent />", () => {
  test("render component", async () => {
    const baseRadioDom = render(
      <Box>
        <TestBadge />
      </Box>
    );
    const badgeEl = await baseRadioDom.getByTestId("badge");
    expect(badgeEl).toBeInTheDocument();
    expect(badgeEl).toHaveTextContent("Sample badge label");
  });
});
