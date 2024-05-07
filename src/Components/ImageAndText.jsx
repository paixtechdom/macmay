
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'
import { Button } from './Buttons'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

export const ImageAndText = ({id, title, desc, img, className, iconText, icon, scrollTo, navigateTo, bg}) => {
    const { navBg, setNavBg } = useContext(AppContext)

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        const pos = document.querySelector(`#${id}`).getBoundingClientRect()
        if(pos.top > -10 && pos.top < 100){
            setNavBg(bg)
        }      
    }, [])

    const handleScroll = () => {
        const element = document.querySelector(`#${id}`)
        if(element){
            let pos = element.getBoundingClientRect()
            if(pos.top < 150 && pos.top > -800){
                setNavBg(bg)
            }  
            else{
            }

        }
      
    }



    const navigate = useNavigate()
    return(
        
        <section id={id} className={`bg-${bg}-fade flex justify-center p y-[12ch] lg:mb-[8ch] text-gray-100 h-fit -90 items-center relative lg:h-screen overflow-hidden`}>            
            <div className={`cente r h-[90%] flex items-start lg:items-center z-10 flex-col lg:flex-row  w-11/12 lg:w-10/12 gap-[5ch] lg:gap-[0ch] xl:gap-[5ch] py-[10vh] lg:pt-0 overflow-hi dden`}>
                
                <div className={`flex flex-col gap-4 lg:w-10/12 borde r-l border- t border-${bg} rounded-tl-3xl justify-center `}>
                    <h2 className={`text-3xl text-blue font-bold`}>{title}</h2>
                    <div className={`text-blue tracking-wide leading-relaxed gap-2 flex flex-col`}>
                        {
                        desc.map((d, i) => (
                                <p key={i}>{d}</p>
                            ))
                        }
                    </div>


                <Button text={iconText} icon={icon} className={'w-fit'} func={() => {
                    scrollTo ?
                    document.querySelector(`#${scrollTo}`).scrollIntoView({
                        behavior: 'smooth'
                    })
                    : 
                    navigate(navigateTo)
                }}/>

                    
                </div>
                
                <div className={'w-full lg:w-9/12 flex lg:items-center justify-center relative rotate-[5deg]'}>
                    <div className={`absolute w-full h-full bg -red-200 [(0px 0px 3px 4px black)] shadow-${bg} round ed-3xl -right-[15px]  scale-90`}></div>

                    <LazyLoadImage
                        src={img} 
                        placeholderSrc={'Image to describe ' + title} 
                        className={` w-full h-full -translate-x-[10px]  scale-90 -translate-y-[10px] rotate-[355deg]`}
                        effect='blur'
                        
                    />
\                </div>
           
            </div>
        </section>
    )
}