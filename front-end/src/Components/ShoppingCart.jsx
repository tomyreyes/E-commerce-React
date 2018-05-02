import React, { Component } from 'react';

class ShoppingCart extends Component {
    render(){
        const imageSize = {
            height: '400px'
        }
        let totalPrice = this.props.cart.reduce((sum, price)=>{
            return sum + price.price
        }, 0)
        
        let cartList = this.props.cart.map((item,i)=>{
            return (<div key={i} className="col s6 center-align">
            <h4>{item.name}</h4>
            <img style={imageSize} src={item.picture}></img>
            <h6>{item.price}</h6>
            <p>{item.type}</p>
            <button onClick={()=>{this.props.handleDelete(i)}}>Delete</button>
            </div>
            )
        })
        return (
            <div className="container">
            <h1 className="center-align">Cart</h1>
            <div className="row">
                    <h5 className="center-align">Cart Total: {totalPrice}</h5>
                {cartList}
                
                </div>
                </div>
        )
    }
}

export default ShoppingCart;
