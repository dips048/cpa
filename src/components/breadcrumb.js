import * as React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { linkStyle } from "../styles/breadcrumb.module.scss"

function Breadcrumb(props) {
  return (
    <Container className="text-center text-lg-start py-2">
      <Link className={linkStyle} to="/" key="breadcrumb-link-home">
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
          <span key={"breadcrumb-link" + ci}>
            {last !== ci ? (
              <>
                <Link className={linkStyle} to={link}>
                  {crumb
                    .split("-")
                    .map(
                      word =>
                        word[0].toUpperCase() + word.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </Link>
                <>{last !== ci && <>&nbsp;&nbsp;/&nbsp;&nbsp;</>}</>
              </>
            ) : (
              <strong>
                {crumb
                  .split("-")
                  .map(
                    word => word[0].toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </strong>
            )}
          </span>
        )
      })}
    </Container>
  )
}

export default Breadcrumb
