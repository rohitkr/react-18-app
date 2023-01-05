import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";
import Box from "../Box/Box";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { InfoCircle } from "tabler-icons-react";
import './Badge.overview.scss'

export default {
  title: `Components/Badge`,
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  const [size, setSize] = React.useState("");
  const [type, setType] = React.useState("");
  const [label, setLabel] = React.useState("Sample label");
  const [intent, setIntent] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [leadingIcon, setLeadingIcon] = React.useState("");
  const [trailingIcon, setTrailingIcon] = React.useState("");

  const sizeValue = size ? `size="${size}"` : "";
  const typeValue = type ? `type="${type}"` : "";
  const labelValue = label ? `label="${label}"` : "";
  const intentValue = intent ? `intent="${intent}"` : "";
  const variantValue = variant ? `variant="${variant}"` : "";
  const leadingIconValue = leadingIcon
    ? `leadingIcon={<${leadingIcon} />}`
    : "";
  const trailingIconValue = trailingIcon
    ? `leadingIcon={<${trailingIcon} />}`
    : "";

  const code = `
    // sample code
    <Badge ${sizeValue} ${typeValue} ${labelValue} ${intentValue} ${variantValue} ${leadingIconValue} ${trailingIconValue}/>
    `;
  return (
    <Box className="container">
      <Box >Overview</Box>
      <Box >Documentation for the Navi Badge component</Box>
      <Box >Here is a sample badge component.</Box>
      <Box
        onClick={() => {
          setType("status");
          setLabel("Sample Badge");
          setSize("large");
          setIntent("");
          setVariant("");
          setLeadingIcon("");
          setTrailingIcon("");
        }}
      >
        <Badge type="status" label="Sample Badge" />
      </Box>
      <Box >Badge Size</Box>
      <Box >Standard</Box>
      <Box
        onClick={() => {
          setType("status");
          setLabel("Sample Badge");
          setSize("large");
          setIntent("");
          setVariant("");
          setLeadingIcon("");
          setTrailingIcon("");
        }}
      >
        <Badge type="status" label="Sample Badge" size="large" />
      </Box>
      <Box >Small</Box>
      <Box
        onClick={() => {
          setType("status");
          setLabel("Sample Badge");
          setSize("small");
          setIntent("");
          setVariant("");
          setLeadingIcon("");
          setTrailingIcon("");
        }}
      >
        <Badge type="status" label="Sample Badge" size="small" />
      </Box>
      <Box >Badge with icons</Box>
      <Box >Leading icon</Box>
      <Box >Size - Standard</Box>
      <Box
        onClick={() => {
          setType("status");
          setLabel("Sample Badge");
          setSize("large");
          setIntent("");
          setVariant("");
          setLeadingIcon("InfoCircle");
          setTrailingIcon("");
        }}
      >
        <Badge
          type="status"
          label="Sample Badge"
          size="large"
          LeadingIcon={InfoCircle}
        />
      </Box>
      <Box >Size - Small</Box>
      <Box
        onClick={() => {
          setType("status");
          setLabel("Sample Badge");
          setSize("small");
          setIntent("");
          setVariant("");
          setLeadingIcon("InfoCircle");
          setTrailingIcon("");
        }}
      >
        <Badge
          type="status"
          label="Sample Badge"
          size="small"
          LeadingIcon={InfoCircle}
        />
      </Box>
      <Box >Trailing icon</Box>
      <Box >Size - Standard</Box>
      <Box
        onClick={() => {
          setType("status");
          setLabel("Sample Badge");
          setSize("large");
          setIntent("");
          setVariant("");
          setLeadingIcon("");
          setTrailingIcon("InfoCircle");
        }}
      >
        <Badge
          type="status"
          label="Sample Badge"
          size="large"
          TrailingIcon={InfoCircle}
        />
      </Box>
      <Box >Size - small</Box>
      <Box
        onClick={() => {
          setType("status");
          setLabel("Sample Badge");
          setSize("small");
          setIntent("");
          setVariant("");
          setLeadingIcon("");
          setTrailingIcon("InfoCircle");
        }}
      >
        <Badge
          type="status"
          label="Sample Badge"
          size="small"
          TrailingIcon={InfoCircle}
        />
      </Box>
      <Box >Badge Types</Box>
      <Box >Status badge</Box>
      <table>
        <thead>
          <tr>
            <td>
              <h3>Variant</h3>
            </td>
            <td>
              <h3>muted</h3>
            </td>
            <td>
              <h3>info</h3>
            </td>
            <td>
              <h3>success</h3>
            </td>
            <td>
              <h3>warning</h3>
            </td>
            <td>
              <h3>critical</h3>
            </td>
            <td>
              <h3>orange</h3>
            </td>
            <td>
              <h3>crimson</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h3>Neutral</h3>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("muted");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="neutral"
                  intent="muted"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("info");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="neutral"
                  intent="info"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("success");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="neutral"
                  intent="success"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("warning");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="neutral"
                  intent="warning"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("critical");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="neutral"
                  intent="critical"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("orange");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="neutral"
                  intent="orange"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("crimson");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="neutral"
                  intent="crimson"
                  label="Sample badge"
                />
              </Box>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Bold</h3>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("muted");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="bold"
                  intent="muted"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("info");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="bold"
                  intent="info"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("success");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="bold"
                  intent="success"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("warning");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="bold"
                  intent="warning"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("critical");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="bold"
                  intent="critical"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("orange");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="bold"
                  intent="orange"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("crimson");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="bold"
                  intent="crimson"
                  label="Sample badge"
                />
              </Box>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Transparent</h3>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("muted");
                  setVariant("transparent");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="transparent"
                  intent="muted"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("info");
                  setVariant("transparent");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="transparent"
                  intent="info"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("success");
                  setVariant("transparent");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="transparent"
                  intent="success"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("warning");
                  setVariant("transparent");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="transparent"
                  intent="warning"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("critical");
                  setVariant("transparent");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="transparent"
                  intent="critical"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("orange");
                  setVariant("transparent");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="transparent"
                  intent="orange"
                  label="Sample badge"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("crimson");
                  setVariant("transparent");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="transparent"
                  intent="crimson"
                  label="Sample badge"
                />
              </Box>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Outlined</h3>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("muted");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="outline"
                  intent="muted"
                  label="123"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("info");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="outline"
                  intent="info"
                  label="123"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("success");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="outline"
                  intent="success"
                  label="123"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("warning");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="outline"
                  intent="warning"
                  label="123"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("critical");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="outline"
                  intent="critical"
                  label="123"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("orange");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="outline"
                  intent="orange"
                  label="123"
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("status");
                  setLabel("Sample badge");
                  setSize("large");
                  setIntent("crimson");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge
                  type="status"
                  variant="outline"
                  intent="crimson"
                  label="123"
                />
              </Box>
            </td>
          </tr>
        </tbody>
      </table>
      <Box >Notification badge</Box>
      <table>
        <thead>
          <tr>
            <td>Variant</td>
            <td>Muted</td>
            <td>Info</td>
            <td>Success</td>
            <td>Warning</td>
            <td>Critical</td>
            <td>Orange</td>
            <td>Crimson</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bold</td>
            <td>
              <Box
                onClick={() => {
                  setType("notification");
                  setLabel("");
                  setSize("");
                  setIntent("muted");
                  setVariant("");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge type="notification" intent="muted" />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("notification");
                  setLabel("");
                  setSize("");
                  setIntent("info");
                  setVariant("");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge type="notification" intent="info" />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("notification");
                  setLabel("");
                  setSize("");
                  setIntent("success");
                  setVariant("");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge type="notification" intent="success" />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("notification");
                  setLabel("");
                  setSize("");
                  setIntent("warning");
                  setVariant("");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge type="notification" intent="warning" />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("notification");
                  setLabel("");
                  setSize("");
                  setIntent("critical");
                  setVariant("");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge type="notification" intent="critical" />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("notification");
                  setLabel("");
                  setSize("");
                  setIntent("orange");
                  setVariant("");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge type="notification" intent="orange" />
              </Box>
            </td>
            <td>
              <Box
                onClick={() => {
                  setType("notification");
                  setLabel("");
                  setSize("");
                  setIntent("crimson");
                  setVariant("");
                  setLeadingIcon("");
                  setTrailingIcon("");
                }}
              >
                <Badge type="notification" intent="crimson" />
              </Box>
            </td>
          </tr>
        </tbody>
      </table>
      <Box>
        <Box >
          Click on the Element above to see the box code.
        </Box>
        <SyntaxHighlighter language="javascript" style={docco}>
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

export const Overview = Template.bind({});
