import React from 'react'
import CartItem from './CartItem'
import CartHeader from './CartHeader'
import './Cart.css'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

function Cart( {cartProducts, decrementItem, incrementItem} ) {
    const total = cartProducts.reduce((total, p) => (total+ p.quantity * p.price),0).toFixed(2)
    return (
        <div className="cart">
            
            <h1>
                <ShoppingCartRoundedIcon fontSize={'large'} />
                &nbsp;&nbsp; Cart &nbsp;&nbsp;
                <ShoppingCartRoundedIcon fontSize={'large'} />
            </h1>
            <div className="cart-list">
                {total > 0 && <CartHeader /> }
                {cartProducts.map(product => (
                    <CartItem 
                        product={product} 
                        decrementItem={decrementItem}
                        incrementItem={incrementItem}   
                        key={product.id} 
                    />
                ))}
            </div>
            {total > 0  && <div className="total">TOTAL: &nbsp;{total + ' $'}</div>}
            {total == 0 && <div className="empty">Your cart is empty.</div>}
        </div>
    )
}

export default Cart
