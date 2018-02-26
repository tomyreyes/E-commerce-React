import React, { Component } from 'react';

class Red extends Component {
    render() {
        const imageSize = {
            height: '400px'
        }
        let shoeInventory = this.props.reds.map((shoe, i)=>{
            return (
                <div key={i} className="col s4 center-align"> 
                <h5>{shoe.name}</h5>
                
                <img style={imageSize} src={shoe.picture}></img>
                    <h6>${shoe.price}</h6>
                <button onClick={()=>{this.props.addToCart(shoe)}}>Add To Cart</button>
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
