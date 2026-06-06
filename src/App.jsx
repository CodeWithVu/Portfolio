import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Project'
import Contact from './pages/Contact'
import Skills from './pages/Skill'
import NotFound from './pages/NotFound'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'resume',
          element: <Resume />
        },
        {
          path: 'skills',
          element: <Skills />
        },
        {
          path: 'projects',
          element: <Projects />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
