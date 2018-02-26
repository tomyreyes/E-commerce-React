import React, { Component } from 'react';
import { Switch, Link, Route, Router } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'

class Footer extends Component {
    render() {
        let { match } = this.props
        return (
            <footer class="page-footer #212121 grey darken-4">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Wining</h5>
                            <p class="grey-text text-lighten-4">Premier wines from around the globe.</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                                <li><Link className="grey-text text-lighten-3" to="/shop/red">Red</Link></li>
                                <li><Link className="grey-text text-lighten-3" to="/shop/white">White</Link></li>
                                <li><Link className="grey-text text-lighten-3" to="/shop/cart">Cart</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2018 Wining
                    </div>
                </div>
            </footer>

        );
    }
}
export default Footer;
