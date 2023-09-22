# Building a Food Delivery App
- Basically We are trying to make a food delivery app like swiggy.
- Some Important Documentation List : 
    - JSX : https://react.dev/learn/writing-markup-with-jsx
    - JavaScript in JSX : https://react.dev/learn/javascript-in-jsx-with-curly-braces
    - Passing Props in Component : https://react.dev/learn/passing-props-to-a-component
    - Rendering Lists : https://react.dev/learn/rendering-lists (It contains concept of passing keys)

# Cleaning our Food Delivery App
- Best Practice in industry is to `make separate files for separate components` that we used in our project.
- Generally, all the `components and javascript files` are in `src` folder.
- All the `images, styles, fonts and icons` are put in `assets` folder.
- Since, we are now using different components and files. Hence, we have to use `export/import` of the files for this.

- # What is Export/Import ? 
    - The export declaration is used to export values from a `JavaScript module`. Exported values can then be imported into other programs with the `import` declaration or dynamic import.

- # Types of Export/Import :- 
    - `Default Export` : In `default` export the whole module or file is exported. We can use `default export` only `one` time in that file. To use this use syntax :
        ```
        export default <name of file>;
        ```

        To  `import` the `default` export we have to use syntax : 
        ```
        import <name of file> from "path";
        ``` 

    - `Named Export` : In `Named Export` we can export any variable from any file. We can use `multiple` exports in a single file. To use this use syntax :
        ```
        export const ... ;
        ```
        To import the `named export` we use this syntax :
        ```
        import {<variable name>} from "path";
        ```

- # Why React is faster ?
    - It has efficient DOM Manipulation.

# Introduction to React Hooks :
- Hooks are the `JavaScript Utility Fuctions` that have some `special functionality` basically. These are predefined functions that are given to us by React.

- # Type of Hooks : 
    - There are many types of Hooks but we will see only useState() this time.

    - `useState()` : The useState() Hook provides those two things:
        - A state variable to retain the data between renders.
        - A state setter function to update the variable and trigger React to render the component again.
        - To add a state variable, import useState from React at the top of the file:
            ```
            import { useState } from 'react';
            ```
        - To use the useState() hook, we will use this syntax : 
            ```
            const [var,setVar] = useState(initialize_var);
            ```
        - `Note` : It should be declared inside the `component`. 

    - # How React manages the state of any variable?
        - `React` uses the `Reconciliation Algo` also known as `React-Fiber`. This basically makes the `virtual dom` of the components. Virtual DOM is representation of `actual DOM` that react makes for `state management`. Now, If any change happens in the `new dom` then React will track of this using `diffing algorithm`. `Diffing Algo` compares the two `DOM's`. After this react `re-renders` the elements using new data.
        - You can read all details on this link : https://github.com/acdlite/react-fiber-architecture