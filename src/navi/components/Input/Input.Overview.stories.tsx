import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import "./Input.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default {
  title: `Components/Input`,
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [size, setSize] = React.useState("large");
  const [tooltipPlacement, setTooltipPlacement] = React.useState("top");
  const [required, setRequired] = React.useState(false);
  const [type, setType] = React.useState("default");
  const [label, setLabel] = React.useState("Sample label");
  const [helperText, setHelperText] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [moreInfo, setMoreInfo] = React.useState("");
  const [maxCharacters, setMaxCharacters] = React.useState(0);
  const [placeholder, setPlaceholder] = React.useState("");

  const requiredValue = required ? `required` : "";
  const tooltipPlacementValue = tooltipPlacement
    ? `tooltipPlacement="${tooltipPlacement}"`
    : "";
  const maxCharacterValue = maxCharacters
    ? `maxCharacters={${maxCharacters}}`
    : "";

  const moreInfoValue = moreInfo ? `moreInfo="${moreInfo}"` : "";
  const helperTextValue = helperText ? `helperText="${helperText}"` : "";

  const successMessageValue = successMessage
    ? `successMessage="${successMessage}"`
    : "";

  const errorMessageValue = errorMessage
    ? `errorMessage="${errorMessage}"`
    : "";

  const placeholderValue = placeholder ? `placeholder="${placeholder}"` : "";
  const code = `
  // sample code
  <Input inputType="${type}" label="${label}" size="${size}"
        ${successMessageValue} ${errorMessageValue} 
        ${placeholderValue} ${maxCharacterValue} 
        ${helperTextValue} ${moreInfoValue} 
        ${tooltipPlacementValue} ${requiredValue} />
  `;

  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Text Input component.</p>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <Input inputType="default" />
      </div>
      <p>Note: Pass the 'value' prop to Input to make it a controlled input.</p>
      <h2>Input states</h2>
      <table>
        <thead>
          <tr>
            <td>
              <h3>Large Inputs</h3>
            </td>
            <td>
              <h3>Small Inputs</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h3>Default</h3>
            </td>
          </tr>
          <tr>
            <td>
              <Input
                inputType="default"
                label="Label"
                onClick={() => {
                  setType("default");
                  setLabel("Label");
                  setSize("large");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("");
                  setMaxCharacters(0);
                  setPlaceholder("");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
            <td>
              <Input
                size="small"
                inputType="default"
                label="Label"
                onClick={() => {
                  setType("default");
                  setLabel("Label");
                  setSize("small");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("");
                  setMaxCharacters(0);
                  setPlaceholder("");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Success</h3>
            </td>
          </tr>
          <tr>
            <td>
              <Input
                inputType="success"
                label="Label"
                onClick={() => {
                  setType("success");
                  setLabel("Label");
                  setSize("large");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("");
                  setMaxCharacters(0);
                  setPlaceholder("");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
            <td>
              <Input
                size="small"
                inputType="success"
                label="Label"
                onClick={() => {
                  setType("success");
                  setLabel("Label");
                  setSize("small");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("");
                  setMaxCharacters(0);
                  setPlaceholder("");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Critical</h3>
            </td>
          </tr>
          <tr>
            <td>
              <Input
                inputType="critical"
                label="Label"
                onClick={() => {
                  setType("critical");
                  setLabel("Label");
                  setSize("large");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("");
                  setMaxCharacters(0);
                  setPlaceholder("");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
            <td>
              <Input
                size="small"
                inputType="critical"
                label="Label"
                onClick={() => {
                  setType("critical");
                  setLabel("Label");
                  setSize("small");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("");
                  setMaxCharacters(0);
                  setPlaceholder("");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Disabled</h3>
            </td>
          </tr>
          <tr>
            <td>
              <Input
                inputType="disabled"
                label="Label"
                value="Disabled input"
                onClick={() => {
                  setType("disabled");
                  setLabel("Label");
                  setSize("large");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("");
                  setMaxCharacters(0);
                  setPlaceholder("");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
            <td>
              <Input
                size="small"
                inputType="disabled"
                label="Label"
                onClick={() => {
                  setType("disabled");
                  setLabel("Label");
                  setSize("small");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("");
                  setMaxCharacters(0);
                  setPlaceholder("");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Read only</h3>
            </td>
          </tr>
          <tr>
            <td>
              <Input
                inputType="read-only"
                label="Label"
                value="Read only value"
                onClick={() => {
                  setType("read-only");
                  setLabel("Label");
                  setSize("large");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("");
                  setMaxCharacters(0);
                  setPlaceholder("");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
            <td>
              <Input
                size="small"
                inputType="read-only"
                label="Label"
                onClick={() => {
                  setType("read-only");
                  setLabel("Label");
                  setSize("small");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("");
                  setMaxCharacters(0);
                  setPlaceholder("");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Input types</h2>
      <h3>Basic</h3>
      <Input
        inputType="default"
        onClick={() => {
          setType("default");
          setLabel("");
          setSize("large");
          setRequired(false);
          setTooltipPlacement("");
          setMoreInfo("");
          setMaxCharacters(0);
          setPlaceholder("");
          setErrorMessage("");
          setSuccessMessage("");
          setHelperText("");
        }}
      />
      <h3>Input with label</h3>
      <Input
        inputType="default"
        label="Sample label"
        onClick={() => {
          setType("default");
          setLabel("Sample label");
          setSize("large");
          setRequired(false);
          setTooltipPlacement("");
          setMoreInfo("");
          setMaxCharacters(0);
          setPlaceholder("");
          setErrorMessage("");
          setSuccessMessage("");
          setHelperText("");
        }}
      />
      <h3>Input with label and required</h3>
      <p>Note: Label is mandatory while using 'required' property on inputs</p>
      <Input
        inputType="default"
        label="Sample label"
        required
        onClick={() => {
          setType("default");
          setLabel("Sample label");
          setSize("large");
          setRequired(true);
          setTooltipPlacement("");
          setMoreInfo("");
          setMaxCharacters(0);
          setPlaceholder("");
          setErrorMessage("");
          setSuccessMessage("");
          setHelperText("");
        }}
      />
      <h3>Input with more info</h3>
      <Input
        inputType="default"
        label="Sample label"
        moreInfo="More information tooltip"
        tooltipPlacement="top"
        onClick={() => {
          setType("default");
          setLabel("Sample label");
          setSize("large");
          setRequired(false);
          setTooltipPlacement("top");
          setMoreInfo("More information tooltip");
          setMaxCharacters(0);
          setPlaceholder("");
          setErrorMessage("");
          setSuccessMessage("");
          setHelperText("");
        }}
      />
      <h3>Input with character limit</h3>
      <Input
        inputType="default"
        label="Sample label"
        maxCharacters={20}
        onClick={() => {
          setMaxCharacters(20);
          setType("default");
          setLabel("Sample label");
          setSize("large");
          setRequired(false);
          setTooltipPlacement("");
          setMoreInfo("");
          setPlaceholder("");
          setErrorMessage("");
          setSuccessMessage("");
          setHelperText("");
        }}
      />
      <h3>Input with placeholder</h3>
      <Input
        inputType="default"
        label="Sample label"
        placeholder="Placeholder text comes here Placeholder text comes here Placeholder text comes here"
        onClick={() => {
          setPlaceholder('"Placeholder text comes here"');
          setType("default");
          setLabel("Sample label");
          setSize("large");
          setRequired(false);
          setTooltipPlacement("");
          setMoreInfo("");
          setHelperText("");
          setErrorMessage("");
          setSuccessMessage("");
        }}
      />
      <h3>Input with placeholder small</h3>
      <Input
        inputType="default"
        label="Sample label"
        size="small"
        placeholder="Placeholder text comes here Placeholder text comes here Placeholder text comes here"
        onClick={() => {
          setPlaceholder('"Placeholder text comes here"');
          setType("default");
          setLabel("Sample label");
          setSize("large");
          setRequired(false);
          setTooltipPlacement("");
          setMoreInfo("");
          setHelperText("");
          setErrorMessage("");
          setSuccessMessage("");
        }}
      />
      <h3>Input with helper text</h3>
      <Input
        inputType="default"
        label="Sample label"
        helperText="This is a helper text"
        minWidth={800}
        onClick={() => {
          setType("default");
          setLabel("Sample label");
          setSize("large");
          setRequired(false);
          setTooltipPlacement("");
          setMoreInfo("");
          setHelperText("This is a helper text");
          setPlaceholder("");
          setErrorMessage("");
          setSuccessMessage("");
        }}
      />
      <h3>Input with success message</h3>
      <p>
        Note: In order to show the success message, the state of the input
        should also be 'success'. Otherwise the input uses 'default' state
        fallback.
      </p>
      <Input
        inputType="success"
        label="Sample label"
        successMessage="Success message"
        onClick={() => {
          setType("success");
          setLabel("Sample label");
          setSize("large");
          setRequired(false);
          setTooltipPlacement("");
          setMoreInfo("");
          setHelperText("This is a helper text");
          setPlaceholder("");
          setErrorMessage("");
          setSuccessMessage("Success message");
        }}
      />
      <h3>Input with error message</h3>
      <p>
        Note: In order to show the error message, the state of the input
        should also be 'critical'. Otherwise the input uses 'default' state
        fallback.
      </p>
      <Input
        inputType="critical"
        label="Sample label"
        errorMessage="Error message"
        onClick={() => {
          setType("critical");
          setLabel("Sample label");
          setSize("large");
          setRequired(false);
          setTooltipPlacement("");
          setMoreInfo("");
          setHelperText("This is a helper text");
          setPlaceholder("");
          setErrorMessage("Error message");
          setSuccessMessage("");
        }}
      />
      <h2>Input with all types</h2>
      <Input
        inputType="success"
        label="Sample label"
        successMessage="Success message"
        helperText="This is a helper text"
        placeholder="Placeholder goes here"
        moreInfo="More info message"
        required
        onClick={() => {
          setType("success");
          setLabel("Sample label");
          setSize("large");
          setRequired(true);
          setTooltipPlacement("top");
          setMoreInfo("More info message");
          setHelperText("This is a helper text");
          setPlaceholder("Placeholder goes here");
          setErrorMessage("");
          setSuccessMessage("Success message");
        }}
      />
      <h2>Password field</h2>
      <Input
        inputType="default"
        label="Sample label"
        helperText="This is a helper text"
        placeholder="Placeholder goes here"
        moreInfo="More info message"
        type='password'
        required
        onClick={() => {
          setType("default");
          setLabel("Sample label");
          setSize("large");
          setRequired(true);
          setTooltipPlacement("top");
          setMoreInfo("More info message");
          setHelperText("This is a helper text");
          setPlaceholder("Placeholder goes here");
          setErrorMessage("");
          setSuccessMessage("");
        }}
      />
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
