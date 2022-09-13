import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { disabledLink } from "../styles/call-link.module.scss"

const CallLink = props => {
  const number = props.number ? props.number : "(800) 896-4500"
  return (
    <a href={"tel:" + number} style={props.style} className={props.className + ' ' + disabledLink}>
      {props.icon ? <FontAwesomeIcon data-testid="fa-icon" icon={faPhone} size="sm"></FontAwesomeIcon> : number}
    </a>
  )
}

export default CallLink
