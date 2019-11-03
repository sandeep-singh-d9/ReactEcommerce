
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
class Navbar extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="header">
                    <nav className="navbar navbar-expand-md navbar-light px-sm-5">
                        <Link to="/" ><img src="logo192.png" className="navbar-brand"/></Link>
                        <ul className="navbar-nav align-item-center" style={{width:'77%'}}>
                            <li className="nav-item ml-5">
                                <Link to="/" className="nav-link">
                                    Products
                                </Link>
                            </li>
                        </ul>
                        <Link to="/cart" className="ml-auto">
                            <ButtonContainer>
                                <span className="mr-2"><i className="fas fa-cart-plus"/>
                                </span>
                                My Cart
                            </ButtonContainer>
                        </Link>
                        <button type="button" data-toggle="collapse" datatarget="#navbarCollapse" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

                        <div id="navbarCollapse" className="collapse navbar-collapse justify-content-between">
                            <div className="navbar-nav"></div>
                            <div className="navbar-nav">
                                <div className="nav-item dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle" aria-expanded="false"><i className="fas fa-user-circle"></i></a>
                                    <div className="dropdown-menu"><a href="#" className="dropdown-item">Login</a> <a href="#" className="dropdown-item">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Navbar;


