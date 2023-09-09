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