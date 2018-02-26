import React, { Component } from 'react';

class Red extends Component {
    render() {
        const imageSize = {
            height: '400px'
        }
        let shoeInventory = this.props.reds.map((red, i)=>{
            return (
                <div key={i} className="col s4 center-align"> 
                <h5>{red.name}</h5>
                
                <img style={imageSize} src={red.picture}></img>
                    <h6>${red.price}</h6>
                <button onClick={()=>{this.props.addToCart(red)}}>Add To Cart</button>
                </div>)
        })
        return (
            <div className="container">
                <h1 className="center-align">Red</h1>
                <div className="row">
                {shoeInventory}
                </div>
            </div>
        );
    }
}

export default Red;
