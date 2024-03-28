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
import ReadBook from './components/ReadBook.jsx'
import WishList from './components/WishList.jsx'
import NotFound from './components/NotFound.jsx'
import AllBook from './components/AllBook.jsx'
import ChartWish from './components/ChartWish.jsx'





const router=createBrowserRouter([
  {
    path:'/',
    errorElement:<NotFound></NotFound>,
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/booklist',
        element:<BookList></BookList>,
        children:[
          {
            index:true,
            element:<ReadBook></ReadBook>
          },
          {
            path:'Wishlist',
            element:<WishList></WishList>
          },
        ]
      },
      {
        path:'/read',
        element:<PageRead></PageRead>
      },
      {
        path:'/details/:id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/book.json')
      },
      {
        path:'/wish',
        element:<ChartWish></ChartWish>
      },
      {
        path:'/AllBook',
        element:<AllBook></AllBook>
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
