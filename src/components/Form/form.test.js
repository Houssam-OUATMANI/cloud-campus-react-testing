import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "bootstrap";
import Form from ".";

const mockOnchange = jest.fn();
const mockOnSubmit = jest.fn();

describe("Events Buttons", () => {
  it("should click on the increment button successfully", () => {
    render(<Form onChange={mockOnchange} onSubmit={mockOnSubmit} />);
    const textareaElement = screen.getByPlaceholderText(/enter your message/i);
    fireEvent.change(textareaElement, { target: { value: "Merci" } });
    expect(textareaElement.value).toBe("Merci");
  });
});
