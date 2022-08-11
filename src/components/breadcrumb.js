import * as React from "react"
import { Link } from "gatsby"

const breadcrumb = {
  backgroundColor: "white",
  borderRadius: "0.37rem",
}

const linkStyle = {
  display: "block",
  flexGrow: 1,
  padding: ".5em",
  textDecoration: "none",
}

function Breadcrumb(props) {
  return (
    <nav className="row justify-content-center">
      <ol className="breadcrumb" style={breadcrumb}>
        <li key={"home"}>
          <Link style={linkStyle} to="/">
            home
          </Link>
        </li>
        {props.crumbs.map((crumb, ci) => {
          let link = "/"
          for (let i = 0; i <= ci; i++) {
            link = link + props.crumbs[i] + "/"
          }
          return (
            <li key={ci}>
              <Link style={linkStyle} to={link}>
                {crumb}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
