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

// const element = (
//     <div id="parent">
//         <div child="child">
//             <h1>
//                 I'm h1 Tag
//             </h1>
//         </div>
//     </div>
// );

/* React Component */

// const Element = () => {
//     return <h1> Namestey React ! </h1>;
// };

// We Can Create React Component using normal js fuction

// const Element = function() {
//     return <h1> Namestey React!! </h1>
// }

// Also we can create React Component using arrow fuctions without return statements :

// const Element = () => (
//     <h1> React Component without return statement. But it is returning the statement</h1>
// );

/* React Component Composition */

// const Component1 = () => (
//     <h1>I'm Component 1</h1>
// );

// const Component2 = () => (
//     <>
//         <Component1/>
//         <h2>I'm Component 2</h2>
//     </>
// );

/* Javascript inside jsx */

// const element1 = <h1>This is React Element1</h1>
// const element2 = (
//     <>
//         {element1}
//         <h2>This is React Element2</h2>
//     </>       
// );
// const Component = () => (
//     <div>
//         {element2}
//         <h3>This is React Component</h3>
//     </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component/>); 