import React from "react";
import { render } from '@testing-library/react'
import { BannerAlertProps } from "./BannerAlert.types";
import BannerAlert from "./BannerAlert";

const BannerAlertRender = (props: BannerAlertProps) => {
  return (
    <BannerAlert
      actionButtonText="Learn more"
      autoHideDuration={6000}
      headingText="Critical"
      intent="critical"
      onClose={() => { }}
      open
      showActionButton
      showCloseButton
      subtitleText="This is an error alert — check it out!"
      data-testid="sample-alert"
    />
  );
};

describe("Test BannerAlert Component", () => {
  const baseDom = render(<BannerAlertRender />);
  const eleRef = baseDom.getByTestId("sample-alert");

  it("BannerAlert should be in the document.", () => {
    expect(eleRef).toBeInTheDocument();
  });

  it("BannerAlert should contain the heading text.", () => {
    expect(eleRef).toHaveTextContent("Critical");
  });

  it("BannerAlert should contain the subtitle text.", () => {
    expect(eleRef).toHaveTextContent("This is an error alert — check it out!");
  });
});
