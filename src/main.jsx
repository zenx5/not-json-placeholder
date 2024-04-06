import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import PostDetails from './components/PostDetails'
import './index.css'
import Layout from './views/Layout'


const routes = createBrowserRouter([
  { path: '/', element: <Layout><Home /></Layout> },
  { path: '/contact', element: <Layout><Contact /></Layout> },
  {
    path: '/posts',
    children: [
      { path: ':slug', element: <Layout><PostDetails /></Layout> }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className="text-center text-3xl my-5">React Router Example</h1>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
