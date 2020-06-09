import React, { Component } from 'react';
import ForumForm from "../AppForms/ForumForm";


// loading forum form on the homepage for now
class Home extends Component {
  render() {
    return (
      <div id="content" className="content">
        <div className="home">
            <div>
                <h1> TEAM #133...............</h1>
                <h1> Home of all farmers and all the eco around that ...</h1>
                <h2> Go on... and look around...</h2>
            </div>
            <div>
                <ForumForm
                />
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
