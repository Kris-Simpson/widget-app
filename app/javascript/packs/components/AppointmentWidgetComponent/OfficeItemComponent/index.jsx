import React from 'react'
import PropTypes from 'prop-types'
import { Col, Card, Button } from 'react-bootstrap'

const propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}

const OfficeItemComponent = ({ id, name, phone }) => {
  const imageUrl = 'https://widget-cdn.simplepractice.com/assets/images/telehealth@2x-f0d7694d79cb6c472cf972617f3837be.png'

	return (
    <Col xs={6}>
  		<Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{ name }</Card.Title>
          <Card.Text>{ phone }</Card.Text>
          <Button variant="success">SELECT</Button>
        </Card.Body>
      </Card>
    </Col>
	)
}

OfficeItemComponent.propTypes = propTypes

export default OfficeItemComponent