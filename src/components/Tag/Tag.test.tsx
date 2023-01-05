import React from "react";
import Tag from "./Tag";
import Box from "../Box/Box";
import { render } from "@testing-library/react";
const TestTag = () => {
  return (
    <Tag
      label="Sample tag label"
      intent="info"
      variant="bold"
      dataTestId="tag"
    />
  );
};
describe("<TagComponent />", () => {
  test("render component", async () => {
    const baseRadioDom = render(
      <Box>
        <TestTag />
      </Box>
    );
    const tagEl = await baseRadioDom.getByTestId("tag");
    expect(tagEl).toBeInTheDocument();
    expect(tagEl).toHaveTextContent("Sample tag label");
  });
});