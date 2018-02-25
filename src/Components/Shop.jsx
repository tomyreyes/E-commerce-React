import React, { Component } from 'react';
import Hats from './Hats'
import Shoes from './Shoes'
import ShoppingCart from './ShoppingCart'
import { Switch, Link, Route, Router } from 'react-router-dom'
import axios from 'axios'

class Shop extends Component {
    constructor() {
        super()
        this.state = {
            cart: [],
            shoes: [
                {
                    name: 'High Top Sneaker',
                    price: 15,
                    picture: './../public/imgs/shoe1.png',
                    type: 'shoe'
                },
                {
                    name: 'Basketball Shoes',
                    price: 100,
                    picture: './../public/imgs/shoe2.png',
                    type: 'shoe'
                },
                {
                    name: 'Tennis Shoes',
                    price: 150,
                    picture: './../public/imgs/shoe3.png',
                    type: 'shoe'
                },
                {
                    name: 'Heels',
                    price: 60,
                    picture: './../public/imgs/shoe3.png',
                    type: 'shoe'

                },
                {
                    name: 'Hiking Shoes',
                    price: 90,
                    picture: './../public/imgs/shoe3.png',
                    type: 'shoe'
                },
                {
                    name: 'Boxing Shoes',
                    price: 80,
                    picture: './../public/imgs/shoe3.png',
                    type: 'shoe'

                }
            ],
            hats: [
                {
                    name: 'Cap',
                    price: 20,
                    picture: './../public/imgs/hat1.png',
                    type: 'hat'
                },
                {
                    name: 'Fedora',
                    price: 25,
                    picture: './../public/imgs/hat2.png',
                    type: 'hat'
                },
                {
                    name: 'Helmet',
                    price: 100,
                    picture: './../public/imgs/hat3.png',
                    type: 'hat'
                },
                {
                    name: 'Cowboy Hat',
                    price: 5,
                    picture: './../public/imgs/hat1.png',
                    type: 'hat'
                },
                {
                    name: 'Snapback',
                    price: 30,
                    picture: './../public/imgs/hat1.png',
                    type: 'hat'
                },
                {
                    name: 'Pirate Hat',
                    price: 100,
                    picture: './../public/imgs/hat1.png',
                    type: 'hat'
                }
            ]
        }
    }
    addToCart = (item)=>{
        this.setState(
            {
                cart: this.state.cart.concat(item)
            }
        )
    }

   
    componentDidUpdate() {
        axios.post('http://localhost:8080/cart', {
            cart: this.state.cart,
        })
            .then((response) => {
                console.log(response.data)
                if (response.data.success) {
                    console.log('Cart Saved.')
                }
            })
    }
    componentDidMount(){
        axios.get('http://localhost:8080/cart')
        .then((response)=>{
            this.setState({
                cart: response.data.cart
            })
    })
}


    render() {
        let {match} = this.props
        return (
            <div>
                <h1>Shop page </h1>
                <h4>{this.name}</h4>
                <p>derpderpder </p>
                <nav>
                    <Link to={match.url + "/shoes"}>Shoes</Link>|
                    <Link to={match.url + "/hats"}>Hats</Link>|
                    <Link to={match.url + "/cart"}>Shopping Cart</Link>
                </nav>
                <Switch>
                    <Route path={match.path + "/shoes"} render={(routeProps)=>{
                        return <Shoes shoes = {this.state.shoes} addToCart={this.addToCart}/>
                    }} />
                    <Route path={match.path + "/hats"} render={(routeProps)=>{
                        return <Hats hats={this.state.hats} addToCart={this.addToCart}/>
                    }} />
                    <Route path={match.path + "/cart"} render={(routeProps)=>{
                        return <ShoppingCart cart={this.state.cart}/>
                    }} />
                </Switch>
            </div>

        );
    }
}

export default Shop;
