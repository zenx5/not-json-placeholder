import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './views/Layout'
import { DataProvider } from './context/DataProvider'
import Posts from './views/Posts'
import Details from './views/Details'
import Users from './views/Users'
import Albums from './views/Albums'
import Comment from "./views/Comment";
import "./index.css";

const routes = createBrowserRouter([
  { path: "/", element: <Navigate to="/posts" /> },
  {
    path: "/users",
    element: (
      <Layout>
        <Users />
      </Layout>
    ),
  },
  {
    path: "/albums",
    element: (
      <Layout>
        <Albums />
      </Layout>
    ),
  },
  {
    path: "/posts",
    children: [
      { path: "", index: true, element: <Layout><Posts /></Layout> },
      { path: ":slug", element: <Layout><Details /></Layout> },
      { path: ":slug/comments/:commentId", element: <Layout><Comment /></Layout>}
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <DataProvider>
        <RouterProvider router={routes} />
      </DataProvider>
  </React.StrictMode>,
)
