import React, { Component } from 'react';
import axios from 'axios';


class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    var jobId = this.props.match.params.id;

    axios.get('/api/jobs/' + jobId).then(({data})=> {
      this.setState(data);
    })
  }

  render() {
    return (
      <div className="Job">
        <h1>{this.state.title}</h1>
        <a href="{this.state.company_url}"><img src={this.state.company_logo} alt="" width="100"/></a>
        <div dangerouslySetInnerHTML={{__html: this.state.how_to_apply}}></div>
        <span dangerouslySetInnerHTML={{__html: this.state.description}}></span>
      </div>
    );
  }

}


export default Job;