import React, { useContext, useEffect } from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../components/context/StoreContextProvider';
import axios from 'axios';

const verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const navigate = useNavigate()

    const { URL } = useContext(StoreContext)

    const verifyPayments = async () => {
        const response = await axios.post(URL+'api/order/verify', {success, orderId})
        if(response.data.success){
            navigate("/MyOrders")
        }else{
            navigate("/")
        }
    }

    useEffect(() => {
            verifyPayments();
    }, []);
    
  return (
    <div className='verify'>
        <div className="spinner">

        </div>
      
    </div>
  )
}

export default verify
