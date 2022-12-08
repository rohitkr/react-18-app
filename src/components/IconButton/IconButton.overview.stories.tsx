import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "./IconButton";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { PhotoAdd } from '../../Icons/Icons'
const PhotoAdd = () => <div>x</div> 

export default {
  title: `Components/IconButton`,
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>;


const Template: ComponentStory<typeof IconButton> = (args) => {
  const [buttonType, setButtonType] = useState('title="Icon button tooltip" intent="prime" size="large" variant="primary"');

  const code = `
  // sample code
  import { IconButton, PhotoAdd } from 'navi-design-system';
  
  export default () => {
    return (
      <IconButton ${buttonType}>
        <PhotoAdd />
      </IconButton>
    )
  }

  `;

  return <>
    <div style={{ color: '#666666', fontFamily: 'Inter' }}>
      <h1>Overview</h1>
      <h3>&lt;IconButton&gt; Component</h3>
      <table style={{ width: '100%', textAlign: 'left', tableLayout: 'fixed' }}>
        <thead>
          <tr style={{ height: '70px', color: '#333333' }}>
            <td>Tooltip Position</td>
            <td>Prime</td>
            <td>Muted</td>
            <td>Success</td>
            <td>Critical</td>
            <td>Info</td>
            <td>Warning</td>
            <td>Disabled</td>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: '70px' }}>
            <td>
              top
            </td>
            <td>
              <IconButton title="Icon button tooltip" intent="prime" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" intent="prime" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" intent="muted" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" intent="muted" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" intent="success" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" intent="success" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" intent="critical" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" intent="critical" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" intent="info" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" intent="info" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" intent="warning" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" intent="warning" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" disabled intent="warning" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" disabled intent="warning" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              top-start
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-start" intent="prime" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-start" intent="prime" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-start" intent="muted" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-start" intent="muted" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-start" intent="success" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-start" intent="success" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-start" intent="critical" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-start" intent="critical" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-start" intent="info" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-start" intent="info" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-start" intent="warning" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-start" intent="warning" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" disabled intent="warning" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" disabled intent="warning" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              top-end
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-end" intent="prime" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-end" intent="prime" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-end" intent="muted" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-end" intent="muted" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-end" intent="success" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-end" intent="success" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-end" intent="critical" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-end" intent="critical" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-end" intent="info" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-end" intent="info" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-end" intent="warning" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-end" intent="warning" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="top-end" disabled intent="warning" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="top-end" disabled intent="warning" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              bottom
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="prime" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="prime" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="muted" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="muted" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="success" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="success" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="critical" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="critical" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="info" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="info" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="warning" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom" rounded={false} intent="warning" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom" rounded={false} disabled intent="warning" size="large" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom" rounded={false} disabled intent="warning" size="large" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              bottom-start
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="prime" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="prime" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="muted" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="muted" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="success" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="success" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="critical" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="critical" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="info" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="info" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="warning" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} intent="warning" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} disabled intent="warning" size="large" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-start" rounded={false} disabled intent="warning" size="large" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              bottom-end
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="prime" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="prime" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="muted" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="muted" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="success" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="success" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="critical" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="critical" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="info" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="info" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="warning" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} intent="warning" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} disabled intent="warning" size="large" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="bottom-end" rounded={false} disabled intent="warning" size="large" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              left
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="prime" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="prime" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="muted" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="muted" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="success" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="success" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="critical" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="critical" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="info" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="info" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="warning" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="warning" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" disabled intent="warning" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" disabled intent="warning" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              left
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="prime" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="prime" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="muted" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="muted" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="success" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="success" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="critical" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="critical" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="info" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="info" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="warning" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="warning" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" disabled intent="warning" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" disabled intent="warning" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              left
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="prime" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="prime" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="muted" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="muted" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="success" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="success" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="critical" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="critical" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="info" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="info" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" intent="warning" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" intent="warning" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="left" disabled intent="warning" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="left" disabled intent="warning" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              right
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="prime" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="prime" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="muted" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="muted" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="success" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="success" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="critical" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="critical" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="info" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="info" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="warning" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="warning" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} disabled intent="warning" size="small" variant="primary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} disabled intent="warning" size="small" variant="primary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              right
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="prime" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="prime" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="muted" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="muted" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="success" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="success" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="critical" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="critical" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="info" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="info" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="warning" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="warning" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} disabled intent="warning" size="small" variant="secondary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} disabled intent="warning" size="small" variant="secondary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>

          <tr style={{ height: '70px' }}>
            <td>
              right
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="prime" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="prime" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="muted" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="muted" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="success" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="success" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="critical" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="critical" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="info" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="info" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="warning" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} intent="warning" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
            <td>
              <IconButton title="Icon button tooltip" tooltipPosition="right" rounded={false} disabled intent="warning" size="small" variant="tertiary" onClick={() => { setButtonType(`title="Icon button tooltip" tooltipPosition="right" rounded={false} disabled intent="warning" size="small" variant="tertiary"`) }} >
                <PhotoAdd />
              </IconButton>
            </td>
          </tr>
        </tbody>
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
