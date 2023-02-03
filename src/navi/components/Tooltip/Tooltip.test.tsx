import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tooltip from "./Tooltip";
import Button from "../Button/Button";

test("Show title in tooltip", async () => {
  const baseDom = render(
    <Tooltip title="Test tooltip" position="top">
      <Button>Hover over me</Button>
    </Tooltip>
  );
  const button = await baseDom.findByRole('button');
  fireEvent.mouseEnter(button);
  const tooltip = await baseDom.findByText('Test tooltip');
  expect(tooltip).toBeInTheDocument();
});
