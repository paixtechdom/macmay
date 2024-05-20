import { useContext, useEffect } from 'react'
import { Card } from '../../Components/Card'
import { Title } from '../../Components/Title'
import story from '../../assets/images/story.png'
import abouthero from '../../assets/images/abouthero.jpg'
import { AppContext } from '../../App'
import { ImageAndText } from '../../Components/ImageAndText'
import { PagesHero } from '../../Components/PagesHero'
import { BreadCrumbs } from '../../Components/BreadCrumbs'
import { Parallax, ParallaxRight } from '../../Components/Parallax'
import { Get } from '../Home/Get'
import { ServicesList, Visions, Missions, LeadersList, LogoGroup, Logo } from '../../assets/Constant'


const About = () => {

    const { setCurrentNav, setLogo } = useContext(AppContext)

    useEffect(() => {
        setCurrentNav(1)
        document.documentElement.scrollTop = 0
        setLogo(LogoGroup)
    }, [])
    const story = [
        "The Company was incorporated in Nigeria under the Companies And Allied Matters Act of 1990 firstly as an enterprise on January 4th, 2019,  established on 2nd December, 2018. On November 16th, 2020 it was incorporated as a limited Company.",
        "Macmay Multifarious Company Limited has birthed other affiliates which are: Macmay Farms And Agro Company Ltd incorporated on the 26th Of March, 2021 established on the 15th of October, 2020 and MFAC Foods Limited which was incorporated on the 25th Of May, 2021 and established on the 15th day of March, 2021."
    ]
    return(
        <div className="center flex-col gap-9">

            <PagesHero 
                id={'abouthero'}
                title={'About Macmay Group'}
                img={abouthero}
                desc={['Macmay Group is made up of Macmay Multifarious Company limited, Macmay Farms And Agro Company Ltd, MFAC Foods Ltd and an Enterprise, Macmay Innovative Resources.']}
                iconText={'Read more'}
                icon={'arrow-down'}
                scrollTo={'Services'}
            />
            <BreadCrumbs links={['Home', 'About']}/>
            <Get data={ServicesList} title={['Our', 'Services']}/>

           <section className="w-11/12 lg:w-10/12 flex flex-col my-[10vh] gap-[5vh]">
                <Title text={'BOARD OF DIRECTORS'} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 xl:gap-9">
                    {
                        LeadersList.map((p, i) => (
                            <Card key={i} data={p} id={p.name}  
                                children={
                                    <div className="flex text -center lg:h- [10vh] justify-center text-blue flex-col w-11/12 py-5 ">
                                    <p className='text-sm'>{p.name}</p>
                                    <h4 className='font-bold tracking-wide leading-relaxed'>{p.title}</h4>
                                </div>
                            }
                        />
                            
                        ))
                    }
                </div>

            </section>

            <Get data={Visions} title={['Our', 'Vision']}/>


            <section className="center gap-[5vh] mt-[9vh] relative w-full min-h -[70vh] overflow-hidden">
                <div className="absolute top-0 left-50 w-full h-full bg-[rgba(0,0,0)] center">
                    <img src={Logo} alt="Macmay logo" className="z-0 w-4/12 opacity-30"/>
                </div>

                <div className="w-11/12 lg:w-10/12 flex items-center justify-start text-white my-[13vh]">
                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full relative mb-6">
                            <div className="absolute -bottom-2 left-0 center h-[35px]">
                                <Parallax id={'legalline'} clas={'center bg-orange w-32 /12 h-3 rounded-full'}>
                                </Parallax>
                            </div>
                            <Parallax id={'legaltext'}>
                                <h2 className='text-4xl lg:text-5xl font-bold my-9'>
                                    Our Story
                                </h2>
                            </Parallax>
                        </div>
                            {
                                story.map((s, i) => (
                                    <ParallaxRight id={s[0]+s[1]+s[2]} clas={'flex flex-col mb-2 w-full lg:w-9/12'}>
                                        <p key={i} className="tracking-wide leading-relaxed">{s}</p>
                                    </ParallaxRight>

                                ))
                            }
                    </div>

                </div>
            </section>


            <Get data={Missions} title={['Our', 'Mission']}/>
        </div>
    )
}


export default About