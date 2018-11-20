import React, { Component } from 'react';
import { Button, ButtonGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Job from '../functions/job';

class JobItem extends Component {
  clickHandler = () => {
    Job.destroy(this.props.id, this.props.deleteHandler);
  };
  render() {
    return (
      <ListGroupItem>
        <ButtonGroup>
          <Button outline color="secondary">
            <Link className="font-weight-bold text-black" to={`/job/${this.props.id}`}>
              {this.props.title}
            </Link>
          </Button>

          <Button>Stages</Button>
          {this.props.job.stages.map((stage, index) => {
            return <Button key={index}>{stage.name}</Button>;
          })}
        </ButtonGroup>
        <Button onClick={this.clickHandler} color="danger" className="float-right">
          <i className="fas fa-trash-alt" />
        </Button>
      </ListGroupItem>
    );
  }
}

export default JobItem;
