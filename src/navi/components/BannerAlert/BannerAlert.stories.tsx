
import React from "react";
import BannerAlert from "./BannerAlert";
import { ComponentStory, ComponentMeta } from "@storybook/react";

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
  argTypes: {
    intent: {
      options: ['info', 'warning', 'critical', 'success'],
      control: {
        defaultValue: 'critical',
        type: 'radio',
      },
      description: 'Intent of the BannerAlert. It allows user to select the severity of the BannerAlert',
      table: {
        defaultValue: { summary: 'critical' },
      },
    },
    headingText: {
      defaultValue: '',
      control: {
        defaultValue: '',
        type: 'text',
      },
      description: 'The message to display as title',
      table: {
        defaultValue: { summary: '' },
      },
    },
    subtitleText: {
      defaultValue: '',
      control: {
        defaultValue: '',
        type: 'text',
      },
      description: 'The message to display in place of subtitleText',
      table: {
        defaultValue: { summary: '' },
      },
    },
    actionButtonText: {
      defaultValue: '',
      control: {
        defaultValue: '',
        type: 'text',
      },
      description: 'The value to display for action button',
      table: {
        defaultValue: { summary: '' },
      },
    },
    open: {
      control: {
        type: 'boolean',
      },
      description: 'If true, BannerAlert is open',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    showCloseButton: {
      control: {
        type: 'boolean',
      },
      description: 'Close button will be rendered if set as true',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    showActionButton: {
      control: {
        type: 'boolean',
      },
      description: 'Action button will be rendered if set as true',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    autoHideDuration: {
      defaultValue: '',
      control: {
        defaultValue: '6000',
        type: 'text',
      },
      description: 'The number of milliseconds to wait before automatically calling the onClose function. onClose should then set the state of the open prop to hide the BannerAlert. This behavior is disabled by default with the null value.',
      table: {
        defaultValue: { summary: '6000' },
      },
    },
    onClose: {
      description: 'Callback fired when the component requests to be closed. When provided and no action prop is set, a close icon button is displayed that triggers the callback when clicked.<br/> Signature:<br/><pre>function(event: object) => void</pre><br/>event: The event source of the callback.',
    },
    onActionButtonClick: {
      description: 'click handler for action button',
    },
  },

} as ComponentMeta<typeof BannerAlert>;

const Template: ComponentStory<typeof BannerAlert> = ({ ...args }) => {
  return <BannerAlert {...args} />
};

export const Default = Template.bind({});
Default.args = {
  autoHideDuration: 6000,
  open: true,
  showCloseButton: true,
  showActionButton: true,
  actionButtonText: "Learn more",
  intent: "critical",
  headingText: "Critical",
  subtitleText: "This is an error alert — check it out!"
};
