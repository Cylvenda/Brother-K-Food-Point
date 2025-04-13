import React, { useState } from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar';
import Head from '../../components/Head/Head';
import FoodMenu from '../../components/FoodMenu/FoodMenu';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  
  const [category, setCategory] = useState("All");

  return (
    <>
       <Head />
       <FoodMenu category={category} setCategory={setCategory}/>
       <Product category={category}/>
    </>
  )
}

export default Home
