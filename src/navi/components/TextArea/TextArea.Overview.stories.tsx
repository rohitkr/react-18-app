import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea from "./TextArea";
import Box from "../Box/Box";
import "./TextArea.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./TextArea.Overview.scss";

export default {
  title: `Components/TextArea`,
  component: TextArea,
  argTypes: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
  const [tooltipPlacement, setTooltipPlacement] = React.useState("");
  const [required, setRequired] = React.useState(false);
  const [type, setType] = React.useState("default");
  const [label, setLabel] = React.useState("Sample label");
  const [helperText, setHelperText] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [moreInfo, setMoreInfo] = React.useState("");
  const [maxCharacters, setMaxCharacters] = React.useState(0);
  const [placeholder, setPlaceholder] = React.useState("");
  const [code, setCode] = React.useState(``);

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

  const labelValue = label ? `label="${label}"` : "";

  const placeholderValue = placeholder ? `placeholder="${placeholder}"` : "";

  React.useEffect(() => {
    setCode(`
    <TextArea intent="${type}" ${labelValue}
          ${successMessageValue} ${errorMessageValue} 
          ${placeholderValue} ${maxCharacterValue} 
          ${helperTextValue} ${moreInfoValue} 
          ${tooltipPlacementValue} ${requiredValue} />
    `);
  }, [
    type,
    labelValue,
    successMessageValue,
    errorMessageValue,
    placeholderValue,
    maxCharacterValue,
    helperTextValue,
    moreInfoValue,
    tooltipPlacementValue,
    requiredValue,
  ]);

  return (
    <Box>
      <Box>
        <h1>Overview</h1>
        <p>Documentation for the Navi Textarea component.</p>
        <Box
          style={{ display: "flex", justifyContent: "center", margin: "50px" }}
        >
          <TextArea
            maxHeight="500px"
            maxWidth="500px"
            height="400px"
            width="400px"
            intent="default"
            label="Text area label"
            onClick={() => {
              setType("default");
              setLabel("");
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
        </Box>
        <p>
          Note: Pass the 'value' prop to Textarea to make it a controlled
          Textarea.
        </p>
        <h2>Textarea states</h2>
      </Box>
      <table>
        <tbody>
          <tr>
            <td>
              <h3>Default</h3>
            </td>
          </tr>
          <tr>
            <td>
              <TextArea
                intent="default"
                onClick={() => {
                  setType("default");
                  setLabel("");
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
              <TextArea
                intent="success"
                onClick={() => {
                  setType("success");
                  setLabel("");
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
              <TextArea
                intent="critical"
                onClick={() => {
                  setType("critical");
                  setLabel("");
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
              <TextArea
                disabled
                onClick={() => {
                  setType("disabled");
                  setLabel("");
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
              <h3>Read-only</h3>
            </td>
          </tr>
          <tr>
            <td>
              <TextArea
                intent="read-only"
                onClick={() => {
                  setType("read-only");
                  setLabel("");
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
              <h2>Text area types</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Basic</h3>
            </td>
          </tr>
          <tr>
            <td>
              <TextArea
                intent="default"
                onClick={() => {
                  setType("default");
                  setLabel("");
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
              <h3>Textarea with label</h3>
            </td>
          </tr>
          <tr>
            <td>
              <TextArea
                intent="default"
                label="Sample Label"
                onClick={() => {
                  setType("default");
                  setLabel("Sample Label");
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
              <h3>Textarea with label and required</h3>
            </td>
          </tr>
          <tr>
            <td>
              <TextArea
                intent="default"
                label="Sample Label"
                required
                onClick={() => {
                  setType("default");
                  setLabel("Sample Label");
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
            </td>
          </tr>
          <tr>
            <td>
              <h3>Textarea with label and more info</h3>
            </td>
          </tr>
          <tr>
            <td>
              <TextArea
                intent="default"
                label="Sample Label"
                moreInfo="More info text"
                onClick={() => {
                  setType("default");
                  setLabel("Sample Label");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("More info text");
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
              <h3>Textarea with label and max characters</h3>
            </td>
          </tr>
          <tr>
            <td>
              <TextArea
                intent="default"
                label="Sample Label"
                maxCharacters={50}
                moreInfo="More info text"
                onClick={() => {
                  setType("default");
                  setLabel("Sample Label");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("More info text");
                  setMaxCharacters(50);
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
              <h3>Textarea with label, max characters and placeholder</h3>
            </td>
          </tr>
          <tr>
            <td>
              <TextArea
                intent="default"
                label="Sample Label"
                maxCharacters={50}
                moreInfo="More info text"
                placeholder="Placeholder text"
                onClick={() => {
                  setType("default");
                  setLabel("Sample Label");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("More info text");
                  setMaxCharacters(50);
                  setPlaceholder("Placeholder text");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("");
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>
                Textarea with label, max characters, placeholder and helper text
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <TextArea
                intent="default"
                label="Sample Label"
                maxCharacters={10}
                moreInfo="More info text"
                placeholder="Placeholder text"
                value="Abhishek GUpta Abhishek Gupta"
                helperText="Sample helper text"
                onChange={({ event, value }) => console.log("Change:", value)}
                onClick={() => {
                  setType("default");
                  setLabel("Sample Label");
                  setRequired(false);
                  setTooltipPlacement("");
                  setMoreInfo("More info text");
                  setMaxCharacters(50);
                  setPlaceholder("Placeholder text");
                  setErrorMessage("");
                  setSuccessMessage("");
                  setHelperText("Sample helper text");
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Textarea with all options enabled</h3>
            </td>
          </tr>
          <tr>
            <td>
              <TextArea
                intent="success"
                successMessage="Sample Success message"
                label="Sample Label"
                maxCharacters={10}
                moreInfo="More info text"
                placeholder="Placeholder text"
                helperText="Sample helper text"
                required
                onClick={() => {
                  setType("default");
                  setLabel("Sample Label");
                  setRequired(true);
                  setTooltipPlacement("");
                  setMoreInfo("More info text");
                  setMaxCharacters(50);
                  setPlaceholder("Placeholder text");
                  setErrorMessage("");
                  setSuccessMessage("Sample Success message");
                  setHelperText("Sample helper text");
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Box>
        <p>Click on the button above to see the Text area code.</p>
        <h2>Sample code</h2>
        <Box className="codeArea">
          <SyntaxHighlighter
            language="javascript"
            style={docco}
            wrapLongLines="none"
          >
            {code}
          </SyntaxHighlighter>
        </Box>
      </Box>
    </Box>
  );
};

export const Overview = Template.bind({});
