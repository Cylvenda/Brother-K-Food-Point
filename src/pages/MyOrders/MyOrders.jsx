import React, { useContext, useEffect, useState } from 'react'
import './myorders.css'
import { StoreContext } from '../../components/context/StoreContextProvider';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

  const { URL, token} = useContext(StoreContext)
  const [data, setData] = useState([]);

  const fetchOrders = async () =>{
    const response = await axios.post(URL+"api/order/userOrders",{},{headers:{token}})
    setData(response.data.data)
  }

  useEffect(() => {
    if(token){
      fetchOrders();
    }
  }, [token])

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order,index)=>{
            return(
              <div key={index} className="my-orders-order">
                  <img src={assets.order} alt="" />
                  <p>{order.items.map((item, index) =>{
                    if(index === order.items.length-1){
                      return item.name+ ' x ' +item.quantity
                    }else{
                      return item.name+ ' x ' +item.quantity+ ", "
                    }
                  })}</p>
                  <p>{order.amount.toLocaleString()}</p>
                  <p>Items: {order.items.length}</p>
                  <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                  <button>Track Order</button>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default MyOrders
