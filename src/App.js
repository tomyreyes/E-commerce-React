import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route, Router } from 'react-router-dom'
import { Home, Shop, Nav, Footer} from './Components'


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
        <Nav/>
        <Switch>
          <Route path={match.path + "/"} render={(routeProps)=>{
            return <Home name={this.state.name} submitName={this.submitName} handleName={this.handleName}/>
          }} />
          <Route path={match.path + "shop"} component={Shop} />
        </Switch >
        <Footer/>
        </div>
  
    );
  }
}
export default App;

