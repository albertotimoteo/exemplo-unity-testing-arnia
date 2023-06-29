import Counter from "./Counter"
import { render, screen } from "@testing-library/react"

describe("Counter Component", () => {
  it("should appear on the screen with the number 0 rendered", () => {
    render(<Counter />)
    screen.debug()
  })
})
