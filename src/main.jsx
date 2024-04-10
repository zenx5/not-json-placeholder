import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import Layout from './views/Layout'
import { PostProvider } from './context/PostProvider'
import Posts from './views/Posts'
import Details from './views/Details'
import Users from './views/Users'
import Albums from './views/Albums'


const routes = createBrowserRouter([
  { path: '/', element: <Navigate to="/posts" />},
  { path: '/posts', index:true, element: <Layout><Posts /></Layout> },
  { path: '/users', element: <Layout><Users /></Layout> },
  { path: '/albums', element: <Layout><Albums /></Layout> },
  {
    path: '/posts',
    children: [
      { path: ':slug', element: <Layout><Details /></Layout> }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PostProvider>
        <RouterProvider router={routes} />
      </PostProvider>
  </React.StrictMode>,
)
