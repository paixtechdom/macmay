import React, { useState, createContext, useEffect, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import './assets/styles/index.css'
import PageNotFound from './Components/PageNotFound';
import { Loader } from './Components/Loader';

const NavBar = React.lazy(() => delayLoad(import('./Components/Main/Navbar')))
const Home = React.lazy(() => delayLoad(import('./Pages/Home/Home')))
const Products = React.lazy(() => delayLoad(import('./Pages/Products/Products')))
const About = React.lazy(() => delayLoad(import('./Pages/About/About')))
const Contact = React.lazy(() => delayLoad(import('./Pages/Contact/Contact')))
const Footer = React.lazy(() => delayLoad(import('./Components/Main/Footer')))





function delayLoad(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  }).then(() =>promise);
}

export const AppContext = createContext()

const Layout = () =>{ 
  const [ currentNav, setCurrentNav ] = useState(0)
  const [ currentDropDown, setCurrentDropDown ] = useState('')
  const [ scrolledDown, setScrolledDown ] = useState(false)



  return(
    <div className='app'>

      <AppContext.Provider value={{ currentNav, setCurrentNav, currentDropDown, setCurrentDropDown, scrolledDown, setScrolledDown }}>
        <Suspense fallback={<></>}>
          <NavBar />
        </Suspense>

          {/* <div className='d-flex w-full min-h-[50vh]'> */}
            <Outlet />
          {/* </div> */}
          
        <Suspense fallback={<></>}>
          <Footer />
        </Suspense>
     
      </AppContext.Provider>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: 
        <React.Suspense fallback={<Loader />}>
          <Home />
        </React.Suspense>
      },
      {
        path: '/About',
        element: 
        <React.Suspense fallback={<Loader />}>
          <About />
        </React.Suspense>
      },
      {
        path: '/Products',
        element: 
        <React.Suspense fallback={<Loader />}>
          <Products />
        </React.Suspense>
      },
      {
        path: '/contact-us',
        element: 
        <React.Suspense fallback={<Loader />}>
          <Contact />
        </React.Suspense>
      },
     
      {
        path: '/*',
        element:
          <React.Suspense fallback={<Loader />}>
            <PageNotFound />
          </React.Suspense>
      }
    ]
  }
])

function App() {
  

  return (
    <div className='App'>
      <div>
        <RouterProvider router={router} />

      </div>
    </div>
  );


}
export default App;
         
