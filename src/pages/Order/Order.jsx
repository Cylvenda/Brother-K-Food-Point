import React, { useContext } from 'react'
import './order.css'
import { StoreContext } from '../../components/context/StoreContextProvider'

const Order = () => {

      const { food, cartItems, secartItems, addToCart, removeFromCart, getTotalcartAmount} = useContext(StoreContext)
    

    return (
        <div className='place-order'>
            <div className="place-order-left">
                <p className='tittle'>Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
             
                <input type="email" placeholder='Email Address' />
                <input type="text" placeholder='Street' />

                <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>

                <div className="multi-fields">
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='Phone' />
            </div>


            <div className="place-order-right">

                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>{(getTotalcartAmount()).toLocaleString()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{(getTotalcartAmount()===0?0:1500).toLocaleString()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>{(getTotalcartAmount()===0?0:getTotalcartAmount() + 1500).toLocaleString()}</b>
                        </div>
                    </div>
                    <button >PROCED TO PAYMENT</button>
                </div>
            </div>
        </div>
    )
}

export default Order
