import { useEffect, useState } from "react"
import { Logo } from "../assets/Constant"


export const Loader = () => {
    const [ loaderOpacity, setLoaderOpacity ] = useState(100)
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        
        setTimeout(() => {
            document.body.style.overflowY = 'auto'
        }, 3000);
        
        setTimeout(() => {
            setLoaderOpacity(50)
        }, 2900);


    }, [])
    
    return(
        <div className={`fixed bg-white center w-full h-screen top-0 left-0 flex-col z-50 transition-all durtion-[4s] opacity-${loaderOpacity}`}>

            <img src={Logo} alt="Macmay Logo" className="w-[70px]"/>
            <p className="font-bold text-4xl text-blue">Macmay Group</p>

            <div className="relative overflow-hidden flex-col h-2 rounded-full mt-4 bg-gray-200 w-7/12 md:w-5/12 lg:w-3/12">

                <div className="absolute bg-gray-100 h-full w-4/12 bg-green rounded-full loader">

                </div>
            </div>
                  

        </div>
    )
}


