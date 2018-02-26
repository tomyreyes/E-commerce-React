import React, { Component } from 'react';

class White extends Component {
    render() {
        const imageSize = {
            height: '400px'
        }
        let whiteList = this.props.whites.map((white, i)=>{
            return (<div key={i} className="col s4 center-align">
                <h5>{white.name}</h5>
                <img style={imageSize} src={white.picture}></img>
                <h6>{white.price}</h6>
                <button onClick={()=>{this.props.addToCart(white)}}>Add to Cart </button>
                </div>
                )
        })
        return (
            <div className="container">
                <h1 className="center-align">Whites</h1>
                <div className="row">
                    {whiteList}
                </div>
            </div>
        );
    }
}

export default White;
