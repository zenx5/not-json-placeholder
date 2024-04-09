import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import './index.css'
import Layout from './views/Layout'
import { PostProvider } from './context/PostProvider'
import Details from './views/Details'
import { HowDoitProvider } from './context/HowDoitProvider'
import Navigation from './how/Navigation'


const routes = createBrowserRouter([
  { path: '/', element: <Navigate to="/posts" />},
  { path: '/posts', index:true, element: <Layout><Home /></Layout> },
  { path: '/users', element: <Layout><Contact /></Layout> },
  { path: '/albums', element: <Layout><Contact /></Layout> },
  {
    path: '/posts',
    children: [
      { path: ':slug', element: <Layout><Details /></Layout> }
    ]
  }
])

const info = {
  navigation: <Navigation />
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
