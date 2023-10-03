
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home/home'
import Root from './routes/root';
import ContributorGallery from './ContributorWorks/ContributorGallery';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import ContributorWork from './ContributorWorks/ContributorWork';
import EscherWork from './Gallery/EsherWork';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const routes = [
  {path:'/*',
element:<Home/>},
  {
    path:'',
    element: <Root/>,
    children:[
      {
        index:true,
        element: <Home/>
      },
      {path:'/*',
element:<Home/>},
      {
        path:'/home',
        element: <Home/>
      },
      {
        path: "/contributor-works",
        element: <ContributorGallery/>
      },
      {
        path: "/contributor-works/artwork/:id",
        element: <ContributorWork/>,
      },
      {
        path: "/escher-gallery",
        element: <Gallery/>,
      }
      ,
      {
        path: "/gallery/artwork/:id",
        element: <EscherWork/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      }
    ]
  },
]
const router = createBrowserRouter(routes,{
  basename:"/"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      </RouterProvider>
  </React.StrictMode>,
)
