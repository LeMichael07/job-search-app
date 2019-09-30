import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './Jobs.css';
import JobsListItem from './JobsListItem';
import Job from './Job';



class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { jobs: [] };
  }

  componentDidMount() {
    axios.get('/api/jobs').then(({data})=> {
      this.setState({jobs:data});
    })
  }

  render() {
    var jobsJSX = this.state.jobs.map((job, index)=> {
      return <JobsListItem key={index} {...job}/>
    });

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Jobs in Atlanta</h1>
            <p className="App-subtitle">Click to explore jobs</p>
          </header>
        </div>
        <div className="Jobs">
          <Switch>
            <Route exact path="/jobs" render={ () => jobsJSX}/>
            <Route path="/jobs/:id" component={Job}/>
          </Switch>
        </div>
      </div>
    )
  }

}


export default Jobs;