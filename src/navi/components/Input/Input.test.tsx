import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

const InputTestElement = ({ required = false }) => {
  const [inputValue, setInputValue] = React.useState('Sample value');
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <Input
      type="default"
      value={inputValue}
      label="Sample label"
      helperText="Helper text"
      inputProps={{ "aria-label": required ? 'test-required-input' : "test-input" }}
      onChange={onValueChange}
      required={!!required}
      successMessage="Success message"
      errorMessage="Error message"
      inputType={"success"}
    />
  )
}

const ErrorInputElement = ({ required = false }) => {
  const [inputValue, setInputValue] = React.useState('Sample value');
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <Input
      type="critical"
      value={inputValue}
      label="Sample label"
      helperText="Helper text"
      inputProps={{ "aria-label": 'test-error-input' }}
      onChange={onValueChange}
      required={!!required}
      successMessage="Success message"
      errorMessage="Error message" inputType={"success"} />
  )
}

const SuccessInputElement = ({ required = false }) => {
  const [inputValue, setInputValue] = React.useState('Sample value');
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <Input
      type="success"
      value={inputValue}
      label="Sample label"
      helperText="Helper text"
      inputProps={{ "aria-label": "test-success-input" }}
      onChange={onValueChange}
      required={!!required}
      successMessage="Success message"
      errorMessage="Error message"
    />
  )
}

test("Show Input Field", async () => {
  const baseInputDom = render(
    <InputTestElement />
  );
  const { getByText: getByTextInput } = baseInputDom;
  const input = await <HTMLInputElement>baseInputDom.getByLabelText("test-input");
  expect(input.value).toBe('Sample value');
  fireEvent.change(input, { target: { value: 'New changed value' } });
  expect(input.value).toBe('New changed value');
  expect(getByTextInput("Helper text")).toBeInTheDocument();
});

test("Test required input field", async () => {
  const baseInputRequiredDom = render(
    <InputTestElement required />
  );
  const { getByText } = baseInputRequiredDom;
  const requiredInput = await <HTMLInputElement>baseInputRequiredDom.getByLabelText("test-required-input");
  expect(requiredInput.value).toBe('Sample value');
  fireEvent.change(requiredInput, { target: { value: '' } });
  fireEvent.blur(requiredInput);
  expect(requiredInput.value).toBe('');
  expect(getByText("Empty input field")).toBeInTheDocument();
});

test("Test success input field", async () => {
  const successInputDom = render(
    <SuccessInputElement />
  )
  const { getByText } = successInputDom;
  await <HTMLInputElement>successInputDom.getByLabelText("test-success-input");
  expect(getByText("Success message")).toBeInTheDocument();
});

test("Test error input field", async () => {
  const errorInputDom = render(
    <ErrorInputElement />
  )
  const { getByText } = errorInputDom;
  await <HTMLInputElement>errorInputDom.getByLabelText("test-error-input");
  expect(getByText("Error message")).toBeInTheDocument();
});