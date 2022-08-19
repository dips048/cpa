import React from "react"
import renderer from "react-test-renderer"
import Newsletter from "../newsletter"
import { render } from "@testing-library/react"

describe("Newsletter", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Newsletter/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("should render given `title`" , () => {
    const { getByText, getByTestId } = render(<Newsletter />)
    expect(getByText("Newsletter")).toBeInTheDocument()
    expect(getByText("Subscribe to our newsletter to receive news, updates, and valuable tips.")).toBeInTheDocument()
    expect(getByTestId("fa-icon")).toBeInTheDocument()
  })
})
