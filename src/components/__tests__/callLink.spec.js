import React from "react"
import renderer from "react-test-renderer"
import CallLink from "../callLink"
import { render, screen } from "@testing-library/react"


describe("CallLink", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CallLink/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("when `Icon` is `true` should renders icon", () => {
    const { getByTestId } = render(<CallLink icon={true} />)
    expect(getByTestId("fa-icon")).toBeInTheDocument()
  })

  test("when `number` is given should renders with given number", () => {
    const { getByText } = render(<CallLink number={"12345676890"} />)
    expect(getByText("12345676890")).toBeInTheDocument()
  })
})
