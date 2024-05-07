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
            title: 'Savings',
            desc: 'We create unique and specific savings portfolios tailored to suit the specific needs of target clients'
        },
        {
            title: 'Investments',
            desc: 'We developing easy investment schemes that can be easily keyed into.'
        },
        {
            title: 'Agriculture',
            desc: 'We design strategic ways of investing in Agriculture and General Agriculture Services.'
        },
        {
            title: 'Agro Services',
            desc: 'Giving access to Agricultural Finance and related. We grow high value/quality Agricultural sales'
        },
        {
            title: 'Food Manufacturing',
            desc: 'We design strategic systems to aid quality food production process. We also carry out food Packaging and branding in line with international best practices'
        },
        {
            title: 'Food Supply',
            desc: 'We create a strategic food partnership and investment system that will enhance a more effective food supply chain process management'
        }
    ]

    return(
        <section id='whatyouget' className="w-full center my-[10vh] lg:h-[90vh]">
            <div className="flex flex-col lg:flex-row justify-between w-11/12 lg:w-10/12 h-full gap-[9vh] lg:gap-0  bg-orange-fade p-6 py-[15vh]  lg:p-9 rounded-xl">
                <div className="flex flex-col w-full lg:w-6/12 justify-center items-end text-5xl pr-3 text-orange font-bold border-r border-orange">
                    <h2 className=''>What</h2>
                    <h2 className=''>We</h2>
                    <h2 className=''>Do</h2>
                </div>

                <div className="w-full lg:w-6/12 text-blue  flex flex-col justify-center items-center h-full gap-3">
                    {
                        Gets.map((g, i) => (
                            <div key={i} className="flex flex-col  lg:w-11/12 gap-1 overflow-hidden">
                                <div className="flex justify-start items-start font-bold text-xl gap-8 hover:bg-white hover:bg-opacity-60 transition-all duration-500 p-3 rounded-xl cursor-pointer" onClick={() => {
                                        setCurrentGet(currentGet == i ? 0 : i)
                                    }}>
                                    <h3>{g.title}</h3>
                                    <i className={`bi bi-${currentGet == i ? 'eye-slash-fill' : 'eye-fill'}`} ></i>
                                </div>

                                <p className={`px-3 transition-all duration-500 tracking-wide leading-relaxed ${currentGet == i ? `h-[vh] bg-white py-3 rounded-xl` : 'h-0'}`}>{g.desc}</p>
                            </div>
                        ))
                    }
                </div>
                 
            </div>
        </section>
    )
}