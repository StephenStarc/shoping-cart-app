import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
export const CartItem = (props) =>  {
    const {id, productName, price, productImage} = props.data
    const {addToCart, cartItems, removeToCart, updateCartCount } = useContext(ShopContext)
    
    const itemValue = (e,id) => {
           console.log(e);
           console.log(id);
    }
    
    return (
        <div className="cartItem">
            <img src={productImage}></img>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => {removeToCart(id)}}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartCount(Number(e.target.value), id) }></input>
                    <button onClick={() => {addToCart(id)}}>+</button>
                </div>
            </div>
        </div>
    )
}