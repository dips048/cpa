import * as React from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"

const ContactUsModel = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="loginForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginForm.ControlInput3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginForm.ControlInput4">
            <Form.Label>Comments</Form.Label>
            <Form.Control type="textArea" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Send</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ContactUsModel
