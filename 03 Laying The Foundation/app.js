import React from "react";
import ReactDOM from "react-dom/client";

/* Creating React Element by React.createElement */

// const element = React.createElement(
//     "div",
//     {id : "parent"},
//     React.createElement(
//         "div",
//         {id : "child"},
//         React.createElement(
//             "h1",
//             {},
//             "I'm h1 tag"
//         )
//     )
// );

/* Creating React Element by JSX */

const element = (
    <div id="parent">
        <div child="child">
            <h1>
                I'm h1 Tag
            </h1>
        </div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);