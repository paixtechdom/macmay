import { useContext, useEffect, useRef, useState } from "react"
import { HeroContent } from "../../assets/Constant"
import { Button } from "../../Components/Buttons"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import { AppContext } from "../../App"
import { Parallax, ParallaxRight } from "../../Components/Parallax"
import { useNavigate } from 'react-router-dom'


export const Hero = () => {
    const { scrolledDown, setScrolledDown } = useContext(AppContext)
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const [startX, setStartX ] = useState(0)
    const sliderRef = useRef(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!scrolledDown){
        }
        const int = setInterval(() => {
            slide()
        }, 10000);
        return () => clearInterval(int)
    }, [currentSlide])
    
    const slide = () => {
        setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
    }

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX)
    }
    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches[0].clientX - startX
        const threshold = 100;
        if(Math.abs(deltaX) > threshold){
            slide()
        }else if(deltaX< 0 && currentSlide < HeroContent.length - 1){
            setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
        }
    }
    
    
    
    return(
        <>
            <section className="h-fit lg:h-screen w-full center relative overflow-hidden bg-white">

                <div className={`absolute  shadow-blue w-[1500px] lg:w-[2000px]  h-[1500px]  -translate-y-[900px] top-0 rounded-full transition-all duration-1000 border border-blue bg-blue-fade opacity-20`}></div>

                <div className="absolute hidden lg:block lg:flex flex w-full justify-between items-center z-20">
                    <div className="bi bi-chevron-left text-5xl text-gray-300 cursor-pointer h-[250px] center rounded-full w-[100px] lg:w-[150px] p-6 rounded-r-3xl transition-all duration-1000 hover:bg-black hover:bg-opacity-20"  onClick={() => setCurrentSlide(currentSlide == 0 ? HeroContent.length - 1 : prev => prev - 1)}></div>

                    <div className="bi bi-chevron-right text-5xl text-gray-300 cursor-pointer h-[250px] center rounded-full w-[100px] lg:w-[150px] p-6 rounded-l-3xl transition-all duration-1000 hover:bg-black hover:bg-opacity-20"  onClick={() => slide()
                        }>
                        
                    </div>
                </div>
                <div className="center w-full absolute top-[80vh] md:top-[90vh] z-40">
                    <div className={`center gap-3 bg-blue-900 border border-orange bg-orange-fade p-4 rounded-full px-9`}>
                        {
                            HeroContent.map((i, j) => (
                                <p key={j} className={`${currentSlide == j ? `h-4 lg:h-5 w-4 lg:w-5 bg-orange ${i.color}` : 'w-3 h-3 bg-white'} border border-orange rounded-full transition-all duration-500 cursor-pointer`} onClick={() => setCurrentSlide(j)}></p>
                            ))
                        }
                    </div>
                </div>


                
                <div className="w-11/12 lg:w-10/12 h-full" ref={sliderRef} onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}>

                    <div className="flex flex-col lg:flex-row justify-center items-center transition-all duration-1000 h-full w-full gap-[10ch] mt-[15vh] lg:mt-0" style={{

                    }}>
                        <Parallax id={'hero text'} clas={'lg:w-9/12'}>
                            {
                                HeroContent.map((d, i) => (
                                    i == currentSlide &&
                                    <div key={i} className="flex relative h-full center">
                                        <div className="w-full z-10 h-full z-20 flex items-center justify-start">
                                            <div className="w-full flex flex-col gap-4">
                                                <h1 className={`text-blue font-bold text-5xl lg:text-6xl font-b old`}>{d.title}</h1>
                                                <p className={`text-blue text- sm lg:text-lg tracking-wide leading-relaxed`}>{d.desc}</p>
                                                <div className="flex flex-col md:flex-row gap-5">
                                                    <Button text={'Learn More'} className={'w-fit'} color={'blue'} func={() =>{
                                                        document.querySelector('#whymacmay').scrollIntoView({
                                                            behavior: 'smooth'
                                                        })
                                                    }}/>
                                                    <Button text={'Contact Us'} className={'w-fit'} type={'primary'} icon={'telephone-fill'} color={'white'} func={()=>{
                                                        navigate('/Contact')
                                                    }}/>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            }

                        </Parallax>

                        <div className="relative lg:w-6/12 w-full max- h-[55vh] lg:h-[50vh] flex flex-col">
                            {
                                HeroContent.map((d, i) => (
                                    <div key={i} className={`absolute center overflow-hidden w-full h-full rounded-xl transition-all duration-500 ${currentSlide == i ? `-${d.color}` : 'opacity-10'} ${d.color} z-10`} style={{
                                        zIndex: currentSlide == i ? 30 : 20,
                                        transform: currentSlide == i ? '' : `rotate(-${i*65}deg) scale(0.2)`
                                    }}>
                                        <LazyLoadImage
                                            src={d.img} 
                                            placeholderSrc="Hero Image 1" 
                                            className="w-full h-fit rounded-xl"
                                            effect="blur"    
                                        />
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}