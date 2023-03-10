## How do you create Nested Routes react-router-dom configuration
We can have nested routes using `children`  key.

```
createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "restaurants",
        element: <Restaurants />,
        children: [
          {
            path: "restaurant/:Id",
            element: <RestaurantMenu />,
          }
        ],
      }
    ],
  },
]);
```



## Read about createHashRouter, createMemoryRouter from React Router docs
`createHashRouter`: This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".
[Read more...](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter`: Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
[Read more...](https://reactrouter.com/en/main/routers/create-memory-router)



## What is the order of life cycle method calls in Class Based Components
#### Mounting
1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. DOM updation
5. componentDidMount

#### Updating
1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

#### Unmounting
1. componentWillUnmount

Reference: 
[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

[React docs](https://reactjs.org/docs/react-component.html#:~:text=componentWillUnmount()%20is%20invoked%20immediately,were%20created%20in%20componentDidMount()%20.)



## Why do we use componenetDidMount?
The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.

The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.



## Why do we use componentWillUnmount? Show with example
`componentWillUnmount()` is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in `componentDidMount()`.

```
  // Defining the componentWillUnmount method
  componentWillUnmount() {
    alert('The component is going to be unmounted');
  }
```



## Why do we use super(props) in constructor?
`super()` function is to call the `constructor` of the parent class. It is used when we need to access a few variables in the parent class.

Using `super` constructor with `props` arguments basically allows accessing `this.props` in a Constructor function.

```
import React from "react";
  
class App extends React.Component {
   
  constructor(props){
    super(props);
    console.log("Empty props ", this.props);
  }
  
  render() {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    );
  }
}
  
export default App;
```



## Why can't we have the callback function in useEffect async?
You cannot directly make the callback function supplied to the useEffect hook async because: async functions implicitly return a promise, and; useEffect expects its callback to either return nothing or a clean-up function.



> React Life cycle method Diagram: [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)