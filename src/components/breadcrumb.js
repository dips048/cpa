import * as React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

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
        className="d-flex flex-row justify-content-center justify-content-lg-start p-0 m-0"
        style={{ listStyle: "none" }}
      >
        <li key={"home"}>
          <Link style={linkStyle} to="/">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Home
          </Link>
        </li>
        <li className="p-2">/</li>
        {props.crumbs.map((crumb, ci) => {
          const last = props.crumbs.length - 1
          let link = "/"
          for (let i = 0; i <= ci; i++) {
            link = link + props.crumbs[i] + "/"
          }
          return (
            <li className="d-flex flex-row" key={ci}>
              <Link
                style={linkStyle}
                className={last === ci ? "disabled" : ""}
                to={link}
              >
                {crumb
                  .split("-")
                  .map(
                    word => word[0].toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </Link>
              <p className={last === ci ? "d-none" : "p-2"}>/</p>
            </li>
            
          )
        })}
      </ol>
    </Container>
  )
}

export default Breadcrumb
