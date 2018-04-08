import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route, Router } from 'react-router-dom'
import { Home, Shop, Nav, Footer} from './Components'


class App extends Component {
  render() {
    let { match } = this.props
 
    return (
      <div>
        <Nav/>
        <Switch>
          <Route path={match.path + "/"} render={(routeProps)=>{
            return <Home/>
          }} />
          <Route path={match.path + "shop"} component={Shop} />
        </Switch >
        <Footer/>
        </div>
  
    );
  }
}
export default App;

