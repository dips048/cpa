import * as React from "react"

const FooterCard = ({ card }) => (
  <div className="col-lg-4 col-md-6 mx-auto" style={{ padding: ".5rem", textAlign: "center" }}>
    <div></div>
    <h3>{card.heading}</h3>
    <p>{card.content}</p>
    <button className="btn btn-primary"><a style={{textDecoration: 'none', color: "#fff"}} href={card.link}>{card.linkTitle}</a></button>
  </div>
)

export default FooterCard
