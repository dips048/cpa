import React from "react"
import renderer from "react-test-renderer"
import CallLink from "../callLink"
import { render } from "@testing-library/react"


const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>
test("Displays the correct title", () => {
  const { getByTestId } = render(<Title />)
  // Assertion
  expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
  // --> Test will pass
})

describe("CallLink", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CallLink/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
