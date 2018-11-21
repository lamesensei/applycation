import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ListGroup,
  ListGroupItemHeading,
  ListGroupItemText,
  ListGroupItem
} from 'reactstrap';

class PocPanel extends Component {
  render() {
    return (
      <>
        <Card className="mb-2">
          {/* <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            /> */}
          <CardBody>
            <CardTitle> {this.props.name}</CardTitle>
            <CardSubtitle> {this.props.role}</CardSubtitle>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>{this.props.email}</ListGroupItem>
            <ListGroupItem>{this.props.tel}</ListGroupItem>
          </ListGroup>
        </Card>
      </>
    );
  }
}

export default PocPanel;
