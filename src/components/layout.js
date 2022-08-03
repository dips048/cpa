import * as React from "react"
import { container } from "./layout.module.css"
import Header from "./header"
import Footer from "./footer/footer"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            url
            subLinks {
              name
              url
              subLinks {
                name
                url
                subLinks {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={container}>
      <Header
        companyName={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
