import logo from '../../assets/images/logo.png';
import {useState} from "react";
const Header = () => {
    const [login,setLogin] = useState("Login");
    return (
        <div className="header">

            <div className="logo">
                <img src={logo}/>
            </div>

            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="btn_login_logout" onClick={
                        () => {
                            if(login === "Login") setLogin("Logout");
                            else setLogin("Login");
                        }
                    }>{login}</button>
                </ul>
            </div>

        </div>
    );
    
};

export default Header;