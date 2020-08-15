import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import ShopItems from "./ShopItems";
import productList from "./ShopData";
import Cart from "./Cart";
import "./App.css";

const LOCAL_STORAGE_KEY = 'shoppingCart.products';

function App() {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        setProducts(productList);
        const addToCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(!addToCart) return
        setCartProducts(addToCart)
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartProducts))
    },[cartProducts])

    function addToCart(product){
        const prevProducts = [...cartProducts]
        if(prevProducts.every(p => p.id!=product.id)) {
            product.quantity = 1;
            setCartProducts([...prevProducts, product])
        } else {
            const item = prevProducts.find(p => p.id === product.id)
            item.quantity++;
            setCartProducts(prevProducts)
        }
    }

    function decrementItem(id){
        let prevCartItems = [...cartProducts]
        const currentItem = prevCartItems.find(item => item.id === id)
        currentItem.quantity--;
        if(currentItem.quantity < 1){
            prevCartItems = prevCartItems.filter(item => item.id !== id)
            console.log(currentItem.quantity)
        }
        setCartProducts(prevCartItems)
        console.table(cartProducts)
    }

    function incrementItem(id){
        const prevCartItems = [...cartProducts]
        const currentItem = prevCartItems.find(item => item.id === id)
        currentItem.quantity++;        
        setCartProducts(prevCartItems)
    }

    return (
        <Router>
            <Navbar cartItemNr={cartProducts.reduce((total, prod)=>{return total+prod.quantity},0) } />
            <Switch>
                <Route exact path="/cart">
                    <Cart 
                        cartProducts={cartProducts} 
                        decrementItem={decrementItem} 
                        incrementItem={incrementItem} 
                    />
                </Route>
                <Route path="/">
                    <ShopItems products={products} addToCart={addToCart} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
