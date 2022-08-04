import * as React from "react"
import { container } from "./newsletter.module.scss"

const Newsletter = () => {
  return (
    <div className={container}>
      <h2>Newsletter</h2>
      <p>
        Subscribe to our newsletter to receive news, updates, and valuable tips.
      </p>
      <div>
        <form>
          <input type="text" name="email" placeholder="Email" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}
export default Newsletter
