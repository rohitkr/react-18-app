import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SystemIcon from "./SystemIcon";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Box from "../Box/Box";
import { X } from "tabler-icons-react";

export default {
  title: `Components/SystemIcon`,
  component: SystemIcon,
  argTypes: {},
} as ComponentMeta<typeof SystemIcon>;

const Template: ComponentStory<typeof SystemIcon> = (args) => {
  const [intent, setIntent] = useState('intent="info"');
  const [size, setSize] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);
  const [transparent, setTransparent] = React.useState(false);

  const intentValue = intent ? `intent="${intent}"` : "";
  const sizeValue = size ? `size="${size}"` : "";
  const disabledValue = disabled ? "disabled" : "";
  const transparentValue = transparent ? "transparent" : "";

  const code = `
  // sample code
  import { IconButton, PhotoAdd } from 'navi-design-system';
  
  export default () => {
    return (
      <SystemIcon ${intentValue} ${sizeValue} ${disabledValue} ${transparentValue}>
        <PhotoAdd />
      </SystemIcon>
    )
  }

  `;

  return (
    <>
      <div style={{ color: "#666666", fontFamily: "Inter" }}>
        <h1>Overview</h1>
        <h3>SystemIcon Component</h3>
        <h2>Sizes</h2>
        <h3>Large</h3>
        <Box
          onClick={() => {
            setSize("large");
            setIntent("info");
            setTransparent(true);
            setDisabled(false);
          }}
        >
          <SystemIcon size="large" intent="info" transparent>
            <X style={{height: '60px', width: "60px"}}/>
          </SystemIcon>
        </Box>
        <h3>Medium</h3>
        <Box
          onClick={() => {
            setSize("medium");
            setIntent("success");
            setTransparent(true);
            setDisabled(false);
          }}
        >
          <SystemIcon size="medium" intent="success" transparent>
            <X />
          </SystemIcon>
        </Box>
        <h3>Small</h3>
        <Box
          onClick={() => {
            setSize("small");
            setIntent("warning");
            setTransparent(true);
            setDisabled(false);
          }}
        >
          <SystemIcon size="small" intent="warning" transparent>
            <X />
          </SystemIcon>
        </Box>
        <h2> Non-transparent system icons</h2>
        <table
          style={{ width: "100%", textAlign: "left", tableLayout: "fixed" }}
        >
          <thead>
            <tr style={{ height: "70px", color: "#333333" }}>
              <td>muted-dark</td>
              <td>muted-light</td>
              <td>success</td>
              <td>critical</td>
              <td>info</td>
              <td>warning</td>
              <td>Disabled</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "70px" }}>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("muted-dark");
                    setTransparent(false);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="muted-dark">
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("muted-light");
                    setTransparent(false);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="muted-light">
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("success");
                    setTransparent(false);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="success">
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("critical");
                    setTransparent(false);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="critical">
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("info");
                    setTransparent(false);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="info">
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("warning");
                    setTransparent(false);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="warning">
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("warning");
                    setTransparent(false);
                    setDisabled(true);
                  }}
                >
                  <SystemIcon size="large" intent="warning" disabled>
                    <X />
                  </SystemIcon>
                </Box>
              </td>
            </tr>
          </tbody>
        </table>
        <h2> Transparent system icons</h2>
        <table
          style={{ width: "100%", textAlign: "left", tableLayout: "fixed" }}
        >
          <thead>
            <tr style={{ height: "70px", color: "#333333" }}>
              <td>muted-dark</td>
              <td>muted-light</td>
              <td>success</td>
              <td>critical</td>
              <td>info</td>
              <td>warning</td>
              <td>Disabled</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "70px" }}>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("muted-dark");
                    setTransparent(true);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="muted-dark" transparent>
                    <X size={48} />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("muted-light");
                    setTransparent(true);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="muted-light" transparent>
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("success");
                    setTransparent(true);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="success" transparent>
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("critical");
                    setTransparent(true);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="critical" transparent>
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("info");
                    setTransparent(true);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="info" transparent>
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("warning");
                    setTransparent(true);
                    setDisabled(false);
                  }}
                >
                  <SystemIcon size="large" intent="warning" transparent>
                    <X />
                  </SystemIcon>
                </Box>
              </td>
              <td>
                <Box
                  onClick={() => {
                    setSize("large");
                    setIntent("warning");
                    setTransparent(true);
                    setDisabled(true);
                  }}
                >
                  <SystemIcon size="large" intent="warning" disabled>
                    <X />
                  </SystemIcon>
                </Box>
              </td>
            </tr>
          </tbody>
        </table>

        <p>Click on the button above to see the code.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export const Overview = Template.bind({});
