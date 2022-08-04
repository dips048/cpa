import * as React from "react"

const FooterCard = ({ card }) => (
  <div style={{ padding: "0 .5rem", textAlign: "center" }}>
    <div></div>
    <h3>{card.heading}</h3>
    <p>{card.content}</p>
    <button href={card.link}>{card.linkTitle}</button>
  </div>
)

export default FooterCard
