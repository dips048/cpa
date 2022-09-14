import React from "react"
import {
  // pattern1,
  globe,
  globe1,
  globe2,
  globe3,
  globe4,
} from "../styles/home.module.scss"
import { Container } from "react-bootstrap"

const Heading = ({ title }) => {
  return (
    <div className="heading">
      {/* <div className={pattern1}></div> */}
      <div className={globe}>
        <div className={globe1}></div>
        <div className={globe2}></div>
        <div className={globe3}></div>
        <div className={globe4}></div>
      </div>
      <Container style={{ zIndex: 1 }}>
        <div className="row py-5">
          <h1
            data-sal="slide-down"
            data-sal-duration="2000"
            data-sal-easing="ease"
          >
            {title}
          </h1>
        </div>
      </Container>
    </div>
  )
}

export default Heading
