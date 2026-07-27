import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout"
import HomePage from "./routes/HomePage"
import ListPage from "./routes/ListPage"
import SinglePage from "./routes/SinglePage"
import ProfilePage from "./routes/ProfilePage"
import Login from "./routes/Login"
import Register from "./routes/Register"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/list",
        element:<ListPage/>
      },
      {
        path:"/:id",
        element:<SinglePage/>
      },
      {
        path:"/profile",
        element:<ProfilePage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
