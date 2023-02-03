import React from 'react'
import { Row, Col, Placeholder } from 'react-bootstrap'

const CptCodeItemPlaceholderComponent = () => {
	return (
    <Row className="border rounded p-4 mb-3">
      <Col xs={8}>
        <p className="m-0">
          <Placeholder animation="glow">
            <Placeholder xs={3} /> <Placeholder xs={5} /> <Placeholder xs={2} />
          </Placeholder>
        </p>
        <small className="text-muted">
          <Placeholder animation="glow">
            <Placeholder xs={1} /> <Placeholder xs={3} />
          </Placeholder>
        </small>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <Placeholder.Button variant="success" xs={8} />
      </Col>
    </Row>
	)
}

export default CptCodeItemPlaceholderComponent