## What is a Microservice?
Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.


## What is Monolith Architecture?
A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. 


## What is the difference between Monolith and Microservice?
While a monolithic application is a single unified unit, a microservices architecture breaks it down into a collection of smaller independent units. These units carry out every application process as a separate service. So, all the services have their own logic and databases, as well as perform specific functions.


## Why do we need useEffect hook?
By using useEffect Hook, you tell React that your component needs to do something after render. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.


## What is Optional chaining?
he optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
>obj.val?.prop


## What is Shimmer UI?
A shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (it's currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.

## What is the difference between JS expression and JS statement?
Any unit of code that can be evaluated to a value is an ```expression```. A ```statement``` is an instruction to perform a specific action.

A JS ```expression``` returns a value that we use in the application. for example:

```
1 + 2 // expresses 
"foo".toUpperCase() // expresses 'FOO'
console.log(2) // logs '2'
isTrue ? true : false // returns us a true or false value based on isTrue value

```

A JS ```statement```, does not return a value. for example:

```
let x; // variable declaration
if () { } // if condition
```

If we want to use JS ```expression``` in JSX, we have to wrap in ```{/* expression slot */}``` and if we want to use JS ```statement``` in JSX, we have to wrap in ```{(/* statement slot */)}```;

## What is Conditional redering? Explain with an example
Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

```
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
```

## What is CORS?
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).

## What is async and await?
The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.


## What is the use of `const json = await data.json()` in getRestaurants()
The `data` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats. So we can extract the `JSON object` from a `fetch` response by using `await data.json()`.
`data.json()` is a method on the data object that lets you extract a `JSON object` from the data or response. The method returns a promise because we have used `await` keyword, so `data.json()` returns a promise resolved to a `JSON object`.