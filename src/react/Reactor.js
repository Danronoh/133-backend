import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import TransportItems from './page/TransportItems';
import TransportDetails from './page/TransportDetails';
import TransportApi from './page/TransportApi';
import NotFound from './page/NotFound';
import Home from './page/Home';
import NavBar from './component/NavBar';
import './animate'
import './scss/main.scss';

class Reactor extends Component {

  homePage = () => {
    return <Redirect to="/"/>
  }

  render() {
    return (
      <div id="home" className="home">
        <header id="header" className="header">
          <div id="app_name" >
            <Link to='/'>AppName</Link>
          </div>
          <NavBar/>
        </header>
        <Switch>
          <Route path="/transport/:id" component={TransportDetails}/>
          <Route path="/transport-list/:filter?/:filtertwo?" component={TransportItems}/>
          <Route path="/transport-api" component={TransportApi}/>
          <Route path="/not-found" component={NotFound}/>
          <Route path="/" component={Home}/>
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default Reactor;
