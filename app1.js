import React from "react";
import ReactDOM from "react-dom/client";
const heading1=React.createElement("h1",{
    id:"title1",
},"Namaste React");

const heading2=React.createElement("h1",{
    id:"title2",
},"Let's begin");
const heading3=React.createElement("h1",{
    id:"title2",
},"React and reactDOM");

const container=React.createElement(
    "div",
    {
        id:"container",
    }
    ,
    [heading1,heading2,heading3]
);


    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);
