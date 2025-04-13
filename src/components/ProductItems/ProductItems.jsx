import React, { useContext, useState } from 'react'
import './product.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContextProvider'

const ProductItems = ({ id, name, image, price, description, category }) => {

    const [itemCount, setitemCount] = useState(0)
    const { food, cartItems, secartItems, addToCart, removeFromCart, URL } = useContext(StoreContext);

    return (
        <div>
                <div className="food-item">
                    <div className="food-item-img-container">
                        <img src={URL + "images/" + image} alt="Error" className="food-item-img" />
                    </div>

                    <div className="food-item-info">
                        <div className="food-item-rating">
                            <p>{name}</p>
                        </div>
                        {/* <p className="food-item-desc">{description}</p> */}
                        <p className="food-item-price">Tsh {(price).toLocaleString()}</p>
                    </div>

                </div>
            
        </div>
    )
}

export default ProductItems
