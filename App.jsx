import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  HashRouter,
  Routes,
  BrowserRouter
} from 'react-router-dom'

import MainLayout from './react-app/src/layouts/MainLayout'
import HomePage from './react-app/src/pages/HomePage'
import NotFoundPage from './react-app/src/pages/NotFoundPage'
import ExperiencePage from './react-app/src/pages/ExperiencePage'
import ProjectsPage from './react-app/src/pages/ProjectsPage'

const App = () => {
  return ( 
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App

// const App = () => {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<HomePage />} />
//         <Route path="experience" element={<ExperiencePage />} />
//         <Route path="projects" element={<ProjectsPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Route>
//     )
//   )

//   return <RouterProvider router={router} />
// }





