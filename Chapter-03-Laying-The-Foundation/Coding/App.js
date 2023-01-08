import React from "react";
import ReactDOM from "react-dom/client";

/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */


let heading1 = React.createElement("h1", 
    {
        id: "h1",
    },
    "heading 1"
);

let heading2 = React.createElement("h2", 
    {
        id: "h2",
    },
    "heading 2"
);

let heading3 = React.createElement("h3",
    {
        id: "h3",
    },
    "heading 3"
)

// Create nested React Elements
let container = React.createElement("div", 
    {
        id: "container",
        className: "title"
    },
    [heading1, heading2, heading3]
);

const heading = <h2 className="heading">Heading from JSX</h2>

const TitleComponet = () => (
    <h4>This is title text</h4>
)


const App = () => {
    return (
        <div>
            {container}
            This is a JSX block.
            {heading}

            <h3>This is a componsition of component i.e., a component inside a component.</h3>
            <TitleComponet/>
        </div>
    )
}
// create root using createRoot
let root = ReactDOM.createRoot(document.getElementById("root"));

// rendering react element inside root
root.render(<App/>);