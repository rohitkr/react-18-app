import React from "react";
import Box from "../Box/Box";
import { render } from "@testing-library/react";
import SplitButton from "./SplitButton";
import { ChevronDown } from "tabler-icons-react";

const TestSplitButton = () => {
  return (
    <SplitButton
      dataTestId="splitbutton"
      intent="muted-light"
      tooltip="Open menu"
      buttonText="Split button"
      menuItems={[
        {
          type: "group_heading",
          title: "Group Heading 1",
          value: "group_heading_1",
        },
        {
          type: "descriptive",
          title: "Descriptive menu item 1",
          value: "d_m_1",
        },
        {
          type: "descriptive",
          title: "Descriptive menu item 2",
          value: "d_m_2",
        },
        {
          type: "descriptive",
          title: "Descriptive menu item 3",
          value: "d_m_3",
        },
        {
          type: "descriptive",
          title: "Descriptive menu item 4",
          value: "d_m_4",
        },
        { type: "divider", value: "divider_m_i" },
      ]}
      menuProps={{
        width: "400px",
        menuPlacement: "right",
        hideOnSelect: true,
      }}
    />
  );
};

describe("<SplitButtonComponent />", () => {
  test("render component", async () => {
    const baseSplitButtonDom = render(
      <Box>
        <TestSplitButton />
      </Box>
    );
    const splitButtonEl = await baseSplitButtonDom.getByTestId("splitbutton");
    expect(splitButtonEl).toBeInTheDocument();
  });
});
