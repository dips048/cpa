import * as React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

const linkStyle = {
  display: "inline-block",
  textDecoration: "none",
}

function Breadcrumb(props) {
  return (
    <Container className="text-center text-lg-start py-2">
      <Link style={linkStyle} to="/">
        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Home
      </Link>
      <>&nbsp;&nbsp;/&nbsp;&nbsp;</>
      {props.crumbs.map((crumb, ci) => {
        const last = props.crumbs.length - 1
        let link = "/"
        for (let i = 0; i <= ci; i++) {
          link = link + props.crumbs[i] + "/"
        }
        return (
            <Link
              style={linkStyle}
              className={last === ci ? "disabled" : ""}
              to={link}
              key={"breadcrumb-link" + ci}
            >
              {crumb
                .split("-")
                .map(
                  word => word[0].toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}
                {last !== ci && <>&nbsp;&nbsp;/&nbsp;&nbsp;</>}
            </Link>
        )
      })}
    </Container>
  )
}

export default Breadcrumb
