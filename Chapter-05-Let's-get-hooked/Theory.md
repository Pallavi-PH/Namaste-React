## What is difference between Named export, Default export and * as export?
Named export : With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces {}. The name of imported module has to be the same as the name of the exported module.

```
<!-- imports -->
<!-- ex. importing a single named export -->
import { MyComponent } from "./MyComponent";

<!-- ex. importing multiple named exports -->
import { MyComponent, MyComponent2 } from "./MyComponent";

<!-- ex. giving a named import a different name by using "as": -->
import { MyComponent2 as MyNewComponent } from "./MyComponent";

<!-- exports from ./MyComponent.js file -->
export const MyComponent = () => {}
export const MyComponent2 = () => {}
```

Default export : One can have only one default export per file. When we import we have to specify a name and import like:

```
<!-- import -->
import MyDefaultComponent from "./MyDefaultExport";

<!-- export -->
const MyComponent = () => {}
export default MyComponent;
```

* as export : Import all the named exports onto an object

```
import * as MainComponents from "./MyComponent";
<!-- use MainComponents.MyComponent and MainComponents.MyComponent2 -->
```

## What is importance of config.js file?
It is good practice to keep all the hardcoded things in config.js or constants.js file

## What are React Hooks?
Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. 

## Why do we need useState Hook?
`useState` is a Hook that lets you add React state to function components. `useState` returns a pair: the `current state value` and a `function` that lets you update it.