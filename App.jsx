import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  HashRouter,
  Routes,
  BrowserRouter,
  ScrollRestoration
} from 'react-router-dom'

import MainLayout from '/src/layouts/MainLayout'
import HomePage from '/src/pages/HomePage'
import NotFoundPage from '/src/pages/NotFoundPage'
import ExperiencePage from '/src/pages/ExperiencePage'
import ProjectsPage from '/src/pages/ProjectsPage'
import ScrollToTop from './src/components/ScrollToTop'


const routes = [
     {
        path: "/",
        element: <> 
                    <MainLayout />
                    <ScrollToTop />
                 </>,
        children: [
           {
             index: true,
             element: <HomePage />,
           },
           {
             path: "experience",
             element: <ExperiencePage />,
           },
           {
             path: "projects",
             element: <ProjectsPage />,
           },
           {
             path: "*",
             element: <NotFoundPage />,
           },
        ],
      },
    ];

const router = createBrowserRouter(routes, {
  basename: '/',
});

const App = () => {
  return <RouterProvider router={router} />
}

export default App




