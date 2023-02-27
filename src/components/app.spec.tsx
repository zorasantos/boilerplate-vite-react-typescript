import { describe, test, expect } from "vitest";
import { render, screen } from "../utils/test";
import { Heading } from ".";

describe("Test App", () => {
  test("should render heading with text Boilerplate vite", () => {
    render(<Heading title="Boilerplate vite" />);
    const heading = screen.getByRole("heading", { name: /Boilerplate vite/i });
    expect(heading).toBeInTheDocument();
  });
});
