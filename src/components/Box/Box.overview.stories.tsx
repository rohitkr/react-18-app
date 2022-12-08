import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "./Box";
import Button from "../Button/Button";
import "./Box.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default {
  title: `Components/Box`,
  component: Box,
  argTypes: {},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
  const code = `
  // sample code
  <Box data-testid="test-box">
  <Button intent="prime" size="large" variant="primary"/>
   Button inside a box
  </Button>
  </Box>
  `;

  return (
    <Box className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi Box component</p>
      <p>
        The Box component should be used as a wrapper component for grouping
        outher elements or CSS needs, replacing 'div'.
      </p>
      <p>Here is a button rendered inside the box component</p>
      <h3>Div component</h3>
      <Box id="hello" data-testid="testId">
        <Button>Button</Button>
      </Box>
      <h3>Span component</h3>
      <Box component="span">
        <Button>Button</Button>
      </Box>
      <Box>
        <p>The following properties could be used with box.</p>
        <p>Component Type</p>
        <ul>
          <li>div</li>
          <li>span</li>
        </ul>
        <p>Borders</p>
        <ul>
          <li>border</li>
          <li>borderTop</li>
          <li>borderRight</li>
          <li>borderBottom</li>
          <li>borderLeft</li>
          <li>borderColor</li>
          <li>borderRadius</li>
        </ul>
        <p>Display</p>
        <ul>
          <li>display</li>
          <li>overflow</li>
          <li>textOverflow</li>
          <li>visibility</li>
          <li>whiteSpace</li>
        </ul>
        <p>Flex</p>
        <ul>
          <li>flexBasis</li>
          <li>flexDirection</li>
          <li>flexWrap</li>
          <li>justifyContent</li>
          <li>alignItems</li>
          <li>alignContent</li>
          <li>order</li>
          <li>flex</li>
          <li>flexGrow</li>
          <li>flexShrink</li>
          <li>alignSelf</li>
          <li>justifyItems</li>
          <li>justifySelf</li>
        </ul>
        <p> Pallete</p>
        <ul>
          <li>color</li>
          <li>bgColor</li>
          <li>backgroundColor</li>
        </ul>
        <p>Positions</p>
        <ul>
          <li>zIndex</li>
          <li>position</li>
          <li>top</li> <li>right</li>
          <li>bottom</li> <li>left</li>
        </ul>
        <p>Shadows</p>
        <ul>boxShadow</ul>
        <p>Sizing</p>
        <ul>
          <li>width</li>
          <li>maxWidth</li>
          <li>minWidth</li>
          <li>height</li>
          <li>maxHeight</li>
          <li>minHeight</li>
          <li>sizeWidth</li>
          <li>sizeHeight</li>
          <li>boxSizing</li>
        </ul>
        <p>Spacing</p>
        <li>m</li>
        <li>mt</li>
        <li>mr</li>
        <li>mb</li>
        <li>ml</li>
        <li>mx</li>
        <li>my</li>
        <li>p</li>
        <li>pt</li>
        <li>pr</li>
        <li>pb</li>
        <li>pl</li>
        <li>px</li>
        <li>py</li>
        <li>margin</li>
        <li>marginTop</li>
        <li>marginRight</li>
        <li>marginBottom</li>
        <li>marginLeft</li>
        <li>marginX</li>
        <li>marginY</li>
        <li>padding</li>
        <li>paddingTop</li>
        <li>paddingRight</li>
        <li>paddingBottom</li>
        <li>paddingLeft</li>
        <li>paddingX</li>
        <li>paddingY</li>
        <p>Typography</p>
        <ul>
          <li>fontFamily</li>
          <li>fontSize</li>
          <li>fontStyle</li>
          <li>fontWeight</li>
          <li>letterSpacing</li>
          <li>lineHeight</li>
          <li>textAlign</li>
          <li>textTransform</li>
        </ul>
      </Box>
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
