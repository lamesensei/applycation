import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
  CardImg
} from 'reactstrap';
import { MDBCol } from 'mdbreact';

class PocPanel extends Component {
  render() {
    return (
      <MDBCol size="6">
        <Card>
          <CardImg className="img-fluid" src={this.props.image} />
          <CardBody>
            <CardTitle> {this.props.name}</CardTitle>
            <CardSubtitle> {this.props.role}</CardSubtitle>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>{this.props.email}</ListGroupItem>
            <ListGroupItem>{this.props.tel}</ListGroupItem>
          </ListGroup>
        </Card>
      </MDBCol>
    );
  }
}

export default PocPanel;
