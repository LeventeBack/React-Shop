import React from 'react'
import './CartItem.css'

function CartItem({product, decrementItem, incrementItem}) {
    return (
        <div className="item-box">
            <div className='product-info'>
                <img src={product.img} />
                <span>{product.name}</span>
            </div>
            <div className="product-quantity">
                <button onClick={()=>decrementItem(product.id)}>-</button>
                {product.quantity}
                <button onClick={()=>incrementItem(product.id)}>+</button>
            </div>
            <div className="product-single">
                {product.price} $
            </div>
            <div className="product-all">
                {(product.price*product.quantity).toFixed(2)} $
            </div>
        </div>
    )
}

export default CartItem
