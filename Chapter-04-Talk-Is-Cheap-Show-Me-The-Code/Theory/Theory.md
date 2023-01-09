## Is JSX madatory for React?
JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling React. createElement(component, props, ...children).


## Is ES6 mandatory for React?
It is not mandatory but is highly recommendable. The latest projects created on React rely a lot on ES6.


## How can I write comments in JSX?
JSX comments are written as follows:

`{/*  */}` - for multiline comments
`//` - for single line comment


## What is <React.Fragment></React.Fragment> and <></>?
A common pattern in React is for a component to return multiple elements. Fragments(`<React.Fragment></React.Fragment>`) let you group a list of children without adding extra nodes to the DOM. `<></>` is short syntax for the `<React.Fragment></React.Fragment>`.


## What is Virtual DOM?
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

Since “`virtual DOM`” is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term “virtual DOM” is usually associated with `React elements` since they are the objects representing the user interface. React, however, also uses internal objects called `“fibers”` to hold additional information about the component tree. They may also be considered a part of “`virtual DOM`” implementation in React.


## What is Reconciliation in React?
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called `reconciliation`.


## What is React Fiber?
Fiber is the new `reconciliation engine` in React 16. Its main goal is to enable incremental rendering of the `virtual DOM`.
[https://github.com/acdlite/react-fiber-architecture](https://github.com/acdlite/react-fiber-architecture)


## Why we need keys in React? When do we need keys in React?
Keys help React identify which items have changed, are added, or are removed.

Keys should be given to the elements inside the array to give the elements a stable identity:

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```


## Can we use index as keys in React?
Yes, When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:

```
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

However it is not recommended to use indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.

Robin Pokorny’s article for an [in-depth explanation on the negative impacts of using an index as a key](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/).

Here is an [in-depth explanation about why keys are necessary](https://reactjs.org/docs/reconciliation.html#recursing-on-children).

## What is props in React? Ways to 
Props are arguments passed into React components. 

React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.


```
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
```

Usually you don’t need the whole props object itself, so you destructure it into individual props.

```
function Avatar({ person, size }) {
  // ...
}
```

This syntax is called `“destructuring”` and is equivalent to reading properties from a function parameter.

**Specifying a default value for a prop**
```
function Avatar({ person, size = 100 }) {
  // ...
}
```

**Forwarding props with the JSX spread syntax**
Sometimes, passing props gets very repetitive. You can use more concise `spread` syntax.

```
const Body = () => {
    return (
        <div>
            {restaurantList.map((restaurant)=>{
                return (
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                )
                })
            }
        </div>
    )
}
```

## What is a Config Driven UI?
An application that could easily adapt with just a few changes in this configuration is called Config Driven UI.

CDD(Config Driven Development) is a different way to build applications.

Traditionally we build applications like this:
* Lead architects design around business requirements
* Application is built and deployed
* Changes are done through additional components (SOLID Principles) or painful refactor

With CDD we build applications like this:
* Independent components are built first, starting at the atomic level
* An interface (usually JSON) is defined to compose the higher level UI
* Combination of reusable components and JSON blueprint allows developers to easily build up and out
* At its core, CDD is a way of using modularity to build a loosely coupled set of components that are then composed together using a common interface.

Ref: [https://medium.com/captech-corner/an-intro-to-configuration-driven-development-cdd-48a1c088baa9](https://medium.com/captech-corner/an-intro-to-configuration-driven-development-cdd-48a1c088baa9)

