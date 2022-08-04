import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

const NotFoundPage = () => (
  <Container>
    <div>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exists.</p>
      <Link to="/">Home</Link>
    </div>
  </Container>
)

export default NotFoundPage
