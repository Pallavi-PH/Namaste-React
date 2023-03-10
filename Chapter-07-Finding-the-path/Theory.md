## What are various ways to add images into our App? Explain with code examples

1. Using the image tag: Using absolute path
```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

2. Importing image using relative path

```
import logo from "./logo.png";

export default function App() {
  
  return <img src={logo} alt="logo" />
}
```

3. Most common and efficient way is to host all the assets of the application in a CDN and import them. You can store the common path of CDN in a constant or config file and use the constant variable as prefix to image name.

config.js
```
export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
```

```
import { IMG_CDN_URL } from "../config";

export default function App() {
  
  return <img src={IMG_CDN_URL+ imageId} alt="image" />
}
```


##  What would happen if we do console.log(useState())?
It returns array of 2 items [undefined, function]. State is `undefined` and Function is `bound dispatchSetState`.


## How will useEffect behave if we don't add a dependency array?
useEffect runs both after the first render and after every update(props and state change)


## What is SPA?
An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience.

> A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.


## What is difference between Cliet Side Routing and Server Side Routing?
In `Server-side routing` or rendering (SSR), every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing` or rendering (CSR), during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All Single Page Applications uses client-side routing.

