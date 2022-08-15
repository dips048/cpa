import * as React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

const linkStyle = {
  display: "block",
  flexGrow: 1,
  padding: ".5em",
  textDecoration: "none",
}

function Breadcrumb(props) {
  return (
    <Container>
      <ol
        className="d-flex justify-content-center justify-content-lg-start p-0"
        style={{ listStyle: "none" }}
      >
        <li key={"home"}>
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </li>
      
        {props.crumbs.map((crumb, ci) => {
          const last = props.crumbs.length-1;
          let link = "/"
          for (let i = 0; i <= ci; i++) {
            link = link + props.crumbs[i] + "/"
          }
          return (
            <li key={ci}>
              <Link style={linkStyle} className={last === ci ? "disabled" : ""} to={link}>
                {crumb
                  .split("-")
                  .map(
                    word => word[0].toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </Link>
            </li>
          )
        })}
      </ol>
    </Container>
  )
}

export default Breadcrumb
