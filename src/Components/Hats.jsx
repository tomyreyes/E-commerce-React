import React, { Component } from 'react';

class Hats extends Component {
    render() {
        let hatList = this.props.hats.map((hat, i)=>{
            return (<div key={i}>
                <h1>{hat.name}</h1>
                <h5>{hat.price}</h5>
                <button onClick={()=>{this.props.addToCart(hat)}}>Add to Cart </button>
                </div>
                )
        })
        return (
            <div>
                <h1>Hats page </h1>
                {hatList}
            </div>
        );
    }
}

export default Hats;
