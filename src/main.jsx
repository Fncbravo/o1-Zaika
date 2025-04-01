import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Body } from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import { lazy, Suspense } from 'react'
// import Grocery from './components/Grocery.jsx'


// Chunking 
// Code splitting
// Dynamic Bundling
// Lazy Loading
// on-demand loading
// dynamic import

const Grocery = lazy(() => import("./components/Grocery.jsx"));

const About = lazy(() => import("./components/About.jsx"))


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
        element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <About />
        </Suspense>
      ),
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/grocery',
        element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />
        </Suspense>
         ),
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
