import React, { useContext, useEffect, useRef, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets.jsx";
import { StoreContext } from "../context/StoreContextProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar({ setShowLogin }) {
    const [menu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const navigate = useNavigate();

    const { cartItems, token, setToken } = useContext(StoreContext);

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('token')
        setToken("");
        navigate("/");
        toast.info("You Loggedout successfully,Your Warmely Welcome Again")
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="brand">
                <Link to="/">Brother K Food Point</Link>
            </div>

            <div className="link">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </div>

            <div className="btn">
                <button className="btn-profile">
                    <Link to="/Cart">
                        <img src={assets.cart} alt="cart" />
                       {!cartItems ? "": <span className="cart-number">.</span> }
                    </Link>
                </button>

                {!token ? (
                    <button className="btn-form" onClick={() => setShowLogin(true)}>
                        Get Into Touch
                    </button>) : (
                    <div ref={menuRef}>
                        <button className="btn-profile" onClick={() => setShowMenu((prev) => !prev)}>
                            <img src={assets.user} alt="User Profile" />
                        </button>

                        {menu && (
                            <div className="drop-down-menu">
                                <ul>
                                    <li>
                                        <Link to='/Profile'>
                                            <img src={assets.user} alt="Profile Icon" />
                                            <span className="drop-content">Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/About">
                                            <img src={assets.order} alt="Orders Icon" />
                                            <span className="drop-content">Orders</span>
                                        </Link>
                                    </li>
                                    <li>

                                        <button onClick={handleLogout}>
                                            <img src={assets.logout} alt="Logout Icon" />
                                            <span className="drop-content">Logout</span>

                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                )

                }
            </div>
        </header>
    );
}

export default Navbar;
