import { render } from "preact";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             { path: "", element: <Home /> },
//             { path: "about", element: <About /> },
//             { path: "contact", element: <Contact /> },
//         ],
//     },
// ]);

//another method /new syntax
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="user/:userid" element={<User />}></Route>
            <Route loader={githubInfoLoader} path="github" element={<Github />}></Route>
        </Route>
    )
);

render(<RouterProvider router={router} />, document.getElementById("app"));
