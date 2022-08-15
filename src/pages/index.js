import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import { SEO } from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Home></Home>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)