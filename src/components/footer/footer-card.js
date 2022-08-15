import * as React from "react"
import { Link } from "gatsby"

const FooterCard = ({ card }) => (
  <div style={{ padding: "0 .5rem", textAlign: "center" }}>
    <div></div>
    <h3>{card.heading}</h3>
    <p>{card.content}</p>
    <button class="btn btn-primary"><Link style={{textDecoration: 'none', color: "#fff"}} to={card.link}>{card.linkTitle}</Link></button>
  </div>
)

export default FooterCard
