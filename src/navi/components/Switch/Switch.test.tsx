import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import Switch from "./Switch";

test('calls onChange when clicked', () => {
  const handleClick = jest.fn()
  render(<Switch onChange={handleClick} label="Click Me"></Switch>)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalledTimes(1);
})
