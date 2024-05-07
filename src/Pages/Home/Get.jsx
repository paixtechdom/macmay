import { useContext, useEffect, useState } from 'react'
import img from '../../assets/images/IMG_20231017_051604_314.jpg'
import { AppContext } from '../../App'


export const Get = () => {
    const [ currentGet, setCurrentGet ] = useState(0)
    const { navBg, setNavBg } = useContext(AppContext)

    useEffect(() =>{
        const pos = document.querySelector(`#whatyouget`).getBoundingClientRect()
        if(pos.top > -10 && pos.top < 100){
            setNavBg('orange')
        }      
    }, [])

    const handleScroll = () => {
        const element = document.querySelector(`#whatyouget`)
        if(element){
            let pos = element.getBoundingClientRect()
            if(pos.top < 150 && pos.top > -800){
                setNavBg('orange')
            }  
            else{
            }

        }
      
    }
    document.addEventListener('scroll', handleScroll)


    const Gets = [
        {
            title: '1 Lorem',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quas?'
        },
        {
            title: '2 Lorem',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quas?'
        },
        {
            title: '3 Lorem',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quas?'
        },
        {
            title: '4 Lorem',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quas?'
        },
        {
            title: '5 Lorem',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quas?'
        }
    ]

    return(
        <div id='whatyouget' className="w-full center lg:h-[90vh]">
            <div className="flex flex-col lg:flex-row justify-between w-11/12 lg:w-10/12 h-full gap-[9vh] lg:gap-0  bg-orange-fade p-6 py-[15vh]  lg:p-9 rounded-xl">
                <div className="flex flex-col w-full lg:w-6/12 justify-center items-end text-5xl pr-3 text-orange font-bold border-r border-orange">
                    <h2 className=''>What</h2>
                    <h2 className=''>You</h2>
                    <h2 className=''>Get</h2>
                </div>

                <div className="w-full lg:w-6/12 text-blue  flex flex-col justify-center items-center h-full gap-3">
                    {
                        Gets.map((g, i) => (
                            <div key={i} className="flex flex-col  lg:w-11/12 gap-3 overflow-hidden">
                                <div className="flex justify-start items-start font-bold text-xl gap-8 hover:bg-white hover:bg-opacity-60 transition-all duration-500 p-3 rounded-xl cursor-pointer" onClick={() => {
                                        setCurrentGet(currentGet == i ? '' : i)
                                    }}>
                                    <h3>{g.title}</h3>
                                    <i className={`bi bi-chevron-${currentGet == i ? 'up' : 'down'}`} ></i>
                                </div>

                                <p className={`px-3 transition-all duration-500 ${currentGet == i ? 'h-[13vh] bg-white py-3 rounded-xl' : 'h-0'}`}>{g.desc}</p>
                            </div>
                        ))
                    }
                </div>
                 
            </div>
        </div>
    )
}