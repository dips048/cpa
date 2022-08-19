import React from "react"
import renderer from "react-test-renderer"
import FooterNav from "../footer-nav"
import { render } from "@testing-library/react"

describe("FooterNav", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<FooterNav companyName={"MyCompany"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("should render the default list (contact) with `companyName", () => {
    const { getByText } = render(<FooterNav companyName={"MyCompany"} />)
    expect(getByText("Contact")).toBeInTheDocument()
    expect(getByText("support@cpasitesolutions.com")).toBeInTheDocument()
    expect(getByText("© MyCompany 2022")).toBeInTheDocument()
    expect(getByText("Site Map")).toBeInTheDocument()
    expect(getByText("Privacy Policy")).toBeInTheDocument()
    expect(getByText("Disclaimer")).toBeInTheDocument()
  })

  test("when `menuLinks` contains the Resources links it should render the `resources` links", () => {
    const menuLinks = [
      {
        name: "Resources",
        url: "/resources",
        subLinks: [
          {
            name: "Newsletter",
            url: "/newsletter",
            subLinks: [],
          },
          {
            name: "Guides",
            url: "/guides",
            subLinks: [],
          },
        ],
      },
      {
        name: "Services",
        url: "/services",
        subLinks: []
      }
    ]

    const { getByText } = render(
      <FooterNav companyName={"MyCompany"} menuLinks={menuLinks} />
    )
    expect(getByText("Resources")).toBeInTheDocument()
    expect(getByText("Newsletter")).toBeInTheDocument()
    expect(getByText("Guides")).toBeInTheDocument()
    expect(getByText("Contact")).toBeInTheDocument()
    expect(getByText("support@cpasitesolutions.com")).toBeInTheDocument()
    expect(getByText("© MyCompany 2022")).toBeInTheDocument()
    expect(getByText("Site Map")).toBeInTheDocument()
    expect(getByText("Privacy Policy")).toBeInTheDocument()
    expect(getByText("Disclaimer")).toBeInTheDocument()
  })

  test("when `menuLinks` contains the Tax Center links it should render the `Tax Center` links", () => {
    const menuLinks = [
      {
        name: "Tax Center",
        url: "/tax-center",
        subLinks: [
          {
            name: "Track Your Refund",
            url: "/track-your-refund",
            subLinks: [],
          },
          {
            name: "Tax Due Dates",
            url: "/tax-due-dates",
            subLinks: [],
          },
        ],
      },
    ]

    const { getByText } = render(
      <FooterNav companyName={"MyCompany"} menuLinks={menuLinks} />
    )
    expect(getByText("Tax Center")).toBeInTheDocument()
    expect(getByText("Track Your Refund")).toBeInTheDocument()
    expect(getByText("Tax Due Dates")).toBeInTheDocument()
    expect(getByText("Contact")).toBeInTheDocument()
    expect(getByText("support@cpasitesolutions.com")).toBeInTheDocument()
    expect(getByText("© MyCompany 2022")).toBeInTheDocument()
    expect(getByText("Site Map")).toBeInTheDocument()
    expect(getByText("Privacy Policy")).toBeInTheDocument()
    expect(getByText("Disclaimer")).toBeInTheDocument()
  })
})
