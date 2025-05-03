import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../components/context/StoreContextProvider'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { food, cartItems,  addToCart, removeFromCart, getTotalcartAmount, URL } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-tittle">
          <p>Img</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food.map((items, index) => {
          if (cartItems[items._id] > 0) {
            return (
              <>
                <div key={index} className="cart-items-tittle cart-items-item">
                  <img src={URL + "images/" + items.image} />
                  <p>{items.name}</p>
                  <p>Tsh {(items.price).toLocaleString()}</p>
                  <p>{cartItems[items._id]}</p>
                  <p> Tsh {(items.price * cartItems[items._id]).toLocaleString()}</p>
                  <p onClick={() => addToCart(items._id)} className='cross'>+</p>
                  <p onClick={() => removeFromCart(items._id)} className='cross'>x</p>
                </div>
                <hr />
              </>
            )
          }
        })}

      </div>

      <div className="cart-bottom">

        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{(getTotalcartAmount().toLocaleString())}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{(getTotalcartAmount() === 0 ? 0 : 1500).toLocaleString()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{(getTotalcartAmount() === 0 ? 0 : getTotalcartAmount() + 1500).toLocaleString()}</b>
            </div>
          </div>
          <button onClick={() => navigate('/Order')}>PROCED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
