import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";
import Button from "../Button/Button";
import "./TooltipOverview.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default {
  title: `Components/Tooltip`,
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  const [position, setPosition] = React.useState("top");
  const [showArrow, setShowArrow] = React.useState(true);

  const code = `
  // sample code
  <Tooltip title="Sample ${position} tooltip" position="${position}" showArrow={${showArrow}}>
  <Button intent="prime" size="large" variant="primary"/>
   Hover over me
  </Button>
  </Tooltip>
  `;

  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi tooltip component</p>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <Tooltip position="top" title="Sample tooltip">
          <Button>Button</Button>
        </Tooltip>
      </div>
      <h2>Tooltip Top Poistions</h2>
      <table>
        <thead>
          <tr>
            <td>
              <div className="cellContent">
                <b>top-start</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>top</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>top-end</b>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="cellContent">
                <Tooltip position="top-start" title="Top-start tooltip">
                  <Button
                    onClick={() => {
                      setPosition("top-start");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Tooltip position="top" title="Top tooltip">
                  <Button
                    onClick={() => {
                      setPosition("top");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Tooltip position="top-end" title="Top-end tooltip">
                  <Button
                    onClick={() => {
                      setPosition("top-end");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Tooltip Bottom Poistions</h2>
      <table>
        <thead>
          <tr>
            <td>
              <div className="cellContent">
                <b>bottom-start</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>bottom</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>bottom-end</b>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="cellContent">
                <Tooltip position="bottom-start" title="Bottom-start tooltip">
                  <Button
                    onClick={() => {
                      setPosition("bottom-start");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Tooltip position="bottom" title="Bottom tooltip">
                  <Button
                    onClick={() => {
                      setPosition("bottom");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Tooltip position="bottom-end" title="Bottom-end tooltip">
                  <Button
                    onClick={() => {
                      setPosition("bottom-end");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Tooltip Left Poistions</h2>
      <table style={{ marginTop: "40px" }}>
        <tbody>
          <tr>
            <td>
              <div className="cellContent">
                <b>left-start</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Tooltip
                  position="left-start"
                  title="Sample Navi Left start tooltip component demo"
                >
                  <Button
                    onClick={() => {
                      setPosition("left-start");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="cellContent">
                <b>left</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Tooltip position="left" title="Left tooltip">
                  <Button
                    onClick={() => {
                      setPosition("left");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="cellContent">
                <b>left-end</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Tooltip
                  position="left-end"
                  title="Sample Navi Left end tooltip component demo"
                >
                  <Button
                    onClick={() => {
                      setPosition("left-end");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Tooltip Right Poistions</h2>
      <table style={{ marginTop: "40px" }}>
        <tbody>
          <tr>
            <td>
              <div className="cellContent">
                <Tooltip
                  position="right-start"
                  title="Sample Navi right start tooltip component demo"
                >
                  <Button
                    onClick={() => {
                      setPosition("right-start");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>right-start</b>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="cellContent">
                <Tooltip position="right" title="Right tooltip">
                  <Button
                    onClick={() => {
                      setPosition("right");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>right</b>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="cellContent">
                <Tooltip
                  position="right-end"
                  title="Sample Navi right end tooltip component demo"
                >
                  <Button
                    onClick={() => {
                      setPosition("right-end");
                      setShowArrow(true);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>right-end</b>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Tooltip without arrow</h2>
      <table>
        <thead>
          <tr>
            <td>
              <div className="cellContent">
                <b>top</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>left</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>right</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>bottom</b>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="cellContent">
                <Tooltip
                  position="top"
                  title="Top no arrow tooltip"
                  showArrow={false}
                >
                  <Button
                    onClick={() => {
                      setPosition("top");
                      setShowArrow(false);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Tooltip
                  position="left"
                  title="Left no arrow tooltip"
                  showArrow={false}
                >
                  <Button
                    onClick={() => {
                      setPosition("left");
                      setShowArrow(false);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Tooltip
                  position="right"
                  title="Right no arrow tooltip"
                  showArrow={false}
                >
                  <Button
                    onClick={() => {
                      setPosition("right");
                      setShowArrow(false);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Tooltip
                  position="bottom"
                  title="Bottom no arrow tooltip"
                  showArrow={false}
                >
                  <Button
                    onClick={() => {
                      setPosition("bottom");
                      setShowArrow(false);
                    }}
                  >
                    Button
                  </Button>
                </Tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>Click on the button above to see the tooltip code.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const Overview = Template.bind({});
