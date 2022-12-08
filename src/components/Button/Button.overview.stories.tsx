import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { PhotoAdd } from '../../Icons/Icons'
const PhotoAdd = () => <div>x</div> 

export default {
  title: `Components/Button`,
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => {
  const [buttonType, setButtonType] = useState('intent="prime" size="large" variant="primary"');

  const code = `
  // sample code
  <Button ${buttonType}>
    Button
  </Button>
  `;

  return <>
    <div style={{ color: '#666666', fontFamily: 'Inter' }}>
      <h1>Overview</h1>
      <h3>&lt;Button&gt; Component</h3>
      <table style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr style={{ height: '70px', color: '#333333' }}>
            <td>Prime</td>
            <td>Muted</td>
            <td>Success</td>
            <td>Critical</td>
            <td>Info</td>
            <td>Warning</td>
            <td>Disabled</td>
          </tr>
        </thead>
        <tr style={{ height: '70px' }}>
          <td>
            <Button intent="prime" size="large" variant="primary" onClick={() => { setButtonType(`intent="prime" size="large" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="muted" size="large" variant="primary" onClick={() => { setButtonType(`intent="muted" size="large" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="success" size="large" variant="primary" onClick={() => { setButtonType(`intent="success" size="large" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="critical" size="large" variant="primary" onClick={() => { setButtonType(`intent="critical" size="large" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="info" size="large" variant="primary" onClick={() => { setButtonType(`intent="info" size="large" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="warning" size="large" variant="primary" onClick={() => { setButtonType(`intent="warning" size="large" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button disabled intent="warning" size="large" variant="primary" onClick={() => { setButtonType(`disabled intent="warning" size="large" variant="primary"`) }} >
              Button
            </Button>
          </td>
        </tr>
        <tr style={{ height: '70px' }}>
          <td>
            <Button intent="prime" size="large" variant="secondary" onClick={() => { setButtonType(`intent="prime" size="large" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="muted" size="large" variant="secondary" onClick={() => { setButtonType(`intent="muted" size="large" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="success" size="large" variant="secondary" onClick={() => { setButtonType(`intent="success" size="large" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="critical" size="large" variant="secondary" onClick={() => { setButtonType(`intent="critical" size="large" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="info" size="large" variant="secondary" onClick={() => { setButtonType(`intent="info" size="large" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="warning" size="large" variant="secondary" onClick={() => { setButtonType(`intent="warning" size="large" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button disabled intent="warning" size="large" variant="secondary" onClick={() => { setButtonType(`disabled intent="warning" size="large" variant="secondary"`) }} >
              Button
            </Button>
          </td>
        </tr>
        <tr style={{ height: '70px' }}>
          <td>
            <Button intent="prime" size="large" variant="tertiary" onClick={() => { setButtonType(`intent="prime" size="large" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="muted" size="large" variant="tertiary" onClick={() => { setButtonType(`intent="muted" size="large" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="success" size="large" variant="tertiary" onClick={() => { setButtonType(`intent="success" size="large" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="critical" size="large" variant="tertiary" onClick={() => { setButtonType(`intent="critical" size="large" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="info" size="large" variant="tertiary" onClick={() => { setButtonType(`intent="info" size="large" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="warning" size="large" variant="tertiary" onClick={() => { setButtonType(`intent="warning" size="large" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button disabled intent="warning" size="large" variant="tertiary" onClick={() => { setButtonType(`disabled intent="warning" size="large" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" intent="prime" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="prime" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="muted" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="muted" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="success" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="success" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="critical" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="critical" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="info" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="info" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="warning" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="warning" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" disabled intent="warning" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" disabled intent="warning" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" intent="prime" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="prime" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="muted" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="muted" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="success" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="success" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="critical" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="critical" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="info" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="info" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="warning" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="warning" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" disabled intent="warning" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" disabled intent="warning" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" intent="prime" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="prime" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="muted" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="muted" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="success" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="success" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="critical" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="critical" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="info" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="info" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="warning" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="warning" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" disabled intent="warning" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" disabled intent="warning" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" rounded={false} intent="prime" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="prime" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="muted" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="muted" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="success" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="success" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="critical" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="critical" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="info" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="info" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="warning" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="warning" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} disabled intent="warning" size="large" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} disabled intent="warning" size="large" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" rounded={false} intent="prime" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="prime" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="muted" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="muted" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="success" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="success" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="critical" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="critical" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="info" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="info" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="warning" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="warning" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} disabled intent="warning" size="large" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} disabled intent="warning" size="large" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" rounded={false} intent="prime" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="prime" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="muted" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="muted" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="success" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="success" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="critical" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="critical" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="info" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="info" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="warning" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="warning" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} disabled intent="warning" size="large" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} disabled intent="warning" size="large" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button intent="prime" size="small" variant="primary" onClick={() => { setButtonType(`intent="prime" size="small" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="muted" size="small" variant="primary" onClick={() => { setButtonType(`intent="muted" size="small" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="success" size="small" variant="primary" onClick={() => { setButtonType(`intent="success" size="small" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="critical" size="small" variant="primary" onClick={() => { setButtonType(`intent="critical" size="small" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="info" size="small" variant="primary" onClick={() => { setButtonType(`intent="info" size="small" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="warning" size="small" variant="primary" onClick={() => { setButtonType(`intent="warning" size="small" variant="primary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button disabled intent="warning" size="small" variant="primary" onClick={() => { setButtonType(`disabled intent="warning" size="small" variant="primary"`) }} >
              Button
            </Button>
          </td>
        </tr>
        <tr style={{ height: '70px' }}>
          <td>
            <Button intent="prime" size="small" variant="secondary" onClick={() => { setButtonType(`intent="prime" size="small" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="muted" size="small" variant="secondary" onClick={() => { setButtonType(`intent="muted" size="small" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="success" size="small" variant="secondary" onClick={() => { setButtonType(`intent="success" size="small" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="critical" size="small" variant="secondary" onClick={() => { setButtonType(`intent="critical" size="small" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="info" size="small" variant="secondary" onClick={() => { setButtonType(`intent="info" size="small" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="warning" size="small" variant="secondary" onClick={() => { setButtonType(`intent="warning" size="small" variant="secondary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button disabled intent="warning" size="small" variant="secondary" onClick={() => { setButtonType(`disabled intent="warning" size="small" variant="secondary"`) }} >
              Button
            </Button>
          </td>
        </tr>
        <tr style={{ height: '70px' }}>
          <td>
            <Button intent="prime" size="small" variant="tertiary" onClick={() => { setButtonType(`intent="prime" size="small" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="muted" size="small" variant="tertiary" onClick={() => { setButtonType(`intent="muted" size="small" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="success" size="small" variant="tertiary" onClick={() => { setButtonType(`intent="success" size="small" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="critical" size="small" variant="tertiary" onClick={() => { setButtonType(`intent="critical" size="small" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="info" size="small" variant="tertiary" onClick={() => { setButtonType(`intent="info" size="small" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button intent="warning" size="small" variant="tertiary" onClick={() => { setButtonType(`intent="warning" size="small" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
          <td>
            <Button disabled intent="warning" size="small" variant="tertiary" onClick={() => { setButtonType(`disabled intent="warning" size="small" variant="tertiary"`) }} >
              Button
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" intent="prime" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="prime" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="muted" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="muted" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="success" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="success" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="critical" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="critical" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="info" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="info" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="warning" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" intent="warning" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" disabled intent="warning" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" disabled intent="warning" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" intent="prime" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="prime" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="muted" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="muted" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="success" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="success" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="critical" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="critical" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="info" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="info" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="warning" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" intent="warning" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" disabled intent="warning" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" disabled intent="warning" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" intent="prime" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="prime" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="muted" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="muted" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="success" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="success" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="critical" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="critical" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="info" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="info" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" intent="warning" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" intent="warning" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" disabled intent="warning" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" disabled intent="warning" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" rounded={false} intent="prime" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="prime" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="muted" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="muted" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="success" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="success" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="critical" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="critical" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="info" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="info" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="warning" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="warning" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} disabled intent="warning" size="small" variant="primary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} disabled intent="warning" size="small" variant="primary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" rounded={false} intent="prime" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="prime" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="muted" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="muted" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="success" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="success" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="critical" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="critical" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="info" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="info" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="warning" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="warning" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} disabled intent="warning" size="small" variant="secondary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} disabled intent="warning" size="small" variant="secondary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

        <tr style={{ height: '70px' }}>
          <td>
            <Button buttonType="icon" rounded={false} intent="prime" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="prime" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="muted" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="muted" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="success" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="success" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="critical" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="critical" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="info" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="info" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} intent="warning" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} intent="warning" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
          <td>
            <Button buttonType="icon" rounded={false} disabled intent="warning" size="small" variant="tertiary" onClick={() => { setButtonType(`buttonType="icon" rounded={false} disabled intent="warning" size="small" variant="tertiary"`) }} >
              <PhotoAdd />
            </Button>
          </td>
        </tr>

      </table>

      <p>
        Click on the button above to see the code.
      </p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  </>
};

export const Overview = Template.bind({});
