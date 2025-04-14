import { createContext, useEffect, useState } from "react";
// import { food } from "../../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const URL = "http://localhost:5000/";

    const [cartItems, setcartItems] = useState({});
    const [token, setToken] = useState("");
    const [food, setFood] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setcartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

        if(token){
            await axios.post(URL + "api/cart/addCart", {itemId}, {headers: {token}})
        }

    }


    const removeFromCart = async (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

        if(token){
            await axios.post(URL + "api/cart/removeCart", {itemId}, {headers: {token}})
        }
    }


    const getTotalcartAmount = () => {
        return Object.keys(cartItems).reduce((totalAmount, items) => {
            const itemId = items;
            if (cartItems[items] > 0) {
                const itemInfo = food.find((product) => product._id === itemId);
                if (!itemInfo) {
                    console.error(`Item with ID ${itemId} not found in food data.`);
                    return totalAmount; // Skip this item if not found
                }
                return totalAmount + itemInfo.price * cartItems[items];
            }
            return totalAmount;
        }, 0);
    };

    const loadCartData = async (token) => {

        const response = await axios.get(URL + "api/cart/getCart/", {}, {headers: {token}})

        setcartItems(response.data.cartData);
    }


    const fetchFoodList = async () => {
        const response = await axios.get(URL + "api/food/foodList")
        setFood(response.data.data)
    }

    useEffect(() => {

        async function loadData() {
            await fetchFoodList()

            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"));
                console.log(cartItems)
            }

        }

        loadData();

    }, []);


    const contextValue = {
        food,
        cartItems,
        setcartItems,
        addToCart,
        removeFromCart,
        getTotalcartAmount,
       /* getTotalCartQuantity,*/
        token,
        setToken,
        URL
    }

    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
