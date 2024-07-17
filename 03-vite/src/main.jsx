import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

function MyApp() {
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    );
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">
        Visit google
    </a>
);

const anotherUser = "chai aur react";

//predefined syntax
const reactElement = React.createElement(
    "a",
    { href: "https://google.com", target: "_blank" },
    "click me to visit google",
    "br", //it is all becominf single element
    anotherElement //it can be worked by directly putting it in render or use react.createelement
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   )
