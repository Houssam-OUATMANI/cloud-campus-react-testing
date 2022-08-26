import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render the navigation bar", () => {
    render(<App />);
    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
  });
  it("should render Home page", () => {
    render(<App />);
    const homeTitle = screen.getByRole("heading", { name: "Home page" });
    expect(homeTitle).toBeInTheDocument();
  });

  it("should render Contact page", async () => {
    render(<App />);
    const contactLink = screen.getByRole("link", { name: "contact" });
    fireEvent.click(contactLink);
    const contactClients = await screen.findByRole("heading", {
      name: "Contact page",
    });
    expect(contactClients).toBeInTheDocument();
  });
});
