import React, { useContext } from 'react'
import './product.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContextProvider'

const ProductItems = ({ id, name, image, price, description }) => {

    const { cartItems, addToCart, removeFromCart, URL } = useContext(StoreContext);

    return (
        <div>
            <div className="food-item">
                <div className="food-item-img-container">
                    <img src={URL + "images/" + image} alt="Error" className="food-item-img" />
                </div>

                <div className="food-item-info">
                    <div className="food-item-rating">
                        <p>{name}</p>
                        {!cartItems[id] ? <img onClick={() => addToCart(id)} className='add' src={assets.addCart} alt="+" />
                            : <div className="item-counter">
                                <img onClick={() => removeFromCart(id)} src={assets.minusCart} alt="-" />
                                <p>{cartItems[id]}</p>
                                <img onClick={() => addToCart(id)} src={assets.addCart} alt="+" />
                            </div>
                        }

                    </div>
                    <p className="food-item-desc">{description}</p>
                    <p className="food-item-price">Tsh {(price).toLocaleString()}</p>
                </div>

            </div>

        </div>
    )
}

export default ProductItems
