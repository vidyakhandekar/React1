import React from "react";
import ReactDOM from "react-dom/client";

const headings=(
    <div>
        <h1>Namaste React 2</h1>
        <h1>Lets'start</h1>
        <h1>using JSX</h1>
    </div> 
);


    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(headings);
