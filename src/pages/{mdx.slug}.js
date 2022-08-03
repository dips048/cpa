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
          {/* {console.log(data.mdx.frontmatter.url.split("/"))}
          {data.mdx.frontmatter.url.split("/").map((link, i) => (
            <Breadcrumb.Item href={"/" + link}>
              {data.mdx.frontmatter.title}
            </Breadcrumb.Item>
          ))} */}
          <Breadcrumb.Item active href={"/" + data.mdx.frontmatter.url}>
            {data.mdx.frontmatter.title}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Heading title={data.mdx.frontmatter.title} />
      <Container className="position-relative">
        <div className="row my-5">
          <div className="col-md-7">
            
            {" "}
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 d-none d-md-block">
            <div
              className="text-center"
              style={{ position: "sticky", top: "0" }}
            >
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
        </div>
      </Container>
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
