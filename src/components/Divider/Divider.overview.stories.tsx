import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Divider from "./Divider";
import Box from "../Box/Box";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default {
  title: `Components/Divider`,
  component: Divider,
  argTypes: {},
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => {
  const [orientation, setOrientation] = React.useState("horizontal");
  const [weight, setWeight] = React.useState("");
  const [color, setColor] = React.useState("");
  const [opacity, setOpacity] = React.useState("");
  const orientationValue = orientation ? orientation : "";
  const weightValue = weight ? `weight={${"weight"}}` : "";
  const opacityValue = opacity ? `opacity={${opacity}}` : "";
  const colorValue = color ? `color="${color}"` : "";
  const code = `
  // sample code
  <Divider orientation="${orientationValue}" ${weightValue} ${colorValue} ${opacityValue}/>
  `;

  return (
    <div className="container">
      <h1>Overview</h1>
      <p>Documentation for the Navi divider component</p>A divider is a thin
      line that groups/ separates content in lists and layouts.
      <Box
        display="flex"
        justifyContent="center"
        margin="50px"
        onClick={() => {
          setOrientation("horizontal");
          setOpacity("");
          setColor("");
          setWeight("");
        }}
      >
        <Divider orientation="horizontal" />
      </Box>
      <h2>Horizontal Divider</h2>
      <Box
        onClick={() => {
          setOrientation("horizontal");
          setOpacity("");
          setColor("");
          setWeight("");
        }}
      >
        <Divider orientation="horizontal" />
      </Box>
      <h2>Vertical Divider</h2>
      <Box
        onClick={() => {
          setOrientation("vertical");
          setOpacity("");
          setColor("");
          setWeight("");
        }}
        height="100px"
      >
        <Divider orientation="vertical" />
      </Box>
      <h2>Divider variant</h2>
      <h3>Weight - 1</h3>
      <Box
        onClick={() => {
          setOrientation("horizontal");
          setWeight("1");
          setOpacity("");
          setColor("");
        }}
        height="100px"
      >
        <Divider orientation="horizontal" weight={"1"} />
      </Box>
      <h3>Weight - 2</h3>
      <Box
        onClick={() => {
          setOrientation("horizontal");
          setWeight("2");
          setOpacity("");
          setColor("");
        }}
        height="100px"
      >
        <Divider orientation="horizontal" weight={"2"} />
      </Box>
      <h2> Divider colors</h2>
      <h3>Color - light</h3>
      <Box
        onClick={() => {
          setOrientation("horizontal");
          setWeight("1");
          setColor("light");
          setOpacity("");
        }}
        height="100px"
      >
        <Divider orientation="horizontal" weight={"1"} color="light" />
      </Box>
      <h3>Color - dark</h3>
      <Box
        onClick={() => {
          setOrientation("horizontal");
          setWeight("1");
          setColor("dark");
          setOpacity("");
        }}
        height="100px"
      >
        <Divider orientation="horizontal" weight={"1"} color="dark" />
      </Box>
      <h3>Color - muted</h3>
      <Box
        onClick={() => {
          setOrientation("horizontal");
          setWeight("1");
          setColor("muted");
          setOpacity("");
        }}
        height="100px"
      >
        <Divider orientation="horizontal" weight={"1"} color="muted" />
      </Box>
      <h3>Color - custom</h3>
      <Box
        onClick={() => {
          setOrientation("horizontal");
          setWeight("2");
          setColor("#198558");
          setOpacity("");
        }}
        height="100px"
      >
        <Divider orientation="horizontal" weight={"1"} color="#198558" />
      </Box>
      <h3>Color - custom with opacity</h3>
      <Box
        onClick={() => {
          setOrientation("horizontal");
          setWeight("2");
          setColor("#198558");
          setOpacity("0.5");
        }}
        height="100px"
      >
        <Divider
          orientation="horizontal"
          weight={"1"}
          color="#198558"
          opacity={0.5}
        />
      </Box>
      <div>
        <p>Click on the button above to see the divider code.</p>
        <SyntaxHighlighter language="javascript" style={docco}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const Overview = Template.bind({});
