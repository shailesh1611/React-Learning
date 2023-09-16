import React from "react";
import ReactDOM from "react-dom/client";
import logo from './logo.png';
import rating from './rating-48.png';

/* Components in our Application */
// Header
//     - Logo
//     - Tabs or Nav Items like (home, about, cart)
// Body
//     - Search Bar
//     - Restaurent Container
//          - Restaurent Cards
// Footer
//     - Copyright or Disclaimer
//     - Links


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

const ResCard = () => (
    <div className="res-Card">
        <div className="resCard-Img">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"></img>
        </div>
        <div className="resCard-Content">
            <div className="res-Name">Burger King</div>
            <div className="star-rating">
                <img src={rating}></img>
                4.3
            </div>
            <div className="cuisine">Burgers, American</div>
            <div className="address">Sector - 10</div>
        </div>
    </div>
);

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">Search Bar</div>
            <div className="res-Container">
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
            </div>
        </div>
    );
};

const AppLayout = () => (
    <div className="app">
        <Header/>
        <Body/>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);