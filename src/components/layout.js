import * as React from "react"
import Header from "./header"
import Footer from "./footer"
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
    <React.Fragment>
      <Header
        companyName={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <main>{children}</main>
      <Footer
        companyName={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
    </React.Fragment>
  )
}

export default Layout
