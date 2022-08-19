import React from "react"
import renderer from "react-test-renderer"
import Breadcrumb from "../breadcrumb"
import { render } from "@testing-library/react"


describe("Breadcrumb", () => {


  it("renders correctly", () => {
    const links = ['about', "our-values"];
    const tree = renderer
      .create(<Breadcrumb crumbs={links}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("should render links for `home`, `about` & `Our Values` page", () => {
    const links = ['about', "our-values"];
    const { getByText } = render(<Breadcrumb crumbs={links}/>)
    expect(getByText("Home")).toBeInTheDocument()
    expect(getByText("About")).toBeInTheDocument()
    expect(getByText("Our Values")).toBeInTheDocument()
  })
})
