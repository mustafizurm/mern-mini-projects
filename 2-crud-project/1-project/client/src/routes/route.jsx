import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
// import Products from "../pages/products/Products";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            // {
            //     path: "/products",
            //     element: <Products />
            // }
        ]
    }
])


export default router;