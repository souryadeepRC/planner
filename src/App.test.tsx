import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("render header text", () => {
    render(<App />);
    expect(screen.getByText(/Planner/)).toBeInTheDocument();
  });
});
