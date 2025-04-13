import { assets } from '../../assets/assets'
import './footer.css'



const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">

                    <div className="web-links">
                        <ul>
                            <h3>CONSIDER</h3>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Legal</a></li>
                        </ul>
                    </div>

                    <div className="web-links">
                        <h3>COMPANY</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Store Policy</a></li>
                        </ul>
                    </div>

                    <div className="address">
                        <h3>CONTACT US:</h3>

                        <ul>
                            <li>Address: Dodoma-Tanzania</li>
                            <li>Dodoma city-center</li>
                            <li>Phone: <a href="tel:+255780598902">+255780598902</a></li>
                            <li>Email: <a href="mailto:brayanmlawa0917@gmail.com">b.K.Food@gmail.com</a></li>
                        </ul>
                    </div>


                    <div className="social-media">
                        <h3>CONNECT WITH US ON:</h3>
                        <a href="#"><img src={assets.sWhup} alt="social media" /></a>
                        <a href="#"><img src={assets.sIg} alt="social media" /></a>
                        <a href="#"><img src={assets.sX} alt="social media" /></a>
                        <a href="#"><img src={assets.sYb} alt="social media" /></a>
                        <a href="#"><img src={assets.sFb} alt="social media" /></a>

                    </div>
                </div>
                <hr />
                <div className="ends">
                    <p>Developed by <a href="#">Cylvenda</a></p>
                    <p>&copy;{new Date().getFullYear()} <a href="/">Brother K Food Point</a> All right received</p>
                </div>

            </footer>
        </>
    )
}
export default Footer