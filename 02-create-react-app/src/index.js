import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//virtual dom- khud ka dom banate hai website wala use nhi karta
const root = ReactDOM.createRoot(document.getElementById("root"));
//root ko render karliya //app(jsx) ko render kardiya//can make custom rtag
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
//react.strict mode is for development for optimization//it is safe mode ,you can remove it
