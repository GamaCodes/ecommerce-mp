import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Failure from './routes/failure.jsx';
import Pending from './routes/pending.jsx';
import Success from './routes/success.jsx';
import Home from './routes/home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"failure",
        element: <Failure/>,
      },
      {
        path:"pending",
        element: <Pending/>,
      },
      {
        path:"success",
        element: <Success/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)