import React, { useState, createContext, useEffect, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import './assets/styles/index.css'
import PageNotFound from './Components/PageNotFound';
import { Loader } from './Components/Loader';
import { LogoGroup } from './assets/Constant';
import { Alert } from './Components/Alert';

const NavBar = React.lazy(() => delayLoad(import('./Components/Main/Navbar')))
const Home = React.lazy(() => delayLoad(import('./Pages/Home/Home')))
const Products = React.lazy(() => delayLoad(import('./Pages/Products/Products')))
const About = React.lazy(() => delayLoad(import('./Pages/About/About')))
const Multifarious = React.lazy(() => delayLoad(import('./Pages/Company/Multifarious')))
const Farms = React.lazy(() => delayLoad(import('./Pages/Company/Farms')))
const Foods = React.lazy(() => delayLoad(import('./Pages/Company/Foods')))
const Contact = React.lazy(() => delayLoad(import('./Pages/Contact/Contact')))
const Footer = React.lazy(() => delayLoad(import('./Components/Main/Footer')))





function delayLoad(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 1500);
  }).then(() =>promise);
}

export const AppContext = createContext()

const Layout = () =>{ 
  const [ currentNav, setCurrentNav ] = useState(0)
  const [ currentDropDown, setCurrentDropDown ] = useState('')
  const [ currentDropDownIndex, setCurrentDropDownIndex ] = useState(4)
  const [ scrolledDown, setScrolledDown ] = useState(false)
  const [ showScrollTop, setShowScrolledTop ] = useState(false)
  const [ alert, setAlert ] = useState(false)
  const [ alertMessage, setAlertMessage ] = useState('')
  const [ alertType, setAlertType ] = useState('')
  const [ logo, setLogo ] = useState(LogoGroup)

  useEffect(() => {
    document.addEventListener('scroll', () => {
        setShowScrolledTop(document.documentElement.scrollTop > 1000 ? true : false)
    })
    document.removeEventListener('scroll', () => null)
}, [])

  useEffect(() => {
    if(alert){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflowY = 'scroll'
    }
  }, [alert])


  return(
    <div id='top' className='app w-full relative overflow-hidden'>

      <AppContext.Provider value={{ currentNav, setCurrentNav, currentDropDown, setCurrentDropDown, scrolledDown, setScrolledDown, currentDropDownIndex, setCurrentDropDownIndex, logo, setLogo, alert, setAlert, alertMessage, setAlertMessage, alertType, setAlertType }}>
        <Suspense fallback={<></>}>
          <NavBar />
        </Suspense>

          {/* <div className='d-flex w-full min-h-[50vh]'> */}
            <Outlet />
          {/* </div> */}

          { 
            alert ?
            <Alert /> : ''
          }
          
          {/* <div className={`center fixed  lg:bottom-[100px] bottom-9 h-[60px] w-[60px] z-50 bg-blue-fade shadow-xl rounded-3xl cursor-pointer transition-all duration-1000 ${showScrollTop ? 'right-9 lg:right-[100px]' : '-right-[100%]'}`} onClick={() => {
            document.querySelector('#top').scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            <i className="bi bi-arrow-up text-2xl"></i>
          </div> */}
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
        path: '/Companies/Macmay-Multifarious',
        element: 
        <React.Suspense fallback={<Loader />}>
          <Multifarious />
        </React.Suspense>
      },
      {
        path: '/Companies/Macmay-Farms',
        element: 
        <React.Suspense fallback={<Loader />}>
          <Farms />
        </React.Suspense>
      },
      {
        path: '/Companies/Macmay-Foods',
        element: 
        <React.Suspense fallback={<Loader />}>
          <Foods />
        </React.Suspense>
      },
      {
        path: '/Contact',
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
         
