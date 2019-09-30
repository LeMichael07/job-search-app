import React from 'react';
import {withRouter} from 'react-router-dom';
import './JobsListItem.css';


class JobsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.clickHandler = this.clickHandler.bind(this); 

  }


  clickHandler() {
    this.props.history.push('/jobs/' + this.props.id);

  }

  render() {
    return (
      <div className="JobsListItem" onClick={this.clickHandler}>
        <div className="left">
          <b>{this.props.title}</b>
          <div>{this.props.company}</div>
        </div>
        <div className="right">
          <b>{this.props.type}</b>
          <div>{this.props.created_at}</div>
        </div>
      </div>
    )
  }

}

export default withRouter(JobsListItem);