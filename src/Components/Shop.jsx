import React, { Component } from 'react';
import White from './White'
import Red from './Red'
import ShoppingCart from './ShoppingCart'
import { Switch, Link, Route, Router } from 'react-router-dom'
import axios from 'axios'

class Shop extends Component {
    constructor() {
        super()
        this.state = {
            cart: [],
            reds: [
                {
                    name: 'Chateau Palmer Margaux 2016',
                    price: 4000,
                    picture: '../images/chateau_palmer_1.jpg',
                    type: 'Bordeaux'
                },
                {
                    name: 'Chambolle-Musigny 2006',
                    price: 240,
                    picture: '../images/burgundy.jpg',
                    type: 'Burgundy'
                },
                {
                    name: 'Cote de Brouilly 2014',
                    price: 30,
                    picture: '../images/beaujolais.jpg',
                    type: 'Beaujolais'
                }
            ],
            whites: [
                {
                    name: 'Chablis 2010',
                    price: 50,
                    picture: '../images/Chablis.jpg',
                    type: 'Chablis'
                },
                {
                    name: 'Meursault 2014',
                    price: 89,
                    picture: '../images/meursault.jpg',
                    type: 'Burgundy'
                },
                {
                    name: 'Puligny-Montrachet 2015',
                    price: 139,
                    picture: '../images/puligny.jpg',
                    type: 'Burgundy'
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
    handleDelete = (i) => {
        let remove = this.state.cart.filter((remove, index) => (index !== i) ? remove : '')
        this.setState({
            cart: remove
        })
    }
       

    render() {
        let {match} = this.props
        
        return (
            <div>
                {/* <nav>
                    <Link to={match.url + "/shoes"}>Shoes</Link>|
                    <Link to={match.url + "/hats"}>Hats</Link>|
                    {/* <Link to={match.url + "/cart"}>Shopping Cart</Link> */}
                {/* </nav> */} 
                <Switch>
                    <Route path={match.path + "/red"} render={(routeProps)=>{
                        return <Red reds = {this.state.reds} addToCart={this.addToCart}/>
                    }} />
                    <Route path={match.path + "/white"} render={(routeProps)=>{
                        return <White whites={this.state.whites} addToCart={this.addToCart}/>
                    }} />
                    <Route path={match.path + "/cart"} render={(routeProps)=>{
                        return <ShoppingCart cart={this.state.cart} handleDelete={this.handleDelete} />
                    }} />
                </Switch>
            </div>

        );
    }
}

export default Shop;
