import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button,
  ListGroup
} from 'reactstrap';

import Stage from '../functions/stage';
import TaskItem from '../task/TaskItem';

class StagePanel extends Component {
  clickHandler = () => {
    Stage.destroy(this.props.id, this.props.deleteHandler);
  };
  render() {
    return (
      <Card className="mb-2">
        {/* <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        /> */}
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardSubtitle>Due {this.props.due}</CardSubtitle>
          <CardText>{this.props.notes}</CardText>
        </CardBody>
        <ListGroup flush>
          <TaskItem />
        </ListGroup>
        <CardFooter className="text-muted">
          <Button className="float-right" size="sm" color="danger" onClick={this.clickHandler}>
            <i className="fas fa-trash-alt" />
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

export default StagePanel;
