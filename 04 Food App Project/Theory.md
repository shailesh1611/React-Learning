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

# Monolithic and MicroServices Architecture
- # Monolithic Architecture : 
    - A monolithic architecture is a `singular`, `large computing network` with `one code base` that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming. 

- # Microservices Architecture : 
    - A microservices architecture, also simply known as `microservices`, is an architectural method that relies on a series of `independently deployable services`. These services have their `own business logic and database` with a specific goal. Updating, testing, deployment, and scaling occur within each service. Microservices decouple major business, domain-specific concerns into separate, independent code bases. `Microservices don’t reduce complexity`, but they make any `complexity visible` and `more manageable `by separating tasks into `smaller processes `that function independently of each other and contribute to the overall whole. 

# Approaches for rendering our data from an API 
- `Approach 1`:
    ```
    Loads -> API Call (takes time to load data) -> Render our Data
    ```
- `Approach 2`:
    ```
    Loads -> Render(basically render our skeleton) -> API Call -> Render our Data
    ```

- The `Approach 2` is `better` as compared to `Approach 1`. This is because in` Approach 1` our page will `remain blank until our api fetch the data`. This is bad user experience. Hence, `Approach 2` is `good` as it will `loads dummy data or skeleton (Shimmer UI)`. This is `good user experience`. However, Approach 2 has two renders but due to very good render cycle of react it will not slow.

# useEffect() Hook :
- useEffect() `delays` a piece of code from running until the render is reflected on the screen.
- useEffect() has following syntax :
    ```
    useEffect(()=>{
        // Code that is to be delay
    },[])
    ```
- useEffect() accepts two arguments i.e. a callback function, a dependency array.

# Adding Shimmer UI in our app using useEffect() :
- We can add `shimmer ui` in our app to enhance the user experience of our app.
- `Shimmer UI:` It is basically the loading screen. It shows a basic structure of different components used in our app. This is good user experience.
- To add the `shimmer ui` we will first render our `shimmer component`. After rendering of shimmer component we will `re-render` our page which will show `data fetched` from the `api`.
- This can be achieved using our `useEffect()` hook. Inside useEffect() hook we will fetch our data and render the app with new data. And we know that this fetching and rendering will be `delayed`.
- `Conditional Rendering` : Conditional Rendering means to render our page according to a condition. For Ex : we are `rendering` our `shimmer ui` if our `restaurent list is empty` or our `data is not fetched yet from api`. 


