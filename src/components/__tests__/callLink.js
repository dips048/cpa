import React from "react"
import renderer from "react-test-renderer"
import CallLink from "../callLink"

describe("CallLink", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CallLink/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
