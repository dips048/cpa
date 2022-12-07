import React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Heading from "../components/heading"
import Breadcrumb from "../components/breadcrumb"
import { Container } from "react-bootstrap"
import { Seo } from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import ContactUsModel from "../components/contact-us-modal"
import FormPage from "../components/formPage"

const Page = ({ data }) => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <Layout>
      <Breadcrumb crumbs={data.mdx.frontmatter.url.split("/")}></Breadcrumb>
      <Heading title={data.mdx.frontmatter.title} />
      <Container className="position-relative">
        <div className="row my-5">
          <div className="col-lg-7">
            {" "}
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            {data.mdx.frontmatter.useForm && (
              <FormPage />
              // <div className="mx-auto" style={{ maxWidth: "400px" }}>
              //   <form action="https://formsubmit.co/dp150330@gmail.com" method="POST">
              //     <div className="mb-3">
              //       <label htmlFor="name" className="form-label">
              //         Name
              //       </label>
              //       <input name="name" type="text" id="name" className="form-control" />
              //     </div>
              //     <div className="mb-3">
              //       <label htmlFor="email" className="form-label">
              //         Email address
              //       </label>
              //       <input name="email" type="email" id="email" className="form-control" />
              //     </div>
              //     <div className="mb-3">
              //       <label htmlFor="pNumber" className="form-label">
              //         Phone Number
              //       </label>
              //       <input name="phone" type="text" id="pNumber" className="form-control" />
              //     </div>
              //     <div className="mb-3">
              //       <label htmlFor="callTime" className="form-label">
              //         Best Time To Call
              //       </label>
              //       <input
              //         name="callTime"
              //         type="text"
              //         id="callTime"
              //         className="form-control"
              //       />
              //     </div>
              //     <div className="mb-3">
              //       <label htmlFor="comments">Comments</label>
              //       <textarea
              //         name="comments"
              //         id="comments"
              //         className="form-control"
              //         placeholder="Leave a comment here"
              //       ></textarea>
              //     </div>
              //     <input type="hidden" name="_next" value="/services/services-for-individuals"></input>
              //     <div className="d-flex justify-content-end">
              //       <button type="submit" className="btn btn-primary">
              //         Send
              //       </button>
              //     </div>
              //   </form>
              // </div>
            )}
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="text-center position-sticky top-0">
              <StaticImage
                className="mx-auto"
                src="../../static/woman-1.png"
                alt="woman-1"
                width={260}
                height={400}
              />
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setModalShow(true)}
              >
                Request A Free Consultation
              </button>
              <ContactUsModel
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
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

export const Head = ({ data }) => (
  <Seo title={"CPA Solutions | " + data.mdx.frontmatter.title} />
)
