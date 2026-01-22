import { createBrowserRouter, RouterProvider } from "react-router";
// import je components
import Home from "./Home.jsx";
import Layout from "./Layout.jsx";
import Motorcycles from "./Motorcycles.jsx";
import MotorDetail from "./MotorDetail.jsx";
import Create from "./Create.jsx";
import Delete from "./Delete.jsx";
import Edit from "./Edit.jsx";


const router = createBrowserRouter ([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/motorcycles",
                element: <Motorcycles/>,
            },

            {
                path: "/motorcycles/:id",
                element: <MotorDetail />,
            },
            {
                path: "/create",
                element: <Create />,
            },
            {
                path: "/edit/:id",
                element: <Edit/>,
            },
            {
                path: "/delete/:id",
                element: <Delete />,
            },
        ],
    },
]);

function App() {
    return <>
        <RouterProvider router={router} />
    </>
}

export default App;