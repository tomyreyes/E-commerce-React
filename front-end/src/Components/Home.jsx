import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Home extends Component {
    render() {
        let { match } = this.props
        let user = this.props.name
    const background = {
        background: 'url(../images/wine.jpg) no-repeat center',
    }
    const h1 = {
        margin: '0',
        height: '900px',
        paddingTop: '450px',
        color: 'white',
        fontFamily: 'sans-serif'

    }     

    const imgSize = {
        height: '500px'
    }

        return (
            <div className="center-align">
            <div><img src='../images/wine.jpg'/>/div>
                <div class="row">
                    <div class="col s12 m12">
                    <div class="col s6 m6">
                        <div class="card">
                                <div class="card-image" >
                                    <img style={imgSize} src="../images/redwine.jpg"/>
            </div>
                                <div class="card-content">
                                    <p>Explore our impeccable variety of lush, silky and complex reds.</p>
                                </div>
                                <div class="card-action">
                                    <Link to="/shop/red">Red Wine</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col s6 m6">
                            <div class="card">
                                <div class="card-image" >
                                    <img style={imgSize} src="../images/whitewine.jpg" />
                                </div>
                                <div class="card-content">
                                    <p>Take a gander of our crisp and refreshing white wines.</p>
                                </div>
                                <div class="card-action">
                                    <Link to="/shop/white">White Wine</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
            </div>
            </div>

        );
    }
}


export default Home;

