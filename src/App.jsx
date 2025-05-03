import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Error from './pages/NoPage/Error';
import FormPopUp from './components/FormPopUp/FormPopUp';
import Footer from './components/Footer/Footer';
import Order from './pages/Order/Order';
import Profile from './pages/Profile/Profile';
import { ToastContainer } from 'react-toastify';
import Verify from './pages/Verify/verify';
import MyOrders from './pages/MyOrders/MyOrders';

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <ToastContainer />
      {showLogin ? <FormPopUp setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Verify' element={<Verify />} />
        <Route path='MyOrders' element={<MyOrders />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App