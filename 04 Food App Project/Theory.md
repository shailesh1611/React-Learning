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