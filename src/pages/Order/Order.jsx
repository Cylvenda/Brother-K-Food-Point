import React, { useContext, useState } from 'react'
import './order.css'
import { StoreContext } from '../../components/context/StoreContextProvider'
import axios from 'axios'

const Order = () => {

      const { getTotalcartAmount, token, food, cartItems, URL} = useContext(StoreContext)

      const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
      })
      const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData(data=>({...data, [name]:value}))
      }

      const placeOrder = async (event) => {
        
        event.preventDefault();

        let orderItems = [];
        food.map((items) =>{
            if(cartItems[items._id] > 0){
                let itemInfo = items;
                itemInfo["quantity"] = cartItems[items._id];
                orderItems.push(itemInfo)
            }
        })
        let orderData = {
            address:data,
            items:orderItems,
            amount:getTotalcartAmount()+1000,

        }

        let response = await axios.post(URL+"api/order/place", orderData, {headers: {token}});
        if(response.data.success){
            const {session_url} = response.data;
            window.location.replace(session_url);
        }
        else{
            alert("Error"); 
        }
      }
    

    return (
        <form onSubmit={placeOrder}>
        <div className='place-order'>
            <div className="place-order-left">
                
                <p className='tittle'>Delivery Information</p>
                <div className="multi-fields">
                    <input required onChange={onChangeHandler} value={data.firstName} name='firstName' type="text" placeholder='First Name' />
                    <input required onChange={onChangeHandler} value={data.lastName} name='lastName' type="text" placeholder='Last Name' />
                </div>
             
                <input required name='email' onChange={onChangeHandler}  value={data.email} type="email" placeholder='Email Address' />
                <input required name='street' onChange={onChangeHandler}  value={data.street} type="text" placeholder='Street' />

                <div className="multi-fields">
                    <input required name='city' type="text" placeholder='City' />
                    <input required value={data.state} onChange={onChangeHandler} name='state' type="text" placeholder='State' />
                </div>

                <div className="multi-fields">
                    <input value={data.zipcode} onChange={onChangeHandler} type="number" name="zipcode" placeholder='Zipcode' />
                    <input required value={data.country} onChange={onChangeHandler} name='country' type="text" placeholder='Country' />
                </div>
               
                <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
               
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
                    <button type='submit' >PROCED TO PAYMENT</button>

                   
                </div>
            </div>
        </div>
        </form>
    )
}

export default Order
