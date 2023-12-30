import {createContext, useState} from 'react'
import { PRODUCTS } from '../products';
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for (let i in PRODUCTS){
        
        let a = Number(i)
        let b =  a + 1
        cart[b] = 0;
    }
    
    return cart
}
export const ShopContextProvider= (props) => {
    const [cartItems, SetCartitems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
         let totalAmount = 0;
         for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id == Number(item))
                totalAmount += cartItems[item] * itemInfo.price
                console.log(itemInfo);
                console.log(totalAmount);
            }
         }
         return totalAmount
    }

    const addToCart = (itemId) =>{
        SetCartitems((prev) => ({...prev,[itemId]: prev[itemId] + 1}))
        
     }

     const removeToCart = (itemId) =>{
        SetCartitems((prev) => ({...prev,[itemId]: prev[itemId] - 1}))
    }

    const updateCartCount = (newAmount, itemId) => {
        SetCartitems((prev) => ({...prev, [itemId]:newAmount}))
    }
    getTotalCartAmount()
     const contextValue = {cartItems,addToCart,removeToCart,updateCartCount ,getTotalCartAmount }
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

     
}