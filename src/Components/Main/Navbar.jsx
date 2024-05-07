import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo, NavInfo } from '../../assets/Constant'
import { AppContext } from '../../App'

const NavBar = () => {
    const [ showNav, setShowNav ] = useState(false)

    const { isLoggedIn, currentNav, setCurrentNav, navBg, currentDropDown, setCurrentDropDown, scrolledDown, setScrolledDown } =useContext(AppContext)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScrolledDown(document.documentElement.scrollTop > 400 ? true : false)
    
        })

        document.removeEventListener('scroll', () => null)
    }, [])

    const navigate = useNavigate()

    return(
        <>
        <header className={`center fixed w-full h-[10vh] z-50 transition-all duration-1000 bg-${navBg}-fade ${scrolledDown ? `border-b border-${navBg} shadow-xl` : ''}`}>
            <div className="flex items-center justify-between w-11/12 lg:w-10/12">

                <Link to={'/'} className='text-green font-bold text-2xl w-3/12 md:w-4/12'>
                    <img src={Logo} alt="Macmay Logo" className='w-4/12 md:w-2/12'/>
                </Link>

                <i className={`bi bi-${showNav ? 'x-lg' : 'list'} text-blue text-2xl lg:hidden`} onClick={() => {
                    setShowNav(!showNav)
                }}></i>

                <div className={`w-full flex justify-center items-start  transition-all duration-1000 fixed top-[10vh] h-screen lg:relative lg:top-0 lg:w-fit lg:h-fit ${showNav ? ' left-0 z-40' : '-left-[100%] lg:-left-0'}`}>
                        <nav className={`flex flex-col lg:flex-row items-center w-full h-screen lg:gap-9 lg:h-fit lg:bg-transparent bg-${navBg}-fade lg:justify-between transition-all duration-1000`}>
                            {
                                NavInfo.map((nav, i) => (
                                    <div key={i} className={`flex flex-col transition-all duration-1000 justify-between w-full text-blue  border-b border-gray-200 lg:border-0 relative`}>

                                        <div className={`flex w-full lg:w-fit p-5 lg:p-0 justify-between cursor-pointer ${currentNav === i ? 'lg: text-green lg:bg-transparent lg:hover:border-b border-green' : 'text-secondary hover:bg-gray-200 lg:hover:bg-transparent border-blue lg:hover:border-b'}`} onClick={() => {
                                            if( nav.sublinks){
                                                setCurrentDropDown(currentDropDown === nav.title ? '' : nav.title) 

                                            }else{
                                                navigate(`/${nav.link}`)
                                                setCurrentNav(i)
                                                setShowNav(false)
                                                setCurrentDropDown('')
                                            }
                                        
                                        }}>
                                            <div className="flex gap-5 ">
                                                <i className={`bi bi-${nav.icon} lg:hidden`}></i>
                                                <p>{nav.title}</p>
                                            </div>
        
                                            {
                                                nav.sublinks ?
                                                <i className={`bi bi-chevron-${currentDropDown === nav.title ? 'up' : 'down'} cursor-pointer h-6 w-6 center rounded-full`} ></i> : ''
                                            }
        
                                        </div>
                                        {/**** NAVS WITH SUBLINKS */}
                                        {
                                            nav.sublinks ?
                                            <div className={`flex flex-col gap-3 w-full overflow-hidden transition-all duration-200 lg:duration-1000 lg:absolute lg:min-w-[200px] lg:shadow-xl lg:gap-1 bg-${navBg}-fade lg:rounded-b-lg lg:absolute z-0
                                            
                                            ${currentDropDown == nav.title ? 'lg:border lg:border-blue lg:border-t-0 block  mb-7 lg:top-[7vh] ' : 'h-0 lg:h-fit text-[0px] mb-0 lg:-top-[250px]'}
                                            
                                            `}>
        
                                                {   
                                                    nav?.sublinks?.map((sublink, j) => (
                                                        <Link to={`/${nav.link}/${sublink.link}`} key={j} className="flex gap-5 py-3 lg:py-5 lg:bg-gray-100 hover:bg-gray-200 w-full px-8 lg:px-0 lg:p-2 text-sm text-blue" onClick={() => {setShowNav(false)
                                                            setCurrentNav(i)
                                                          setCurrentDropDown('')
                                                        }}>
                                                        <i className={`bi bi-${sublink.icon} text-secondary`}></i>
                                                        <p className="">{sublink.title}</p>
                                                    </Link>
                                                    ))
                                                }
                                            </div>  : ''
                                        }
                                    </div>
                                ))
                            }
                        </nav>
        
                        <div className="h-full lg:hidden bg-transparent w-[60%] lg:w-[60%] xl:w-[70%]" onClick={ ()=> setShowNav(!showNav)}>
                        
                        </div>
        
                    </div>
            </div>

            
        </header>
        </>
    )
}


export default NavBar