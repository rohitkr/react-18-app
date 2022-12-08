import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./Link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./LinkOverview.scss";
import { ExternalLink } from "tabler-icons-react";

export default {
  title: `Components/Link`,
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {
  const [size, setSize] = React.useState<string>("small");
  const [leadingIcon, setLeadingIcon] = React.useState<string>("");
  const [trailingIcon, setTrailingIcon] = React.useState<string>("");
  const leadingIconVal = leadingIcon ? `leadingIcon={${leadingIcon}}` : "";
  const trailingIconVal = trailingIcon ? `trailingIcon={${trailingIcon}}` : "";
  const code = `
    // sample code
    <Link size="${size}" ${leadingIconVal} ${trailingIconVal}>
    Link Text
    </Link>
    `;

  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi link component</p>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <Link size={`${size}`} trailingIcon>
          Link Text
        </Link>
      </div>
      <h2>Link sizes</h2>
      <table>
        <thead>
          <tr>
            <td>
              <div className="cellContent">
                <b>Link xsmall</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>Link small</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>Link medium</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>Link large</b>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="cellContent">
                <Link
                  size="xsmall"
                  onClick={() => {
                    setSize("xsmall");
                    setLeadingIcon("");
                    setTrailingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Link
                  size="small"
                  onClick={() => {
                    setSize("small");
                    setLeadingIcon("");
                    setTrailingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Link
                  size="medium"
                  onClick={() => {
                    setSize("medium");
                    setLeadingIcon("");
                    setTrailingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Link
                  size="large"
                  onClick={() => {
                    setSize("large");
                    setLeadingIcon("");
                    setTrailingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Link with leading icon</h2>
      <table>
        <thead>
          <tr>
            <td>
              <div className="cellContent">
                <b>Link xsmall</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>Link small</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>Link medium</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>Link large</b>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="cellContent">
                <Link
                  size="xsmall"
                  leadingIcon={<ExternalLink />}
                  onClick={() => {
                    setSize("xsmall");
                    setLeadingIcon("<ExternalLink />");
                    setTrailingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Link
                  size="small"
                  leadingIcon={<ExternalLink />}
                  onClick={() => {
                    setSize("small");
                    setLeadingIcon("<ExternalLink />");
                    setTrailingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Link
                  size="medium"
                  leadingIcon={<ExternalLink />}
                  onClick={() => {
                    setSize("medium");
                    setLeadingIcon("<ExternalLink />");
                    setTrailingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Link
                  size="large"
                  leadingIcon={<ExternalLink />}
                  onClick={() => {
                    setSize("large");
                    setLeadingIcon("<ExternalLink />");
                    setTrailingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Link with trailing icon</h2>
      <table>
        <thead>
          <tr>
            <td>
              <div className="cellContent">
                <b>Link xsmall</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>Link small</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>Link medium</b>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <b>Link large</b>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="cellContent">
                <Link
                  size="xsmall"
                  trailingIcon={<ExternalLink />}
                  onClick={() => {
                    setSize("xsmall");
                    setTrailingIcon("<ExternalLink />");
                    setLeadingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Link
                  size="small"
                  trailingIcon={<ExternalLink />}
                  onClick={() => {
                    setSize("small");
                    setTrailingIcon("<ExternalLink />");
                    setLeadingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Link
                  size="medium"
                  trailingIcon={<ExternalLink />}
                  onClick={() => {
                    setSize("medium");
                    setTrailingIcon("<ExternalLink />");
                    setLeadingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
            <td>
              <div className="cellContent">
                <Link
                  size="large"
                  trailingIcon={<ExternalLink />}
                  onClick={() => {
                    setSize("large");
                    setTrailingIcon("<ExternalLink />");
                    setLeadingIcon("");
                  }}
                >
                  Link Text
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Click on the button above to see the Link code.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export const Overview = Template.bind({});
