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
import CommentDetails from './views/CommentDetails'


const routes = createBrowserRouter([
  { path: '/', element: <Navigate to="/posts" />},
  { path: '/users', element: <Layout><Users /></Layout> },
  { path: '/albums', element: <Layout><Albums /></Layout> },
  {
    path: '/posts',
    children: [
      { path: '', index:true, element: <Layout><Posts /></Layout> },
      { path: ':slug',
        children: [
          { path: '', element: <Layout><Details /></Layout>},
          { path: 'comments/:id', element: <Layout><CommentDetails /></Layout> },
        ]
      },
      
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
