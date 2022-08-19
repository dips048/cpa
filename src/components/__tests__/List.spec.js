import React from "react"
import renderer from "react-test-renderer"
import List from "../list"
import TestRenderer from "react-test-renderer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Offcanvas from "react-bootstrap/Offcanvas"
import CallLink from "../callLink"
import { render, fireEvent } from "@testing-library/react"

describe("List", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<List />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("should renders `FontAwesomeIcon` & `CallLink' components", () => {
    const testRenderer = TestRenderer.create(<List />)
    const testInstance = testRenderer.root
    expect(testInstance.findAllByType(FontAwesomeIcon).length).toEqual(5)
    expect(testInstance.findByType(CallLink)).toBeTruthy()
    expect(testInstance.findByType(Offcanvas)).toBeTruthy()
  })

  test("on clicking `Menu button` it should open off canvas", () => {
    const { getByText, getByTestId } = render(
      <List menuLinks={[]} comapanyName={"MyCompany"} />
    )
    const menuButton = getByTestId("fa-icon-menu")
    expect(menuButton).toBeInTheDocument()
    fireEvent.click(menuButton);
    expect(getByText("Menu")).toBeInTheDocument();
  })
})
