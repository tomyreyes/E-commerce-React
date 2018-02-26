import React, { Component } from 'react';
import { Switch, Link, Route, Router } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'

class Nav extends Component {
    render() {
        let {match} = this.props
        return (
            <div className="navbar-fixed">
                <ul id="dropdown1" className="dropdown-content">
                    <li><Link to="/shop/shoes">Shoes</Link></li>
                    <li><Link to="/shop/hats">Hat</Link></li>
                </ul>
                <nav>
                    <div className="nav-wrapper #212121 grey darken-4">
                    <a href="#" className="brand-logo">Wining</a>
                    <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                            <li><Link className="dropdown-button" data-activates="dropdown1" to="/Shop">Shop<i className="material-icons right">arrow_drop_down</i></Link></li>
                    <li><Link to="/shop/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                    </div>
                </nav>
            </div>

        );
    }
}
export default Nav;

