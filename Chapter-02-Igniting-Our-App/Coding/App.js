import React from "react";
import ReactDOM from "react-dom";

let heading1 = React.createElement("h1", 
    {
        id: "h1",
    },
    "Text from React - heading 1"
);

let heading2 = React.createElement("h2", 
    {
        id: "h2",
    },
    "Text from React - heading 2"
);

// Create nested React Elements
let container = React.createElement("div", 
    {
        id: "container",
    },
    [heading1, heading2]
);

// create root using createRoot
let root = ReactDOM.createRoot(document.getElementById("root"));

// rendering react element inside root
root.render(container);