import React from "react"
import { siteConfig } from '../../site-config';

const NewsLettermMdx = () => {
  return (
    siteConfig.newsletterFeatureToggle && <p>
      <strong>
        <a href="/resources/newsletter">Newsletter</a>
      </strong>
      <br></br>
      Our regularly updated newsletter provides timely articles to help you
      achieve your financial goals.
    </p>
  )
}

export default NewsLettermMdx
