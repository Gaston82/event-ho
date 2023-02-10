import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateEventPage from "./CreateEventPage";

describe("Given the CreateEventPage", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading with 'CreateEvent' text", () => {
      const text = "CreateEvents";

      render(
        <BrowserRouter>
          <CreateEventPage />
        </BrowserRouter>
      );

      const expectedText = screen.getByRole("heading", {
        name: text,
        level: 1,
      });
      expect(expectedText).toBeInTheDocument();
    });
  });
});
