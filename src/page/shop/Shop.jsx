import Product from './product'
import { PRODUCTS } from "../../products" 
import './shop.css'
export const Shop = () =>  {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Amazon</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => {
                    return(<Product data={product}></Product>)
                })}
            </div>
        </div>
    )
}