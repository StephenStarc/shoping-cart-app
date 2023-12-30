import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
export const  Product = (props) =>  {
    const {id, productName, price, productImage} = props.data
    const {addToCart , cartItems} = useContext(ShopContext)
    
    const cartItemAmount = cartItems[id] * price
    return (
        <>
        <div className="product">
            <img src={productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p> ${price} </p>
            </div>
            <button className="addToCartBttn" onClick={() => {addToCart(id)}}>Add to Cart
            {cartItemAmount > 0 && <>({cartItems[id]})</>}
            </button>
        </div>
        </>
    )
}

export default Product