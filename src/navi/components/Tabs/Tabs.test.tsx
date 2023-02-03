import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import Box from "../Box/Box";
import { render } from "@testing-library/react";

const TestTabs = () => {
  const handleChange = jest.fn();

  return (
    <Tabs onChange={handleChange} dataTestId="tabs">
      <Tab
        labeltext="Tab 1"
        value={"a"}
        dataTestId="taba"
        aria-label="taba"
      />
      <Tab
        labeltext="Tab 2"
        value={"b"}
        dataTestId="tabb"
        aria-label="tabb"
      />
      <Tab
        labeltext="Tab 3"
        value={"c"}
        dataTestId="tabc"
        aria-label="tabc"
      />
    </Tabs>
  );
};
describe("<TabsComponent />", () => {
  test("render component", async () => {
    const screen = render(
      <Box>
        <TestTabs />
      </Box>
    );

    // Test if Tabs are loading
    const tabsEl = await screen.getByRole("tablist");
    expect(tabsEl).toBeInTheDocument();

    //Test if Tab a is showing
    const tabbEl = await screen.getByRole("tab", { name: "tabb" });
    expect(tabbEl).toBeInTheDocument();
  });
});
