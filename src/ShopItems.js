import React from 'react'
import ShopItem from './ShopItem'
import './ShopItems.css'

function ShopItems( { products, addToCart } ) {
    return (
        <div className="shop-container">
            {products.map(product => {
                return <ShopItem product={product} key={product.id} addToCart={addToCart}/>
            })}
        </div>
    )
}

export default ShopItems
