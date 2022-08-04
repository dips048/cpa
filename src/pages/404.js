import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exists.</p>
      <Link to="/">Home</Link>
    </div>
  </Layout>
)

export default NotFoundPage