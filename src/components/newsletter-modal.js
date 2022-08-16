import * as React from "react"
import Modal from "react-bootstrap/Modal"
import Newsletter from "./newsletter"

const NewsletterModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Newsletter />
      </Modal.Body>
    </Modal>
  )
}

export default NewsletterModal
