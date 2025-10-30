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

// const App = () => {
//   return ( 
//     <BrowserRouter basename={import.meta.env.BASE_URL}>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="experience" element={<ExperiencePage />} />
//           <Route path="projects" element={<ProjectsPage />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App

const routes = [
     {
        path: "/",
        element: <MainLayout />,
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
  basename: import.meta.env.BASE_URL,
});

const App = () => {
  return <RouterProvider router={router} />
}

export default App




