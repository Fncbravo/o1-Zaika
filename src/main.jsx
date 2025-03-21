import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Body } from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'




const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
      path: '/',
      element: <Body />
      },  
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
