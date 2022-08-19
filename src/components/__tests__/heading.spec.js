import React from "react"
import renderer from "react-test-renderer"
import Heading from "../heading"
import { render } from "@testing-library/react"

describe("Heading", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Heading title={"About"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("should render given `title`" , () => {
    const { getByText } = render(<Heading title={"About"} />)
    expect(getByText("About")).toBeInTheDocument()
  })
})
