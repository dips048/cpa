import * as React from "react"
import { footerCard } from "./footer-card.module.css"

const FooterCard = ({card}) => (
  <div className={footerCard}>
    <div></div>
    <h3>{card.heading}</h3>
    <p>{card.content}</p>
    <button href={card.link}>{card.linkTitle}</button>
  </div>
)

export default FooterCard
