import React from "react"
import renderer from "react-test-renderer"
import Home from "../home"
import { render, fireEvent } from "@testing-library/react"
import TestRenderer from "react-test-renderer"
import ContactUsModel from "../contact-us-modal"
import CallLink from "../callLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Home", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Home />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("renders `FontAwesomeIcon`, `ContactUsModel`, `CallLink` components", () => {
    const testRenderer = TestRenderer.create(
      <Home />
    )
    const testInstance = testRenderer.root
    expect(testInstance.findAllByType(FontAwesomeIcon).length).toEqual(4)
    expect(testInstance.findByType(ContactUsModel)).toBeTruthy()
    expect(testInstance.findAllByType(CallLink).length).toEqual(1)
  })
  
  test("on clicking `Free Consultation` it should open Free Consultation modal", () => {
    const { getByText, getByRole } = render(
      <Home />
    )
    const freeConsultation = getByText("Free Consultation")
    expect(freeConsultation).toBeInTheDocument()
    fireEvent.click(freeConsultation);
    expect(getByRole("dialog")).toBeInTheDocument();
    const sendButton = getByText("Send");
    fireEvent.click(sendButton);
  })
})

