import React from 'react'
import './ShopItem.css'

function ShopItem({product,addToCart}) {
    return (
        <div className="shop-item">
            <img src={product.img}/>
            <p>{product.name}</p>
            <div className="item-pricing">
                <span>${product.price}</span>
                <button onClick={()=>addToCart(product)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ShopItem
