import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardText, MDBCol, CardFooter } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import Job from '../functions/job';
import moment from 'moment';

class JobItem extends Component {
  clickHandler = (event) => {
    const action = event.target.getAttribute('name');
    if (action === 'view') this.props.history.push(`/job/${this.props.id}`);
    else if (action === 'delete') Job.destroy(this.props.id, this.props.deleteHandler);
  };

  render() {
    return (
      <MDBCol size="4" className="mt-2">
        <Card>
          <CardBody>
            <CardTitle>
              {this.props.title} <small className="float-right">{this.props.company}</small>
            </CardTitle>
            <CardText>
              {this.props.job.stages.length > 0 && (
                <React.Fragment>
                  {console.log(this.props.job.stages[this.props.job.stages.length - 1])}
                  {this.props.job.stages[this.props.job.stages.length - 1].name}{' '}
                  <strong>
                    {moment(
                      this.props.job.stages[this.props.job.stages.length - 1].due,
                      moment.ISO_8601
                    ).fromNow()}
                  </strong>
                </React.Fragment>
              )}
            </CardText>
          </CardBody>
          <CardFooter>
            <Button onClick={this.clickHandler} color="green" size="sm" name="view">
              <i className="far fa-eye" />
            </Button>
            <Button onClick={this.clickHandler} color="danger" size="sm" name="delete">
              <i className="fas fa-trash-alt" />
            </Button>
          </CardFooter>
        </Card>
      </MDBCol>
    );
  }
}

export default withRouter(JobItem);
