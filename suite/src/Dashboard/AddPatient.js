import {Button, Form, Modal} from 'react-bootstrap';
import './AddPatient.css'

function AddPatient(props) {
  console.log(props.show)
  return (
      <Modal show={props.show} onHide={props.handleModal}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Add Patient</h3><button className='pid' disabled>Patient ID : 201</button></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="weight">
              <Form.Label>Weight(kg)</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="height">
              <Form.Label>Height(cm)</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bmi">
              <Form.Label>BMI</Form.Label>
              <Form.Control
                type="text"
                placeholder="20"
                disabled
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="history"
            >
              <Form.Label>Medical History</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleModal}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default AddPatient