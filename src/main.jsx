import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './pages/Mainlayout.jsx'

import Home from './pages/Home.jsx'
import BookList from './pages/BookList.jsx'
import PageRead from './pages/PageRead.jsx'
import BookDetails from './components/BookDetails.jsx'
import { Toaster } from 'react-hot-toast'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/booklist',
        element:<BookList></BookList>
      },
      {
        path:'/read',
        element:<PageRead></PageRead>
      },
      {
        path:'/details/:id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../public/book.json')
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
