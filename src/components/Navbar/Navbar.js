import React, {createClass} from 'react';
import {Link} from 'react-router';
import './Navbar.css';

import logo from '../../assets/images/logos/logo.png';

const Navbar = createClass({
    render() {
        var classes = 'navbar';
        return (
            <div className={`${classes}`}>
                <Link to={`/about`} className='navbar-link'>About</Link>
                <Link to={`/services`} className='navbar-link'>Services</Link>
                <a href='https://www.shopify.com/' className='navbar-link'>Shop</a>
                <Link to={`/gardens`} className='navbar-link'>Gardens</Link>
                <Link to={`/`}>
                    <img src={`${logo}`} className='navbar-logo desktop-logo'/>
                </Link>
                <Link to={`/partners`} className='navbar-link'>Partners</Link>
                <Link to={`/gallery`} className='navbar-link'>Gallery</Link>
                <Link to={`/contact`} className='navbar-link'>Contact</Link>
                <Link to={`/fr/`} className='navbar-link'>Français</Link>
            </div>
        );
    }
});

export default Navbar;