import React from 'react'
import PropTypes from 'prop-types'
import { Col, Card, Button, Placeholder } from 'react-bootstrap'

const OfficeItemPlaceholderComponent = () => {
  const imageUrl = 'https://via.placeholder.com/600x400?text='

	return (
    <Col xs={6}>
  		<Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={3} /> <Placeholder xs={5} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder.Button variant="success" xs={6} />
        </Card.Body>
      </Card>
    </Col>
	)
}

export default OfficeItemPlaceholderComponent