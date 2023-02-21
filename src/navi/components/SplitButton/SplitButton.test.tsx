import React from "react";
import Box from "../Box/Box";
import { render } from "@testing-library/react";
import SplitButton from "./SplitButton";
import { ChevronDown } from "tabler-icons-react";
import { MenuItemType } from "../MenuItem/MenuItem.types";

const TestSplitButton = () => {
  return (
    <SplitButton
      dataTestId="splitbutton"
      intent="muted-light"
      buttonIcon={<ChevronDown />}
      tooltip="Open menu"
      buttonText="Split button"
      menuItems={[
        {
          type: MenuItemType.GROUP_HEADING,
          title: "Group Heading 1",
          value: "group_heading_1",
        },
        {
          type: MenuItemType.DESCRIPTIVE,
          title: "Descriptive menu item 1",
          value: "d_m_1",
        },
        {
          type: MenuItemType.DESCRIPTIVE,
          title: "Descriptive menu item 2",
          value: "d_m_2",
        },
        {
          type: MenuItemType.DESCRIPTIVE,
          title: "Descriptive menu item 3",
          value: "d_m_3",
        },
        {
          type: MenuItemType.DESCRIPTIVE,
          title: "Descriptive menu item 4",
          value: "d_m_4",
        },
        { type: MenuItemType.DIVIDER, value: "divider_m_i" },
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
