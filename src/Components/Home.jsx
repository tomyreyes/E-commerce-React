import React, { Component } from 'react';

class Home extends Component {
    constructor(){
        super()
        this.state={name: ''}
    }
    updateName = (e) => {
        this.setState({ name: e.target.value })
    }
    render() {
        let { match } = this.props
        return (
            <div>
                <h1>Home page </h1>
                Name: <input value={this.state.name} onChange={this.updateName}
                onKeyDown={(e)=>{if(e.keyCode ===13)this.props.handleName(this.state.name)}} placeholder="Enter your name..."/>
            </div>
        );
    }
}

export default Home;
