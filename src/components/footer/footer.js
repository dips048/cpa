import * as React from "react"
import FooterCard from "./footer-card"
import FooterNav from "./footer-nav"
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
    link: "/resources/secure-send",
  },
]

const Footer = ({menuLinks, companyName}) => (

    <footer>
      <Container className="row text-center mx-auto">
        {data.map((card, i) => (
          <FooterCard key={i} card={card} />
        ))}
      </Container>
      <Newsletter />
      <FooterNav menuLinks={menuLinks} companyName={companyName} />
    </footer>
)

export default Footer
