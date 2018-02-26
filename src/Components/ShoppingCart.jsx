import React, { Component } from 'react';

class ShoppingCart extends Component {
    render(){
        let totalPrice = this.props.cart.reduce((sum, price)=>{
            return sum + price.price
        }, 0)
        let cartList = this.props.cart.map((item,i)=>{
            return ( <div key={i}>
            <h4>{item.name}</h4>
            <h6>{item.price}</h6>
            <p>{item.type}</p>
            <p>{i}</p>
            <button onClick={()=>{this.props.handleDelete(i)}}>Delete</button>
            </div>
            )
        })
        return (
            <div>
                {cartList}
                <h3>Total: {totalPrice}</h3>
                </div>
        )
    }
}

export default ShoppingCart;
