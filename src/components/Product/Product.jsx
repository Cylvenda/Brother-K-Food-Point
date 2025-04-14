import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContextProvider'
import ProductItems from '../ProductItems/ProductItems'
import './productcss.css'

const Product = ({ category }) => {

  const { food, cartItems } = useContext(StoreContext)

  return (
    <div className='food-display'>
      <h3>Top Dishes Available For You</h3>
      <div className="food-display-list" id='food-display-list'>
        {food.map((items, index) => {

          if (category === "All" || category === items.category) {
            return <ProductItems key={index} id={items._id} name={items.name} image={items.image}
              price={items.price} description={items.description} category={items.category} />
          }
        })}
      </div>
    </div>
  )
}
export default Product
