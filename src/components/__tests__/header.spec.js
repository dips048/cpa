import React from "react"
import renderer from "react-test-renderer"
import Header from "../header"
import NavList from "../nav-list"
import List from "../List"
import LoginModal from "../login-modal"
import NewsletterModal from "../newsletter-modal"
import CallLink from "../callLink"
import { fireEvent, render } from "@testing-library/react"
import TestRenderer from "react-test-renderer"

describe("Header", () => {
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
      subLinks: [],
    },
  ]

  it("renders correctly", () => {
    const tree = renderer
      .create(<Header menuLinks={menuLinks} comapanyName={"MyCompany"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("should render given 'login' & 'subscribe' buttons ", () => {
    const { getByText } = render(
      <Header menuLinks={menuLinks} comapanyName={"MyCompany"} />
    )
    expect(getByText("Login")).toBeInTheDocument()
    expect(getByText("Subscribe")).toBeInTheDocument()
  })

  test("renders `NavList`, `CallLink', `List`, `NewsLetter`, & `LoginModal` components", () => {
    const testRenderer = TestRenderer.create(
      <Header menuLinks={menuLinks} comapanyName={"MyCompany"} />
    )
    const testInstance = testRenderer.root
    expect(testInstance.findByType(NavList)).toBeTruthy()
    expect(testInstance.findByType(LoginModal)).toBeTruthy()
    expect(testInstance.findByType(NewsletterModal)).toBeTruthy()
    expect(testInstance.findAllByType(CallLink).length).toEqual(2)
    expect(testInstance.findByType(List)).toBeTruthy()
  })

  test("on clicking `login button` it should open login modal", () => {
    const { getByText, getByRole } = render(
      <Header menuLinks={menuLinks} comapanyName={"MyCompany"} />
    )
    const loginButton = getByText("Login")
    expect(loginButton).toBeInTheDocument()
    fireEvent.click(loginButton);
    expect(getByRole("dialog")).toBeInTheDocument();
  })

  test("on clicking `Subscribe Button` it should open Subscribe modal", () => {
    const { getByText, getByRole } = render(
      <Header menuLinks={menuLinks} comapanyName={"MyCompany"} />
    )
    const subscribeButton = getByText("Subscribe")
    expect(subscribeButton).toBeInTheDocument()
    fireEvent.click(subscribeButton);
    expect(getByRole("dialog")).toBeInTheDocument();
  })
})
