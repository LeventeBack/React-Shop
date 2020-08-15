import React from 'react'
import './CartHeader.css'

function CartHeader() {
    return (
        <div className="cart-header"> 
            <div className="header-info">PRODUCT</div>
            <div className="header-quantity">QUANTITY</div>
            <div className="header-single">SINGLE PRICE</div>
            <div className="header-all">TOTAL PRICE</div>
        </div>
    )
}

export default CartHeader
