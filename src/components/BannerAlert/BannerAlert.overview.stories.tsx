
import React from "react";
import BannerAlert from "./BannerAlert";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from '../Button/Button';
import { BannerAlertProps } from "./BannerAlert.types";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default {
  title: "Components/BannerAlert",
  component: BannerAlert,
  parameters: {
    docs: {
      description: {
        component: 'The BannerAlert component displays an alert box with a message and an Action button or Close button. The BannerAlert is used for attract user attention when you want without interrupting the user\'s task.',
      },
    },
  },
} as ComponentMeta<typeof BannerAlert>;

// Styles for Snackbar component
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '10px'
    },
  }))

const Template: ComponentStory<typeof BannerAlert> = ({ ...args }) => {
  const [state, setState] = React.useState<BannerAlertProps>({
    open: false,
    intent: 'critical',
  });

  const classes = useStyles();

  const onClose = () => {
    setState({ open: false, intent: state.intent });
  }
  const buttonClick = (newState: any) => () => {
    newState.open = !state.open;
    if (state.intent === undefined) {
      setState({ open: true, intent: newState.intent });
    } else {
      if (newState.intent !== state.intent) {
        setState({ open: false, intent: state.intent });
        setTimeout(() => {
          setState({ open: true, intent: newState.intent });
        }, 500);
      } else {
        setState({ open: true, intent: state.intent });
      }
    }
  }

  return <div>
    <div className={classes.root}>
      <Button intent="critical" onClick={buttonClick({ intent: 'critical' })}>Critical BannerAlert</Button>
    </div>
    <div className={classes.root}>
      <Button intent="info" onClick={buttonClick({ intent: 'info', headingText: "Info" })}>Info BannerAlert</Button>
    </div>
    <div className={classes.root}>
      <Button intent="warning" onClick={buttonClick({ intent: 'warning', headingText: "Warning" })}>Warning BannerAlert</Button>
    </div>
    <div className={classes.root}>
      <Button intent="success" onClick={buttonClick({ intent: 'success', headingText: "Success" })}>Success BannerAlert</Button>
    </div>
    <BannerAlert {...args} {...state} onClose={onClose} />
  </div >
};

export const Overview = Template.bind({});
Overview.args = {
  autoHideDuration: 6000,
  open: false,
  onClose: () => { },
  onActionButtonClick: () => {
    window.open('https://support.whatfix.com/', '_blank');
  },
  showCloseButton: true,
  headingText: "Critical",
  actionButtonText: "Go to Support Article",
  subtitleText: "This is an error alert — check it out!"
};
