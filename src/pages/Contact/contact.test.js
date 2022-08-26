import {render, screen, fireEvent} from "@testing-library/react"
import Contact from "."

describe("Contact Page", () => {
    it("should display the next message on the screen", () => {
        const {debug} = render(<Contact/>)
        const textArea = screen.getByPlaceholderText(/enter your message/i)
        const form = screen.getByTestId("form")
        const button = screen.getByRole("button", {name : "Send"})
        fireEvent.change(textArea, {target : {value : "Merci!"}})
        fireEvent.submit(form)
        fireEvent.change(textArea, {target : {value : "c'est trop bien"}})
        fireEvent.click(button)
        // eslint-disable-next-line testing-library/no-debugging-utils
        const liElements = screen.getAllByRole("listitem")
        expect(liElements.length).toBe(2)
        liElements.forEach(li => {
            expect(li).toContainHTML("small")
        })
        debug()
        
    })
})