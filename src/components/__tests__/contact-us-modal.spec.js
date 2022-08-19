import React from "react"
import renderer from "react-test-renderer"
import ContactUsModel from "../contact-us-modal"
import { render, fireEvent } from "@testing-library/react"

describe("ContactUsModel", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ContactUsModel />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
