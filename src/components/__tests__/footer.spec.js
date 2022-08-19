import React from "react"
import renderer from "react-test-renderer"
import Footer from "../footer"
import { render } from "@testing-library/react"

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Footer companyName={"MyCompany"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("should render footer cards `Ask a Question`, `We Are Here to Help` & `Send Us a File`" , () => {
    const { getByText, getAllByTestId, getAllByRole } = render(<Footer companyName={"MyCompany"} />)
    expect(getByText("Send Us a File")).toBeInTheDocument()
    expect(getByText("We Are Here to Help")).toBeInTheDocument()
    expect(getByText("Ask a Question")).toBeInTheDocument()
    expect(getAllByTestId("fa-icon").length).toEqual(4)
    expect(getAllByRole("button").length).toEqual(4)
  })
})
