import React from "react";
import SystemIcon from "./SystemIcon";
import Box from "../Box/Box";
import { render } from "@testing-library/react";
import { X } from "tabler-icons-react";

const TestSystemIcon = () => {
  return (
    <SystemIcon intent="info" data-testid="systemIcon">
      <X />
    </SystemIcon>
  );
};
describe("<TagComponent />", () => {
  test("render component", async () => {
    const baseRadioDom = render(
      <Box>
        <TestSystemIcon />
      </Box>
    );
    const tagEl = await baseRadioDom.getByTestId("systemIcon");
    expect(tagEl).toBeInTheDocument();
  });
});
