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

import MainLayout from '/src/layouts/MainLayout'
import HomePage from '/src/pages/HomePage'
import NotFoundPage from '/src/pages/NotFoundPage'
import ExperiencePage from '/src/pages/ExperiencePage'
import ProjectsPage from '/src/pages/ProjectsPage'

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





