import * as React from "react"
import { container } from "../styles/newsletter.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeed } from "@fortawesome/free-solid-svg-icons"

const Newsletter = () => {
  return (
    <div className={container}>
      <h2>Newsletter</h2>
      <p>
        Subscribe to our newsletter to receive news, updates, and valuable tips.
      </p>
      <div className="mx-auto">
        <form className="col-sm-8 mx-auto d-inline">
          <input type="text" name="email" placeholder="Email" />
          <button
            type="submit"
            name="submit"
            aria-label="submit"
            className="btn btn-primary"
          >
            <FontAwesomeIcon data-testid="fa-icon" icon={faFeed} />
          </button>
        </form>
      </div>
    </div>
  )
}
export default Newsletter
