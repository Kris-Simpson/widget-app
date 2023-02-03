import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'react-bootstrap'

const propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
}

const CptCodeItemComponent = ({id,  description, duration, onSelect}) => {
	return (
    <Row className="border rounded p-4 mb-3">
      <Col xs={8}>
        <p className="m-0">{ description }</p>
        <small className="text-muted">{ duration } minutes</small>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <Button variant="success" onClick={() => onSelect(id)}>SELECT</Button>
      </Col>
    </Row>
	)
}

CptCodeItemComponent.propTypes = propTypes

export default CptCodeItemComponent