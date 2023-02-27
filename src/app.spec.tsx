import { describe, test, expect } from "vitest";
import { render, screen } from "./utils/test";
import { App } from "./App";

describe("Test App", () => {
  test("should render heading with text Boilerplate vite", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /Boilerplate vite/i });
    expect(heading).toBeInTheDocument();
  });
});
