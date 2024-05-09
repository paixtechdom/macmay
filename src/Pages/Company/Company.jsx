import { PagesHero } from "../../Components/PagesHero"
import { HeroContent, LegalFrameWorks, LogoFarms, LogoFoods, LogoGroup, LogoMultifarious, Missions, Objectives, ScopeOfService, Visions } from "../../assets/Constant"
import { Get } from "../Home/Get"
import { BreadCrumbs } from "../../Components/BreadCrumbs"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../App"
import { ImageAndText } from "../../Components/ImageAndText"
import img from '../../assets/images/IMG_20231017_051604_314.jpg'
import { Title } from "../../Components/Title"



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
    })
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
        <div className="center  pt-[10vh] flex-col gap-9">
            <PagesHero 
                id={'testing'}
                title={Visions[companyIndex].title}
                img={HeroContent[companyIndex + 1].img}
                desc={[HeroContent[companyIndex + 1].desc]}
                iconText={'Read more'}
                icon={'arrow-down'}
            />

        <BreadCrumbs links={['Home', Visions[companyIndex].title]}/>
        <Get data={filteredVision} title={['Our', 'Vision']}/>
        <ImageAndText 
            title={'Scope Of Service'}
            desc={ScopeOfService[companyIndex].desc}
            img={ScopeOfService[companyIndex].img}
            icon={'chevron-down'}
            iconText={'Learn More'}
        />
        <Get data={filteredMission} title={['Our', 'Mission']}/>
        <section className="w-11/12 lg:w-10/12 flex flex-col my-[10vh] gap-[5vh]">
            <Title text={'Our Objectives '} />
            <div className="flex flex-col gap-4 text-blue" >
                {
                    Objectives[companyIndex].list.map((m, i) => (
                        <div className="flex gap-3">
                            <i className="bi bi-check-circle-fill"></i>
                            <p>{m}</p>
                        </div>
                    ))
                }
            </div>
        </section>
        <ImageAndText 
            title={'Legal Framework'}
            desc={LegalFrameWorks[companyIndex].desc}
            img={LegalFrameWorks[companyIndex].img}
            icon={'chevron-down'}
            iconText={'Learn More'}
        />

        </div>
    )
}


export default Company