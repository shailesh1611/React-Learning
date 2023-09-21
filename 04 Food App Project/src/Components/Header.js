import logo from '../../assets/images/logo.png';
const Header = () => (
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
            </ul>
        </div>

    </div>
);

export default Header;