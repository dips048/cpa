import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Heading from "../components/heading"
import woman from "../../static/woman-1.png"
import Breadcrumb from "../components/breadcrumb"
import { Container } from "react-bootstrap"
import { SEO } from "../components/seo"

const Page = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Breadcrumb crumbs={data.mdx.frontmatter.url.split("/")}></Breadcrumb>
      </Container>
      <Heading title={data.mdx.frontmatter.title} />
      <Container className="position-relative">
        <div className="row my-5">
          <div className="col-lg-7">
            {" "}
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            {data.mdx.frontmatter.useForm && (
              <div className="mx-auto" style={{ maxWidth: "400px" }}>
                <form>
                  <div className="mb-3">
                    <label for="" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label for="" className="form-label">
                      Email address
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label for="" className="form-label">
                      Phone Number
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label for="" className="form-label">
                      Best Time To Call
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label for="">Comments</label>
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                    ></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" for="">
                      CAPTCHA Image
                    </label>
                  </div>
                  <div className="mb-3">
                    <input type="" className="form-control" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <a id="captcha_refresh" href="#">
                      [ Show a different Image ]
                    </a>
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4 d-none d-lg-block">
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
              <button class="btn btn-primary">Request A Free Consultation</button>
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
        useForm
      }
      body
    }
  }
`

export default Page

export const Head = ({data}) => (
  <SEO title={"CPA Solutions | " + data.mdx.frontmatter.title}/>
)