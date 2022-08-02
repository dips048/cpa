import * as React from "react"
import FooterCard from "./footer-card"
import FooterNav from "./footer-nav"
import { container } from "./footer.module.css"
import Newsletter from "./newsletter"
import { Container } from "react-bootstrap"

const data = [
  {
    icon: "",
    heading: "Ask a Question",
    content:
      "Find comfort in knowing an Expert in accounting is only an email or phone-call away.",
    linkTitle: "(800) 896-4500",
    link: "tel:(800) 896-4500",
  },
  {
    icon: "",
    heading: "Send us a File",
    content:
      "Use our convenient SecureSend page to securely deliver a file directly to a member of our firm.",
    linkTitle: "Contact Us",
    link: "/contact",
  },
  {
    icon: "",
    heading: "Ask a Question",
    content:
      "Find comfort in knowing an Expert in accounting is only an email or phone-call away.",
    linkTitle: "Secure Send",
    link: "/",
  },
]

const Footer = () => (
  <Container>
    <footer>
      <div className={container}>
        {data.map((card, i) => (
          <FooterCard key={i} card={card} />
        ))}
      </div>
      <div className={container}>
        <Newsletter />
      </div>
      <div className={container}>
        <FooterNav />
      </div>
    </footer>
  </Container>
)

export default Footer
