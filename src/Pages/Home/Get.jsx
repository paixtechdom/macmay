import { useContext, useEffect, useState } from 'react'
import img from '../../assets/images/IMG_20231017_051604_314.jpg'
import { AppContext } from '../../App'


export const Get = ({data, title}) => {
    const [ currentGet, setCurrentGet ] = useState(0)
    const { navBg, setNavBg } = useContext(AppContext)

    useEffect(() =>{
        const pos = document.querySelector(`#whatyouget`).getBoundingClientRect()
        if(pos.top > -10 && pos.top < 100){
            setNavBg('blue')
        }      
    }, [])

    const handleScroll = () => {
        const element = document.querySelector(`#whatyouget`)
        if(element){
            let pos = element.getBoundingClientRect()
            if(pos.top < 150 && pos.top > -800){
                setNavBg('blue')
            }  
            else{
            }

        }
      
    }
    document.addEventListener('scroll', handleScroll)


    
    return(
        <section id='whatyouget' className="w-full center my-[10vh] lg:h-[90vh]">
            <div className="flex flex-col lg:flex-row justify-between w-11/12 lg:w-10/12 h-full gap-[9vh] lg:gap-0  bg-blue -fade p-6 py-[15vh]  lg:p-9 rounded-3xl">
                <div className="flex flex-col w-full lg:w-6/12 justify-center items-end text-5xl pr-3 text-white font-bold border-r border-orange gap-3">
                    {
                        title.map((t, i) => (
                            <h2 key={i} className=''>{t}</h2>

                        ))
                    }
                </div>

                <div className="w-full lg:w-6/12 text-white  flex flex-col justify-center items-center h-full gap-3">
                    {
                        data.map((g, i) => (
                            <div key={i} className="flex flex-col  lg:w-11/12 gap-1 overflow-hidden">
                                <div className="flex justify-start items-start font-bold text-xl gap-8 hover:bg-white hover:bg-opacity-10 transition-all duration-500 p-3 rounded-xl cursor-pointer" onClick={() => {
                                        setCurrentGet(currentGet == i ? 0 : i)
                                    }}>
                                    <h3>{g.title}</h3>
                                    <i className={`bi bi-${currentGet == i ? 'eye-slash-fill' : 'eye-fill'}`} ></i>
                                </div>

                                <p className={`px-3 text-blue transition-all duration-500 tracking-wide leading-relaxed ${currentGet == i ? `h-[vh] bg-white py-3 rounded-xl` : 'h-0'}`}>{g.desc}</p>
                            </div>
                        ))
                    }
                </div>
                 
            </div>
        </section>
    )
}