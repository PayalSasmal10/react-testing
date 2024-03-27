import { render, screen } from "@testing-library/react";
import App from "./App";

test("First react testing app", () => {
  render(<App />);
  let text = screen.getByText(/first react test case/i);
  const imgAlt = screen.getByTitle("Task related image");
  expect(text).toBeInTheDocument();
  expect(imgAlt).toBeInTheDocument();
});
