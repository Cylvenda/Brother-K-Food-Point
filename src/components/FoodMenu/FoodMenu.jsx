import React from 'react'
import './food.css'
import { menu_list } from '../../assets/assets'

const FoodMenu = ({category, setCategory}) => {
  return (
    <div className='food-menu' id='food-menu'>
      <h1>Explore Our Menu</h1>
      <p className='menu-text'>Choose any food you want and we will make sure that you have it in a time </p>

      <div className="menu-list">
        {menu_list.map((item,index) => {
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='menu-list-items'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default FoodMenu
