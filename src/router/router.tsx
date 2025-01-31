import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Help from "../pages/Help";
import Plans from "../pages/Plans";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <div></div>,
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "help",
                element: <Help />
            },
            {
                path: "plans",
                element: <Plans />
            }
            // visa resor, lägg till resa, detaljer om resa
        ]
    }
])

export default router;