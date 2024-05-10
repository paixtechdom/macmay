import { PagesHero } from "../../Components/PagesHero"
import { HeroContent, LegalFrameWorks, LogoFarms, LogoFoods, LogoGroup, LogoMultifarious, Missions, Objectives, ScopeOfService, Visions } from "../../assets/Constant"
import { Get } from "../Home/Get"
import { BreadCrumbs } from "../../Components/BreadCrumbs"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../App"
import { ImageAndText } from "../../Components/ImageAndText"
import img from '../../assets/images/IMG_20231017_051604_314.jpg'
import { Title } from "../../Components/Title"
import { Parallax, ParallaxRight } from "../../Components/Parallax"



const Company = ({companyIndex}) => {
    const { setCurrentNav, setCurrentDropDownIndex, setLogo } = useContext(AppContext)
    useEffect(() => {
        setLogo(
            companyIndex == 0 ? LogoMultifarious: 
            companyIndex == 1 ? LogoFarms: 
            companyIndex == 2 ? LogoFoods: LogoGroup
        )
        setCurrentNav(2)
        setCurrentDropDownIndex(companyIndex)
        document.documentElement.scrollTop = 0
    }, [])
    const filteredVision = Visions.filter((v, i) =>{
        if(companyIndex == i){
            return(v)
        }
    })
    const filteredMission = Missions.filter((v, i) =>{
        if(companyIndex == i){
            return(v)
        }
    })

    return(
        <div className="center flex-col gap-9">
            <PagesHero 
                id={'testing'}
                title={Visions[companyIndex].title}
                img={HeroContent[companyIndex + 1].img}
                desc={[HeroContent[companyIndex + 1].desc]}
                iconText={'Read more'}
                icon={'arrow-down'}
                scrollTo={'Vision'}
            />

        <BreadCrumbs links={['Home', Visions[companyIndex].title]}/>
        <Get data={filteredVision} title={['Our', 'Vision']}/>
        <ImageAndText 
            title={'Scope Of Service'}
            desc={ScopeOfService[companyIndex].desc}
            img={ScopeOfService[companyIndex].img}
            icon={'chevron-down'}
            iconText={'Learn More'}
            scrollTo={'Mission'}
        />
        <Get data={filteredMission} title={['Our', 'Mission']}/>
        <section className="w-11/12 lg:w-10/12 flex flex-col my-[10vh] gap-[5vh]">
            <Title text={'Our Objectives '} />
            <div className="flex flex-col gap-4 text-blue" >
                {
                    Objectives[companyIndex].list.map((m, i) => (
                        <ParallaxRight key={i} id={m} clas="flex gap-3">
                            <i className="bi bi-check-circle-fill"></i>
                            <p>{m}</p>
                        </ParallaxRight>
                    ))
                }
            </div>
        </section>

        <section className="center gap-[5vh] mt-[9vh] relative w-full min-h -[70vh] overflow-hidden">
                <div className="absolute top-0 left-50 w-full h-full bg-[rgba(0,0,0)] center">
                    <img src={LegalFrameWorks[companyIndex].img} alt="World map as Backgorund Image of the section" className="z-0 w-4/12 opacity-30"/>
                </div>

                <div className="w-11/12 lg:w-10/12 flex items-center justify-start text-white my-[13vh]">
                    <div className="w-full flex flex-col gap-8">
                        <div className="w-full relative">
                            <div className="absolute -bottom-2 left-0 center h-[35px]">
                                <Parallax id={'legalline'} clas={'center bg-orange w-32 /12 h-3 rounded-full'}>
                                </Parallax>
                            </div>
                            <Parallax id={'legaltext'}>
                                <h2 className='text-4xl lg:text-5xl font-bold my-9'>
                                    Legal Framework
                                </h2>
                            </Parallax>
                        </div>
                            {
                                LegalFrameWorks[companyIndex].desc.map((d, i) => (
                                    <ParallaxRight id={d[0]+d[1]+d[2]} clas={'flex flex-col mb-3 w-full lg:w-9/12'}>
                                        <p key={i} className="tracking-wide leading-relaxed">{d}</p>
                                    </ParallaxRight>

                                ))
                            }
                    </div>

                </div>
            </section>


        {/* <ImageAndText 
            title={'Legal Framework'}
            desc={LegalFrameWorks[companyIndex].desc}
            img={LegalFrameWorks[companyIndex].img}

            icon={'chevron-right' }
            iconText={companyIndex == 2 ? 'Learn More': 'Get started'}
            navigateTo={companyIndex == 2 ? '/Products' : '/Contact'}
        /> */}

        </div>
    )
}


export default Company