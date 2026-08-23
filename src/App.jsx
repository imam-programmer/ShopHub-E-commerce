import React from 'react'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './root/Root';
import Categories from './pages/Categories';
import About from './pages/About';
import Deals from './pages/Deals';

const App = () => {
  const router=createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "categories", Component: Categories },
      { path: "about", Component: About },
      { path: "deals", Component: Deals }
 
    ],
  },
]);

  return (
<RouterProvider router={router}></RouterProvider>
  )
}

export default App