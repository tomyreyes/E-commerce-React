import React, { Component } from 'react';

class Shoes extends Component {
    render() {
        let shoeInventory = this.props.shoes.map((shoe, i)=>{
            return (<div key={i}> 
                <h1>{shoe.name}</h1>
                <h5>{shoe.price}</h5>
                <button onClick={()=>{this.props.addToCart(shoe)}}>Add To Cart</button>
                </div>)
        })
        return (
            <div>
                <h1>Shoes page </h1>
                {shoeInventory}
            </div>
        );
    }
}

export default Shoes;
