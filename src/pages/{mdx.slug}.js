import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Heading from "../components/heading"
import woman from "../images/woman-1.png"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import { Container } from "react-bootstrap"

const Page = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active href={"/" + data.mdx.frontmatter.url}>
            {data.mdx.frontmatter.title}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Heading title={data.mdx.frontmatter.title}/>
      <div style={{zIndex: 1}}>
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
        url
      }
      body
    }
  }
`

export default Page
