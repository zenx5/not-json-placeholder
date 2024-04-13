import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { PostProvider } from './context/PostProvider'
// HowDoit
import { HowDoitProvider } from 'how-do-it'
import Navigation from './how/Navigation'
import ListUser from './how/ListUser'
// Views
import Layout from './views/Layout'
import Posts from './views/Posts'
import Users from './views/Users'
import Albums from './views/Albums'
import Details from './views/Details'

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

const info = {
  navigation: <Navigation />,
  listuser: <ListUser />
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HowDoitProvider content={info}>
      <PostProvider>
        <RouterProvider router={routes} />
      </PostProvider>
    </HowDoitProvider>
  </React.StrictMode>,
)
