import React from "react"
import renderer from "react-test-renderer"
import Layout from "../layout"
import Header from "../header"
import Footer from "../footer"
import TestRenderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"

describe("Layout", () => {
  it.skip("renders correctly", () => {
    const tree = renderer.create(<Layout />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test.skip("should renders `Header` & `Footer' components", () => {
    useStaticQuery.mockReturnValueOnce({
      site: {
        siteMetadata: {
          title: `CPA Solutions`,
          menuLinks: [],
        },
      },
    })

    const testRenderer = TestRenderer.create(<Layout />)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(Header)).toBeTruthy()
    expect(testInstance.findByType(Footer)).toBeTruthy()
  })
})
