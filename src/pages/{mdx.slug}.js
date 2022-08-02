import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import woman from "../images/woman-1.png"

const Page = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1 style={{ margin: "1rem 2rem" }}>{data.mdx.frontmatter.title}</h1>
      </div>
      <div style={{}}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
      <div style={{}}>
        <div class="text-center postion-sticky-top">
          <img
            style={{ margin: "0 auto" }}
            width={"260px"}
            height={"400px"}
            src={woman}
            alt="woman"
          />
          <button>Request A Free Consultation</button>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default Page
