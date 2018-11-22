import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem } from 'reactstrap';

class PocPanel extends Component {
  render() {
    return (
      <Card className="mb-2">
        <CardBody>
          <CardTitle> {this.props.name}</CardTitle>
          <CardSubtitle> {this.props.role}</CardSubtitle>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>{this.props.email}</ListGroupItem>
          <ListGroupItem>{this.props.tel}</ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default PocPanel;
