import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route, Router } from 'react-router-dom'
import { Home, Shop } from './Components'

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

handleName = (name) =>{
  localStorage.setItem('username', name)
  this.setState({name: name})
}

componentDidMount(){
  this.setState({name:localStorage.username})
}
  render() {
  
    let { match } = this.props
 
    return (
      <div>
        <h1>App Component </h1>
        <nav>
          <Link to="/">Home</Link>|
          <Link to="/shop">Shop</Link>
        </nav>
        <Switch>
          <Route path={match.path + "/"} render={(routeProps)=>{
            return <Home name={this.state.name} submitName={this.submitName} handleName={this.handleName}/>
          }} />
          <Route path={match.path + "shop"} component={Shop} />
        </Switch >
      </div>
    );
  }
}
export default App;

