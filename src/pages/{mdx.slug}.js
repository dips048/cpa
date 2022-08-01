import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

const Page = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1 style={{ margin: "1rem 2rem" }}>{data.mdx.frontmatter.title}</h1>
      </div>
      <div style={{ width: "75%" }}></div>
      <div style={{ width: "25%" }}>
        <div class="text-center postion-sticky-top">
          <img
            style={{ margin: "0 auto" }}
            width="260px"
            height="400px"
            src="../images/woman-1.png"
            alt="image-1"
          />
          <button>Request A Free Consultation</button>
        </div>
      </div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default Page
