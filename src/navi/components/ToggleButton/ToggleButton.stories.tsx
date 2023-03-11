import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ToggleButton from "./ToggleButton";

const menu = [
  {
    id: "1",
    text: "one",
    icon: (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 4C11.5523 4 12 4.44772 12 5C12 5.55228 11.5523 6 11 6H7C6.44772 6 6 6.44772 6 7V14.697L8.18627 11.4188C8.50017 10.9793 9.09949 10.8737 9.54124 11.159L9.64018 11.2318L14.7853 15.5193L16.744 12H19C19.5523 12 20 12.4477 20 13V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H11ZM8.5 7C9.32843 7 10 7.67157 10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7ZM17 4C17.5523 4 18 4.44772 18 5V6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V9C18 9.55228 17.5523 10 17 10C16.4477 10 16 9.55228 16 9V8H15C14.4477 8 14 7.55228 14 7C14 6.44772 14.4477 6 15 6H16V5C16 4.44772 16.4477 4 17 4Z"></path>
      </svg>
    ),
  },
  {
    id: "2",
    text: "two",
    icon: (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 4C11.5523 4 12 4.44772 12 5C12 5.55228 11.5523 6 11 6H7C6.44772 6 6 6.44772 6 7V14.697L8.18627 11.4188C8.50017 10.9793 9.09949 10.8737 9.54124 11.159L9.64018 11.2318L14.7853 15.5193L16.744 12H19C19.5523 12 20 12.4477 20 13V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H11ZM8.5 7C9.32843 7 10 7.67157 10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7ZM17 4C17.5523 4 18 4.44772 18 5V6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V9C18 9.55228 17.5523 10 17 10C16.4477 10 16 9.55228 16 9V8H15C14.4477 8 14 7.55228 14 7C14 6.44772 14.4477 6 15 6H16V5C16 4.44772 16.4477 4 17 4Z"></path>
      </svg>
    ),
  },
  {
    id: "3",
    text: "three",
    icon: (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 4C11.5523 4 12 4.44772 12 5C12 5.55228 11.5523 6 11 6H7C6.44772 6 6 6.44772 6 7V14.697L8.18627 11.4188C8.50017 10.9793 9.09949 10.8737 9.54124 11.159L9.64018 11.2318L14.7853 15.5193L16.744 12H19C19.5523 12 20 12.4477 20 13V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H11ZM8.5 7C9.32843 7 10 7.67157 10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7ZM17 4C17.5523 4 18 4.44772 18 5V6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V9C18 9.55228 17.5523 10 17 10C16.4477 10 16 9.55228 16 9V8H15C14.4477 8 14 7.55228 14 7C14 6.44772 14.4477 6 15 6H16V5C16 4.44772 16.4477 4 17 4Z"></path>
      </svg>
    ),
  },
];

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {
    buttonType: {
      defaultValue: "",
      options: ["button", "icon"],
      control: { type: "inline-radio" },
    },
    options: {
      defaultValue: menu,
      control: "json",
    },
    intent: {
      defaultValue: "info",
      options: ["muted", "info", "info-light", "muted-light"],
      control: {
        defaultValue: "info",
        type: "radio",
      },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    size: {
      defaultValue: "large",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

export const Overview = () => (
  <ToggleButton options={menu} onSelect={(s) => console.log(s)} buttonType="button" />
);

const Template: ComponentStory<typeof ToggleButton> = ({ ...args }) => {
  return <ToggleButton {...args} onSelect={(s) => console.log(s)} />;
};

export const Default = Template.bind({});

Default.args = {
  intent: "info",
};
