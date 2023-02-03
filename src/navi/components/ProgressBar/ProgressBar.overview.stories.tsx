
import React from "react";
import ProgressBar from "./ProgressBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from '../Button/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { CaretDown } from 'tabler-icons-react';
import Box from '../Box/Box'

const CodeBlock = (props: any) => {
  return (
    <Accordion style={{ boxShadow: 'none', borderTop: '1px solid #bbb' }}>
      <AccordionSummary
        expandIcon={<CaretDown />}
        aria-controls="panel1a-content"
      >
        <Typography style={{
          fontFamily: 'Inter',
          fontSize: '14px',
        }}>
          Show Code
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box style={{ textAlign: 'left' }}>
          <SyntaxHighlighter language="javascript" style={docco}>
            {props.children}
          </SyntaxHighlighter>
        </Box>
      </AccordionDetails>
    </Accordion >)
}

const styleObj = {
  margin: '20px 0 20px 0',
  border: "2px solid #ccc",
  borderRadius: '5px',
  padding: '12px'
};

export default {
  title: "Components/ProgressBar"
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = ({ ...args }) => {
  const [progress, setProgress] = React.useState(0);
  const [stepVal, setStepVal] = React.useState(2);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Box>
    <table style={{ width: '100%', textAlign: 'center' }}>
      <thead>
        <tr style={{ height: '70px', color: '#333333' }}>
          <td>ProgressBar examples</td>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: '70px', color: '#333333' }}>
          <td>
            <Box style={styleObj}>
              <ProgressBar intent="info" progressType="completion" type="step" stepCount={6} value={stepVal} stepLabel />
              <Box style={{
                height: '50px',
                textAlign: "center",
              }}>
                <Button onClick={() => { setStepVal((oldVal) => oldVal - 1) }} variant="tertiary">&lt; Prev</Button>
                <Button onClick={() => { setStepVal((oldVal) => oldVal + 1) }} variant="tertiary">Next &gt;</Button>
              </Box>
              <CodeBlock>
                {`
import React from 'react';
import { ProgressBar } from 'navi-design-system';
import { Button } from 'navi-design-system';

const ProgressBarExample = () => {
  const [stepVal, setStepVal] = React.useState(2);

  return (<Box>
    <ProgressBar
      intent="info"
      progressType="completion"
      type="step"
      size="large"
      stepCount={8}
      value={stepVal}
      labelPosition="right"
      stepLabel
    />
    <Box style={{
      height: '50px',
      textAlign: "center",
    }}>
      <Button
        onClick={() => { setStepVal((oldVal) => oldVal - 1) }}
        variant="tertiary">&lt; Prev</Button>
      <Button
        onClick={() => { setStepVal((oldVal) => oldVal + 1) }}
        variant="tertiary">Next &gt;</Button>
    </Box>
  </Box>)
}
export default ProgressBarExample;
`}
              </CodeBlock>
            </Box>
          </td>
        </tr>
        <tr>
          <td>
            <Box style={styleObj}>
              <Box style={{ marginBottom: '20px' }}>
                <ProgressBar intent="info" progressType="loading" label="Loading...." />
              </Box>
              <CodeBlock>
                {`
import React from 'react';
import { ProgressBar } from 'navi-design-system';

const ProgressBarExample = () => {

  return (<Box>
    <ProgressBar intent="info" progressType="loading" label="Loading...." />
  </Box>)
}
export default ProgressBarExample;
`}
              </CodeBlock>
            </Box>
          </td>
        </tr>
        <tr>
          <td>
            <Box style={styleObj}>
              <Box style={{ marginBottom: '20px' }}>
                <ProgressBar intent="warning" value={progress} percentageLabel />
              </Box>
              <CodeBlock>
                {`
import React from 'react';
import { ProgressBar } from 'navi-design-system';

const ProgressBarExample = () => {

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (<Box>
    <ProgressBar intent="warning" value={progress} />
  </Box>)
}
export default ProgressBarExample;
`}
              </CodeBlock>

            </Box>
          </td>
        </tr>
        <tr>
          <td>
            <Box style={styleObj}>
              <Box style={{ marginBottom: '20px' }}>
                <ProgressBar intent="success" value={40} percentageLabel />
              </Box>
              <CodeBlock>
                {`
import React from 'react';
import { ProgressBar } from 'navi-design-system';

const ProgressBarExample = () => {

  return (<Box>
    <ProgressBar intent="success" value={40} />
  </Box>)
}
export default ProgressBarExample;
`}
              </CodeBlock>
            </Box>

          </td>
        </tr>
        <tr>
          <td>
            <Box style={styleObj}>
              <Box style={{ marginBottom: '20px' }}>
                <ProgressBar intent="warning" value={progress/10} type="step" stepCount={10} stepLabel />
              </Box>
              <CodeBlock>
                {`
import React from 'react';
import { ProgressBar } from 'navi-design-system';

const ProgressBarExample = () => {

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (<Box>
    <ProgressBar intent="warning" value={progress/10} type="step" stepCount={10} stepLabel />
  </Box>)
}
export default ProgressBarExample;
`}
              </CodeBlock>

            </Box>
          </td>
        </tr>

        <tr>
          <td>
            <Box style={styleObj}>
              <Box style={{ marginBottom: '20px' }}>
                <ProgressBar intent="warning" value={progress / 4} maxValue={100 / 4} stepLabel />
              </Box>
              <CodeBlock>
                {`
import React from 'react';
import { ProgressBar } from 'navi-design-system';

const ProgressBarExample = () => {

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (<Box>
    <ProgressBar intent="warning" value={progress / 4} maxValue={100 / 4} stepLabel />
  </Box>)
}
export default ProgressBarExample;
`}
              </CodeBlock>

            </Box>
          </td>
        </tr>

        <tr>
          <td>
            <Box style={styleObj}>
              <Box style={{ marginBottom: '20px' }}>
                <ProgressBar intent="critical" value={70} label="70/100" />
              </Box>
              <CodeBlock>
                {`
import React from 'react';
import { ProgressBar } from 'navi-design-system';

const ProgressBarExample = () => {

  return (<Box>
    <ProgressBar intent="critical" value={70} label="70/100" />
  </Box>)
}
export default ProgressBarExample;
`}
              </CodeBlock>
            </Box>

          </td>
        </tr>
        <tr>
          <td>
            <Box style={styleObj}>
              <Box style={{ marginBottom: '20px' }}>
                <ProgressBar intent="success" value={progress} label={<CustomLabelText />} labelPosition="bottom" />
              </Box>
              <CodeBlock>
                {`
import React from 'react';
import { ProgressBar } from 'navi-design-system';

const CustomLabelText = () => {
  return (<Box style={{ marginTop: "20px", textAlign: "center" }}>
    <p style={{ fontSize: '16px', fontWeight: 700 }}>WhatsApp</p>
    <p style={{}}> End-to-end encrypted</p>
  </Box>);
}

const ProgressBarExample = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (<Box>
    <ProgressBar intent="success" value={progress} label={<CustomLabelText />} labelPosition="bottom" />
  </Box>)
}
export default ProgressBarExample;
`}
              </CodeBlock>
            </Box>
          </td>
        </tr>
      </tbody>
    </table>
  </Box>
};

const CustomLabelText = () => {
  return (<Box style={{ marginTop: "20px", textAlign: "center" }}>
    <p style={{ fontSize: '16px', fontWeight: 700 }}>WhatsApp</p>
    <p style={{}}> End-to-end encrypted</p>
  </Box>);
}

export const Overview = Template.bind({});
