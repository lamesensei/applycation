import React, { Component } from 'react';
import { Button, UncontrolledAlert } from 'reactstrap';
import PocForm from './PocForm';
import PocPanel from './PocPanel';
import Job from '../functions/job';

class PocContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobId: props.jobId,
      showForm: false,
      pocCreated: undefined,
      pocDeleted: undefined,
      pocs: []
    };
  }
  populatePocs = (data) => {
    this.setState({ pocs: [...data.pocs] });
  };

  togglePocForm = (data) => {
    Job.pocs(this.state.jobId, this.populatePocs);
    this.setState({
      showForm: !this.state.showForm,
      pocCreated: data.name
    });
  };

  componentDidMount = () => {
    if (localStorage.id) Job.pocs(this.state.jobId, this.populatePocs);
  };

  render() {
    const pocs = this.state.pocs.map((item) => {
      return (
        <PocPanel
          key={item.id}
          id={item.id}
          name={item.name}
          role={item.role}
          email={item.email}
          tel={item.tel}
          deleteHandler={this.deleteHandler}
        />
      );
    });
    return (
      <div>
        <div className="mt-2 mb-2">
          <Button size="sm" onClick={this.togglePocForm}>
            Add PoC
          </Button>
        </div>
        {this.state.showForm && <PocForm jobId={this.state.jobId} toggleOff={this.togglePocForm} />}
        <div>
          {this.state.pocCreated && (
            <UncontrolledAlert color="success">{this.state.pocCreated} created!</UncontrolledAlert>
          )}
          {this.state.pocDeleted && (
            <UncontrolledAlert color="danger">{this.state.pocDeleted} deleted!</UncontrolledAlert>
          )}
        </div>
        {pocs}
      </div>
    );
  }
}

export default PocContainer;