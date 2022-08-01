import * as React from "react"
import { container } from "./layout.module.css"
import Header from "./header"
import Footer from "./footer/footer"
import { useStaticQuery, graphql } from 'gatsby'


const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <div className={container}>
      <Header companyName={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
