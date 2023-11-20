
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home/home'
import Root from './routes/root';
import ContributorGallery from './ContributorWorks/ContributorGallery';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import ContributorWork from './ContributorWorks/ContributorWork';
import EscherWork from './Gallery/EsherWork';
import Reptiles from './ContributorWorks/Works/Reptiles'
import AngelandDevils from './ContributorWorks/Works/AngelsAndDevils'
import Kothekar from './ContributorWorks/Works/Kothekar'
import CreateWork from './Config/CreateWork';
import Login from './Config/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContributedWorks from './Config/ContributedWorks';
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
        path: "/contributor-works/reptiles",
        element: <Reptiles/>,
      },
      {
        path: "/contributor-works/angelsanddevils",
        element: <AngelandDevils/>,
      },
      {
        path: "/contributor-works/kothekar",
        element: <Kothekar/>,
      },
      {
        path: "/gallery",
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
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/createWork',
        element: <CreateWork/>
      }
      ,
      {
        path:'/contributedWorks',
        element: <ContributedWorks/>
      }
    ]
  },
]
const router = createBrowserRouter(routes,{
  basename:"/"
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} >
      </RouterProvider>
)
