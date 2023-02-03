import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "./Tag";
import Box from "../Box/Box";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { InfoCircle } from "tabler-icons-react";
import "./Tag.scss";

export default {
  title: `Components/Tag`,
  component: Tag,
  argTypes: {},
} as ComponentMeta<typeof Tag>;
const Template: ComponentStory<typeof Tag> = (args) => {
  const [size, setSize] = React.useState("");
  const [label, setLabel] = React.useState("Sample label");
  const [intent, setIntent] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [leadingIcon, setLeadingIcon] = React.useState("");
  const [trailingIcon, setTrailingIcon] = React.useState("");
  const [dissmissible, setDissmissible] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const disabledValue = disabled ? `disabled` : "";
  const sizeValue = size ? `size="${size}"` : "";
  const labelValue = label ? `label="${label}"` : "";
  const intentValue = intent ? `intent="${intent}"` : "";
  const variantValue = variant ? `variant="${variant}"` : "";
  const dissmissibleValue = dissmissible ? `dissmissable` : "";
  const leadingIconValue = leadingIcon ? `LeadingIcon={${leadingIcon}}` : "";
  const trailingIconValue = trailingIcon
    ? `TrailingIcon={${trailingIcon}}`
    : "";
  const code = `
    // sample code
    <Tag ${sizeValue} ${labelValue} ${intentValue} ${variantValue} ${leadingIconValue} ${trailingIconValue} ${dissmissibleValue} ${disabledValue}/>
    `;

  return (
    <Box className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Tag component</p>
      <p>Here is a sample tag component.</p>
      <Box display="flex" justifyContent="center">
        <Box
          padding={"4px"}
          onClick={(e) => {
            setLabel("Non dissmissable tag");
            setSize("large");
            setIntent("");
            setVariant("neutral");
            setLeadingIcon("");
            setTrailingIcon("");
            setDissmissible(true);
            setDisabled(false);
          }}
        >
          <Tag label="Non dissmissable tag" variant="neutral" dismissible />
        </Box>
        <Box
          padding={"4px"}
          onClick={(e) => {
            setLabel("Sample Tag");
            setSize("large");
            setIntent("");
            setVariant("neutral");
            setLeadingIcon("");
            setTrailingIcon("");
            setDissmissible(false);
            setDisabled(false);
          }}
        >
          <Tag label="Sample Tag" variant="neutral" />
        </Box>
      </Box>
      <p>
        Note: Tab index for tag component is 1 by default. Pass 'tabIndex' value
        to override it for accessibility.
      </p>
      <h2>Tag sizes</h2>
      <h3>Large</h3>
      <Box
        padding={"4px"}
        onClick={(e) => {
          setLabel("Sample Tag");
          setSize("large");
          setIntent("info");
          setVariant("bold");
          setLeadingIcon("");
          setTrailingIcon("");
          setDissmissible(false);
          setDisabled(false);
        }}
      >
        <Tag label="Sample Tag" variant="bold" intent="info" />
      </Box>
      <h3>Small</h3>
      <Box
        padding={"4px"}
        onClick={(e) => {
          setLabel("Sample Tag");
          setSize("small");
          setIntent("success");
          setVariant("bold");
          setLeadingIcon("");
          setTrailingIcon("");
          setDissmissible(false);
          setDisabled(false);
        }}
      >
        <Tag label="Sample Tag" variant="bold" intent="success" size="small" />
      </Box>
      <h2>Tags with Icons</h2>
      <h3>Leading Icon</h3>
      <Box
        padding={"4px"}
        onClick={(e) => {
          setLabel("Sample Tag");
          setSize("samll");
          setIntent("info");
          setVariant("bold");
          setLeadingIcon("<InfoCircle/>");
          setTrailingIcon("");
          setDissmissible(false);
          setDisabled(false);
        }}
      >
        <Tag
          label="Sample Tag"
          variant="neutral"
          intent="info"
          size="small"
          LeadingIcon={<InfoCircle />}
        />
      </Box>
      <h3>Trailing Icon</h3>
      <Box
        padding={"4px"}
        onClick={(e) => {
          setLabel("Sample Tag");
          setSize("large");
          setIntent("critical");
          setVariant("bold");
          setLeadingIcon("");
          setTrailingIcon("<InfoCircle />");
          setDissmissible(false);
          setDisabled(false);
        }}
      >
        <Tag
          label="Sample Tag"
          variant="bold"
          intent="critical"
          size="large"
          TrailingIcon={<InfoCircle />}
        />
      </Box>
      <h3>Tags with Icons and dismissable</h3>
      <Box display="flex" justifyContent="center">
        <Box
          padding={"4px"}
          onClick={(e) => {
            setLabel("Sample Tag");
            setSize("small");
            setIntent("warning");
            setVariant("bold");
            setLeadingIcon("<InfoCircle />");
            setTrailingIcon("");
            setDissmissible(true);
            setDisabled(false);
          }}
        >
          <Tag
            label="Sample Tag"
            variant="bold"
            intent="warning"
            size="small"
            LeadingIcon={<InfoCircle />}
            dismissible
          />
        </Box>
        <Box
          padding={"4px"}
          onClick={(e) => {
            setLabel("Sample Tag");
            setSize("large");
            setIntent("warning");
            setVariant("bold");
            setLeadingIcon("");
            setTrailingIcon("<InfoCircle />");
            setDissmissible(true);
            setDisabled(false);
          }}
        >
          <Tag
            label="Sample Tag"
            variant="bold"
            intent="warning"
            size="large"
            TrailingIcon={<InfoCircle />}
            dismissible
          />
        </Box>
      </Box>
      <h3>Disabled tags</h3>
      <Box display="flex" justifyContent="center">
        <Box
          padding={"4px"}
          onClick={(e) => {
            setLabel("Sample Tag");
            setSize("large");
            setIntent("warning");
            setVariant("outline");
            setLeadingIcon("");
            setTrailingIcon("<InfoCircle />");
            setDissmissible(false);
            setDisabled(true);
          }}
        >
          <Tag
            label="Sample Tag"
            variant="outline"
            intent="warning"
            size="large"
            TrailingIcon={<InfoCircle />}
            dismissible
            disabled
          />
        </Box>
        <Box
          padding={"4px"}
          onClick={(e) => {
            setLabel("Sample Tag");
            setSize("small");
            setIntent("success");
            setVariant("neutral");
            setLeadingIcon("<InfoCircle />");
            setTrailingIcon("");
            setDissmissible(true);
            setDisabled(true);
          }}
        >
          <Tag
            label="Sample Tag"
            variant="neutral"
            intent="success"
            size="small"
            LeadingIcon={<InfoCircle />}
            dismissible
            disabled
          />
        </Box>
        <Box
          padding={"4px"}
          onClick={(e) => {
            setLabel("Sample Tag");
            setSize("large");
            setIntent("info");
            setVariant("bold");
            setLeadingIcon("");
            setTrailingIcon("");
            setDissmissible(false);
            setDisabled(true);
          }}
        >
          <Tag
            label="Sample Tag"
            variant="bold"
            intent="info"
            size="large"
            disabled
          />
        </Box>
      </Box>
      <h2>Tag types</h2>
      <table className="tag-overview-table">
        <thead>
          <tr>
            <td>variant</td>
            <td>muted</td>
            <td>info</td>
            <td>success</td>
            <td>warning</td>
            <td>critical</td>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "48px" }}>
            <td>neutral</td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("muted");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(true);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="neutral"
                  intent="muted"
                  dismissible
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("info");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(true);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="neutral"
                  intent="info"
                  dismissible
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("success");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(true);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="neutral"
                  intent="success"
                  dismissible
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("warning");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(true);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="neutral"
                  intent="warning"
                  dismissible
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("critical");
                  setVariant("neutral");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(true);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="neutral"
                  intent="critical"
                  dismissible
                />
              </Box>
            </td>
          </tr>
          <tr style={{ height: "48px" }}>
            <td>outline</td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("muted");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(true);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="outline"
                  intent="muted"
                  dismissible
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("info");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(false);
                  setDisabled(false);
                }}
              >
                <Tag label="Sample Tag" variant="outline" intent="info" />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("success");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(false);
                  setDisabled(false);
                }}
              >
                <Tag label="Sample Tag" variant="outline" intent="success" />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("warning");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(false);
                  setDisabled(false);
                }}
              >
                <Tag label="Sample Tag" variant="outline" intent="warning" />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("critical");
                  setVariant("outline");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(false);
                  setDisabled(false);
                }}
              >
                <Tag label="Sample Tag" variant="outline" intent="critical" />
              </Box>
            </td>
          </tr>
          <tr style={{ height: "48px" }}>
            <td>bold</td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("muted");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(false);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="bold"
                  intent="muted"
                  dismissible
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("info");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(false);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="bold"
                  intent="info"
                  dismissible
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("success");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(false);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="bold"
                  intent="success"
                  dismissible
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("warning");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(false);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="bold"
                  intent="warning"
                  dismissible
                />
              </Box>
            </td>
            <td>
              <Box
                onClick={(e) => {
                  setLabel("Sample Tag");
                  setSize("large");
                  setIntent("critical");
                  setVariant("bold");
                  setLeadingIcon("");
                  setTrailingIcon("");
                  setDissmissible(false);
                  setDisabled(false);
                }}
              >
                <Tag
                  label="Sample Tag"
                  variant="bold"
                  intent="critical"
                  dismissible
                />
              </Box>
            </td>
          </tr>
        </tbody>
      </table>
      <Box>
        <p>Click on the Element above to see the box code.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};
export const Overview = Template.bind({});
