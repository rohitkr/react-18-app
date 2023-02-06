
import React from "react";
import { render } from "@testing-library/react";
import Select from "./Select";
import { SelectProps } from "./Select.types";
import DescriptiveMenuItem from "../DescriptiveMenuItem/DescriptiveMenuItem";
import GroupHeadingMenuItem from "../GroupHeadingMenuItem/GroupHeadingMenuItem";

describe("Test Component", () => {
  let props: SelectProps;

  beforeEach(() => {
    props = {
      open: true,
      dataTestId: "select-component",
      className: "navi-select-menu-class-name",
      clearTooltipText: "Clear",
      openTooltipText: "Open",
    };
  });

  const renderComponent = () => render(<Select {...props}>
    <DescriptiveMenuItem
      title="Trend insight"
      description="Understand the performance"
      value={"Trend insight"}
    />
    <DescriptiveMenuItem
      title="Funnel Insight"
      description="Understand the journey"
      value={"Funnel Insight"}
    />
    <DescriptiveMenuItem
      title="Out-of-the-box matrix"
      description="Understand the usage"
      value={"Out-of-the-box matrix"}
    />
    <GroupHeadingMenuItem title={"Storybuilding"} />
    <DescriptiveMenuItem
      title="Description"
      description="Add for better understanding"
      value={"Description"}
    />
    <DescriptiveMenuItem
      title="Story"
      description="Add to summarize the insights"
      value={"Story"}
    />
  </Select>);

  it("should render select component properly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("select-component");

    expect(component).toBeVisible();
    expect(component).toHaveClass('navi-select-menu-class-name')
  });
});
