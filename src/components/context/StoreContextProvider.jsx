import { createContext, useEffect, useState } from "react";
// import { food } from "../../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const URL = "http://localhost:5000/";

    const [cartItems, secartItems] = useState({});
    const [token, setToken] = useState("");
    const [food, setFood] = useState([]);

    const addToCart = async (id) => {
        if (!cartItems[id]) {
            secartItems((prev) => ({ ...prev, [id]: 1 }))
        } else {
            secartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }))
        }

        if(token){
            await axios.post(URL + "api/cart/addCart", {id}, {headers: {token}})
        }

    }

    const removeFromCart = async (id) => {
        secartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))

        if(token){
            await axios.post(URL + "api/cart/removeCart", {id}, {headers: {token}})
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

    // const getTotalCartQuantity = () => {
    //     return Object.values({cartItems}).reduce((totalQuantity, quantity) => {

    //         return totalQuantity + quantity;
            
    //     }, 0);
    // };

    const loadCartData = async (token) => {

        const response = await axios.get(URL + "api/cart/getCart", {}, {headers: {token}})

        secartItems(response.data.cartData)
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
                await loadCartData(localStorage.getItem("token"))
            } else {
                setToken("")
            }

        }

        loadData();

    }, []);


    const contextValue = {
        food,
        cartItems,
        secartItems,
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
