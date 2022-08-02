import * as React from "react"
import { Link } from "gatsby"
import {
  navLinks,
  navLinkItem,
  navLinkText,
  navLinkContainer,
} from "./header.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ companyName }) => {
  const markdowns = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
          }
          slug
          id
        }
      }
    }
  `)

  return (
    <nav className={navLinkContainer}>
      <h1>{companyName}</h1>
      <ul className={navLinks}>
        {markdowns.allMdx.nodes.map(node => (
          <li className={navLinkItem} key={node.id}>
            <Link to={"/" + node.slug} className={navLinkText}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header
