import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

function Navbar({cartItemNr}) {
    return (
        <nav>
            <NavLink exact to='/' activeClassName="active">
                <HomeRoundedIcon fontSize={'large'} />
            </NavLink>
            <div className="cart-icon">
                <NavLink to='/cart' activeClassName="active">
                    <ShoppingCartRoundedIcon fontSize={'large'} />
                </NavLink>
                {cartItemNr>0 && <div className="cart-item-count">{cartItemNr}</div>}
            </div>
        </nav>
    )
}

export default Navbar
