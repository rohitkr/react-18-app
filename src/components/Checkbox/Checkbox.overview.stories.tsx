import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./CheckboxOverview.scss";

export default {
  title: `Components/Checkbox`,
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [size, setSize] = useState<"small" | "standard">("standard");
  const [checked, setChecked] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);

  const code = `
    // sample code
    <Checkbox  label="Checkbox"  value="checkbox" ${
      size === "standard" ? "" : `size="${size}"`
    } ${checked ? `checked` : ""} ${indeterminate ? `indeterminate` : ""}/>
    `;

  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Checkbox component</p>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <Checkbox
          label="Checkbox"
          value="checkbox"
          size={size}
          checked={checked}
          indeterminate={indeterminate}
        />
      </div>
      <h2>Checkbox states</h2>
      <table>
        <thead>
          <tr>
            <td>
              <div className="cellContent">
                <h3>Size</h3>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <h3>Unchecked</h3>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <h3>Checked</h3>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <h3>Indeterminate</h3>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="cellContent">
                <b>Standard</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Checkbox
                  size="standard"
                  onClick={() => {
                    setSize("standard");
                    setChecked(false);
                    setIndeterminate(false);
                  }}
                  label="Checkbox"
                  value="checkbox"
                ></Checkbox>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Checkbox
                  size="standard"
                  checked
                  onClick={() => {
                    setSize("standard");
                    setChecked(true);
                    setIndeterminate(false);
                  }}
                  label="Checkbox"
                  value="checkbox"
                ></Checkbox>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Checkbox
                  size="standard"
                  indeterminate
                  onClick={() => {
                    setSize("standard");
                    setIndeterminate(true);
                    setChecked(false);
                  }}
                  label="Checkbox"
                  value="checkbox"
                ></Checkbox>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="cellContent">
                <b>Small</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Checkbox
                  size="small"
                  onClick={() => {
                    setSize("small");
                    setChecked(false);
                    setIndeterminate(false);
                  }}
                  label="Checkbox"
                  value="checkbox"
                ></Checkbox>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Checkbox
                  size="small"
                  checked
                  onClick={() => {
                    setSize("small");
                    setChecked(true);
                    setIndeterminate(false);
                  }}
                  label="Checkbox"
                  value="checkbox"
                ></Checkbox>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Checkbox
                  size="small"
                  indeterminate
                  onClick={() => {
                    setSize("small");
                    setIndeterminate(true);
                    setChecked(false);
                  }}
                  label="Checkbox"
                  value="checkbox"
                ></Checkbox>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Click on the Checkbox above to see the Checkbox code.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export const Overview = Template.bind({});
