
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import { useNavigate } from 'react-router-dom'
import { Button } from './Buttons'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

export const PagesHero = ({id, title, desc, img,  iconText, icon, scrollTo, navigateTo}) => {
    const navigate = useNavigate()
    return(
        
        <section id={id} className={`flex justify-center  text-blue h-fit items-center relative lg:h-[80vh] overflow-hidden`}>            
            <div className={`cente r h-[90%] flex items-start lg:items-center z-10 flex-col lg:flex-row  w-11/12 lg:w-10/12 gap-[5ch] lg:gap-[0ch] xl:gap-[5ch] py-[10vh] lg:pt-0 overflow-hi dden`}>
                
                <div className={`flex flex-col gap-4 lg:w-10/12 rounded-tl-3xl justify-center `}>
                    <h2 className={`text-5xl font-bold`}>{title}</h2>
                    <div className={`tracking-wide leading-relaxed gap-2 flex flex-col`}>
                        {
                        desc.map((d, i) => (
                                <p key={i}>{d}</p>
                            ))
                        }
                    </div>


                <Button text={iconText} icon={icon} className={'w-fit'} color={'white'} type={'primary'} func={() => {
                    scrollTo ?
                    document.querySelector(`#${scrollTo}`).scrollIntoView({
                        behavior: 'smooth'
                    })
                    : 
                    navigate(navigateTo)
                }}/>

                    
                </div>
                
                <div className={'w-full lg:w-5/12 flex lg:items-center justify-center relative'}>
                    {/* <div className={`absolute w-full h-full -right-[15px]  scale-90`} style={{
                        boxShadow: '0px 15px 10px 5px rgba(0,0,0,0.4)'
                    }}></div> */}

                    <LazyLoadImage
                        src={img} 
                        placeholderSrc={'Image to describe ' + title} 
                        className={` w-full h-full rounded-3xl`}
                        effect='blur'
                        
                    />
               </div>
           
            </div>
        </section>
    )
}