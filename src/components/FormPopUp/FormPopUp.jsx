import React, { useContext, useRef, useState } from 'react'
import './form.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContextProvider'
import { toast } from 'react-toastify'


const FormPopUp = ({ setShowLogin }) => {

    const formRef = useRef(null)
    const navigate = useNavigate()
    
    const { token, setToken, URL} = useContext(StoreContext);

    const [currentState, setcurrentState] = useState("Login");


    const [formValues, setformValues] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleInputs = (event) => {
           // setformValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
           const name = event.target.name;
           const value = event.target.value;
           setformValues(formValues => ({...formValues, [name]:value}))

    }

    const handlesubmit = async (event) => {
        event.preventDefault();

        let newURL = URL;

        if(currentState === "Login"){
            newURL += "api/user/login"
        }else{
            newURL += "api/user/register"
        }

        const response = await axios.post(newURL,formValues);

        if(response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token)
                setShowLogin(false);

                toast.success("You have loggedin successfully, You can continue exploring our menus");
                
        }else{
            toast.error(response.data.message);
           // alert(response.data.message);
        }
    }

    return (
        <div ref={formRef} className='login-popup'>
            <form onSubmit={handlesubmit} className="login-form-container" >
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <button onClick={() => setShowLogin(false)}> <img src={assets.close} alt="X" /> </button>
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type="text" name='name' onChange={handleInputs} placeholder='Your Username' required />}
                    <input type="email" name='email' onChange={handleInputs} placeholder='Your Email' required />
                    {currentState === "Login" ? <></> : <input type="tel" name='phone' onChange={handleInputs} placeholder='Your Phone Number' required />}
                    <input type="password" name='password' onChange={handleInputs} placeholder='Your Password' required />
                </div>
                <button type='submit'>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState === "Login"
                    ? <p className='p'>Create a new account? <span onClick={() => setcurrentState("Sign Up")}>Click here</span></p>
                    : <p className='p'>Already have an acoount? <span onClick={() => setcurrentState("Login")}>Login</span></p>}


            </form>
        </div>
    )
}

export default FormPopUp
