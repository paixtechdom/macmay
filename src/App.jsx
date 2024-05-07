import React, { useState, createContext, useEffect, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import './assets/styles/index.css'

const Home = React.lazy(() => delayLoad(import('./Pages/Home/Home')))
const Footer = React.lazy(() => delayLoad(import('./Components/Main/Footer')))
const NavBar = React.lazy(() => delayLoad(import('./Components/Main/Navbar')))





function delayLoad(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  }).then(() =>promise);
}

export const AppContext = createContext()

const Layout = () =>{ 
  const [ currentNav, setCurrentNav ] = useState(0)
  const [ navBg, setNavBg ] = useState('blue')
  const [ currentDropDown, setCurrentDropDown ] = useState('')
  const [ scrolledDown, setScrolledDown ] = useState(false)



  return(
    <div className='app'>

      <AppContext.Provider value={{ currentNav, setCurrentNav, navBg, setNavBg, currentDropDown, setCurrentDropDown, scrolledDown, setScrolledDown }}>
        <Suspense fallback={<></>}>
          <NavBar />
        </Suspense>

          <div className='d-flex w-full min-h-screen'>
            <Outlet />
          </div>
          
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
        <React.Suspense fallback={<div className='center h-screen bg-gray-300'>Loading...</div>}>
          <Home />
        </React.Suspense>
      },
     
      {
        path: '/*',
        element: <p>Hello world</p>
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
         
