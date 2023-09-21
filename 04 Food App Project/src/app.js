import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

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


const AppLayout = () => (
    <div className="app">
        <Header/>
        <Body/>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);