import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

const CallLink = props => {
  const number = props.number ? props.number : "(800) 896-4500"
  return (
    <a href={"tel:" + number} style={props.style} className={props.className}>
      {props.icon ? <FontAwesomeIcon icon={faPhone} size="sm"></FontAwesomeIcon> : number}
    </a>
  )
}

export default CallLink
