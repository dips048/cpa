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
  function isLast(index) {
    return index === props.crumbs.length - 1
  }

  return (
    <nav className="row justify-content-center">
      <ol className="breadcrumb" style={breadcrumb}>
        <li style={linkStyle} key={"home"}>
          <Link  to="/">
            home
          </Link>
        </li>
        {props.crumbs.map((crumb, ci) => {
          const disabled = isLast(ci) ? "disabled" : ""
          let link = "/"
          for (let i = 0; i <= ci; i++) {
            link = link + props.crumbs[i] + "/"
          }
          return (
            <li key={ci} className={`align-items-center ${disabled}`}>
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
