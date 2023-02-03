import React, { Component } from 'react';
import { Row, Col, Button, Modal, ListGroup, Tab, Badge } from 'react-bootstrap';

import CptCodeItemComponent from './CptCodeItemComponent'
import CptCodeItemPlaceholderComponent from './CptCodeItemPlaceholderComponent'
import OfficeItemComponent from './OfficeItemComponent'
import OfficeItemPlaceholderComponent from './OfficeItemPlaceholderComponent'
import Api from '../../api';

class AppointmentWidgetComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showWidget: false,
      activeStep: 1,
      cptCodes: null,
      offices: null,
    }

    this.handleStepClick = this.handleStepClick.bind(this)
    this.handleCptCodeSelect = this.handleCptCodeSelect.bind(this)
    this.openWidget = this.openWidget.bind(this)
    this.closeWidget = this.closeWidget.bind(this)
    this.renderCptCodes = this.renderCptCodes.bind(this)
    this.renderOffices = this.renderOffices.bind(this)
  }

  handleStepClick() {
    if(this.state.activeStep === 2)
      this.setState({
        activeStep: 1,
        offices: null,
      })
  }

  handleCptCodeSelect(cptCodeId) {
    this.setState({ activeStep: 2 })

    Api.offices(cptCodeId)
      .then((response) => {
        this.setState({ offices: response.data })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  openWidget() {
    this.setState({ showWidget: true })

    Api.cptCodes()
      .then((response) => {
        this.setState({ cptCodes: response.data })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  closeWidget() {
    this.setState({ showWidget: false })
  }

  renderCptCodes() {
    const { cptCodes } = this.state

    if(cptCodes) {
      return cptCodes.map((cptCodeData) => {
        const { id, attributes } = cptCodeData

        return (
          <CptCodeItemComponent 
            key={ id } 
            id={ id }
            description={ attributes.description }
            duration={ attributes.duration }
            onSelect={ this.handleCptCodeSelect }
          />
        )
      })
    }
    else {
      return [<CptCodeItemPlaceholderComponent key={1} />, <CptCodeItemPlaceholderComponent key={2} />]
    }
  }

  renderOffices() {
    const { offices } = this.state

    if(offices) {
      return offices.map((officeData) => {
        const { id, attributes } = officeData

        return (
          <OfficeItemComponent 
            key={ id } 
            id={ id }
            name={ attributes.name }
            phone={ attributes.phone }
          />
        )
      })
    }
    else {
      return [<OfficeItemPlaceholderComponent key={1} />, <OfficeItemPlaceholderComponent key={2} />]
    }
  }

  render() {
    const { activeStep } = this.state

    return (
      <>
        <Button variant="primary" onClick={this.openWidget} className="mt-2">
          Request Appointment
        </Button>

        <Modal show={this.state.showWidget} onHide={this.closeWidget} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              Request an Appointment
              {' '}
              <small className="text-muted">The Therapy Center</small>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
              <Row>
                <Col sm={4}>
                  <ListGroup as='ul'>
                    <ListGroup.Item action as='li' href="#link1" onClick={this.handleStepClick} active={activeStep === 1} disabled={activeStep <= 1}>
                      <Badge pill bg="dark">1</Badge>
                      {' '}
                      Select Service
                    </ListGroup.Item>
                    <ListGroup.Item action as='li' href="#link2" onClick={this.handleStepClick} active={activeStep === 2} disabled={activeStep <= 2}>
                      <Badge pill bg="dark">2</Badge>
                      {' '}
                      Select Location
                    </ListGroup.Item>
                    <ListGroup.Item action as='li' href="#link3" onClick={this.handleStepClick} active={activeStep === 3} disabled={activeStep <= 3}>
                      <Badge pill bg="dark">3</Badge>
                      {' '}
                      Select Date & Time
                    </ListGroup.Item>
                    <ListGroup.Item action as='li' href="#link4" onClick={this.handleStepClick} active={activeStep === 4} disabled={activeStep <= 4}>
                      <Badge pill bg="dark">4</Badge>
                      {' '}
                      Contact Information
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1" active={activeStep === 1}>
                      { this.renderCptCodes() }
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2" active={activeStep === 2}>
                      <Row>
                        { this.renderOffices() }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3" active={activeStep === 3}>
                      -/-
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link4" active={activeStep === 4}>
                      -/-
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AppointmentWidgetComponent;