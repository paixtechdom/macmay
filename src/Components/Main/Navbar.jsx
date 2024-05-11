import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavInfo } from '../../assets/Constant'
import { AppContext } from '../../App'

const NavBar = () => {
    const [ showNav, setShowNav ] = useState(false)
    const [ text, setText ] = useState('blue')

    const { currentDropDownIndex, currentNav, setCurrentNav, currentDropDown, setCurrentDropDown, scrolledDown, setScrolledDown, logo } =useContext(AppContext)


    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScrolledDown(document.documentElement.scrollTop > 100 ? true : false)
        })
        document.removeEventListener('scroll', () => null)
    }, [])

    const navigate = useNavigate()

    return(
        <>
        <header className={`center fixed w-full left-0 top-0 h-[8vh] md:h-[10vh] z-50 transition-all duration-1000  ${scrolledDown ? `shadow-xl bg-white` : ''}`}>
            <div className="flex items-center justify-between w-11/12 lg:w-10/12">

                <Link to={'/'} className='w-3/12 md:w-4/12'>
                    <img src={logo} alt="Macmay Logo" className='w-5/12 md:w-2/12'/>
                </Link>

                <i className={`bi bi-${showNav ? 'x-lg' : 'list'} text-${text} text-2xl lg:hidden cursor-pointer`} onClick={() => {
                    setShowNav(!showNav)
                }}></i>

                <div className={`w-full flex justify-center items-start  transition-all duration-1000 fixed top-[8vh] md:top-[10vh] h-screen lg:relative lg:top-0 lg:w-fit lg:h-fit ${showNav ? ' left-0 z-40' : '-left-[100%] lg:-left-0'} bg-white lg:bg-transparent`}>
                        <nav className={`flex flex-col lg:flex-row items-center w-full h-screen lg:gap-9 lg:h-fit lg:bg-transparent lg:justify-between transition-all duration-1000`}>
                            {
                                NavInfo.map((nav, i) => (
                                    <div key={i} className={`flex flex-col transition-all duration-1000 justify-between w-full text-${text}  border-b border-gray-200 lg:border-0 relative`}>

                                        <div className={`flex w-full lg:w-fit py-5 px-[5%] lg:p-0 justify-between cursor-pointer ${currentNav === i ? 'text-green text-xl font-bold lg:bg-transparent lg:hover:border-b border-green' : 'text-secondary hover:bg-gray-200 lg:hover:bg-transparent border-blue lg:hover:border-b'}`} onClick={() => {
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
                                            <div className={`flex flex-col gap-1 w-full overflow-hidden transition-all duration-200 lg:duration-1000 lg:absolute lg:min-w-[300px] lg:shadow-xl lg:gap-1 bg-gray-200 lg:rounded-b-lg lg:absolute z-0
                                            
                                            ${currentDropDown == nav.title ? 'lg:border lg:border-blue lg:border-t-0 block  mb-7 lg:top-[7vh] ' : 'h-0 lg:h-fit text-[0px] mb-0 lg:-top-[250px]'}
                                            
                                            `}>
        
                                                {   
                                                    nav?.sublinks?.map((sublink, j) => (
                                                        <Link to={`/${nav.link}/${sublink.link}`} key={j} className={`flex gap-5 py-3 lg:py-5 bg-white hover:bg-gray-100  w-full px-8 lg:px-0 lg:p-2 text-sm transition-all duration-500
                                                        ${
                                                            currentNav == 2 && 
                                                            currentDropDownIndex == j ? 'text-green' :
                                                            `text-${text}`
                                                        }
                                                         `} onClick={() => {setShowNav(false)
                                                            setCurrentNav(i)
                                                          setCurrentDropDown('')
                                                        }}>
                                                        <i className={`bi bi-${sublink.icon}`}></i>
                                                        <p className={``}>{sublink.title}</p>
                                                    </Link>
                                                    ))
                                                }
                                            </div>  : ''
                                        }
                                    </div>
                                ))
                            }
                        </nav>
        
                        <div className="h-full lg:hidden bg-transparent w-0 md:w-[60%]" onClick={ ()=> setShowNav(!showNav)}>
                        
                        </div>
        
                    </div>
            </div>

            
        </header>
        </>
    )
}


export default NavBar