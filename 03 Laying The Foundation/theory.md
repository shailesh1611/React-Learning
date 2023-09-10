# Laying Our Foundation
- Here, we are using the previous files, which are created in Igniting Our App.

# Setting up Project Build
- Step - 1 : Open `package.json` file
- Step - 2 : Now, In the script section, add two Scripts:
    - Script 1 : `"start" : "parcel index.html"`
    - Script 2 : `"build" : "parcel build index.html"`
    - We can run these scrips using `npm run` command in `CLI`

# Creating React Element By JSX
- What is JSX?
    - JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

    - There are some rules of writing `JSX`, refer https://react.dev/learn/writing-markup-with-jsx for documentation.

- How can we use JSX or HTML Like Syntax in JavaScript?
    - Here, Parcel transcompile the JS code before actually passing it to JS Engine.
    - Parcel uses Babel to do this transcompilation.
    - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:
        - Transform syntax.
        - Babel can convert JSX syntax to readable JavaScript Code.
        - There are many other features of Babel. Use Documentation to read https://babeljs.io/docs/.

# Components In React
- Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI).
- They can be reused again and again.
- We can define components in two ways :-
    - `Functional Components (New Way to Define Component).`
    - `Class Based Components (Traditional Way to Define Component)`
- Now a days, `Functional Components` are used.

# Functional Components
- We can define functional component as a javascript function that is returning a JSX code.
- To define a functional component, we will define a javascript fuction. It should return any JSX code.
- `Note :` React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
- `For Ex :` 
    ```
    const Heading = () => {
        return <h1> Namestey React ! </h1>;
    };
    ```
- To render the component we will use `root.render()` method. And we can render in following ways :-
    -   ```
        root.render(<Heading/>);
        ```
    -   ```
        root.render(<Heading></Heading>);
        ```
    -   ```
        root.render(Heading());
        ```

- `React Component Composition :`
    - Component composition is the name for passing components as props to other components, thus creating new components with other components.

    - `For Ex` : 
        ```
        const Component1 = () => (
            <h1>I'm Component 1</h1>
        );

        const Component2 = () => (
            <>
                <Component1/>
                <h2>I'm Component 2</h2>
            </>
        );
        ```

- `JavaScript Inside JSX :`
    - We can add any JS expression inside our jsx. 
    - `For Ex :`
        ```
            const element1 = <h1>This is React Element1</h1>
            const element2 = (
                <>
                    {element1}
                    <h2>This is React Element2</h2>
                </>       
            );
            const Component = () => (
                <div>
                    {element2}
                    <h3>This is React Component</h3>
                </div>
            );
        ```

# How JSX prevents Injection Attacks ?
- Because before actually going the code to the js engine, it precompiles by the Babel.
- Hence, It escapes any values embedded in JSX before rendering them.
- Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered.