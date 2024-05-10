import { useContext, useEffect } from 'react'
import { Card } from '../../Components/Card'
import { Title } from '../../Components/Title'
import story from '../../assets/images/story.png'
import abouthero from '../../assets/images/abouthero.png'
import { AppContext } from '../../App'
import { ImageAndText } from '../../Components/ImageAndText'
import { PagesHero } from '../../Components/PagesHero'
import { BreadCrumbs } from '../../Components/BreadCrumbs'
import { Parallax, ParallaxRight } from '../../Components/Parallax'
import { Get } from '../Home/Get'
import { ServicesList, Visions, Missions, LeadersList, LogoGroup } from '../../assets/Constant'


const About = () => {

    const { setCurrentNav, setLogo } = useContext(AppContext)

    useEffect(() => {
        setCurrentNav(1)
        document.documentElement.scrollTop = 0
        setLogo(LogoGroup)
    }, [])

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
                <Title text={'OUR LEADERS'} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 xl:gap-9">
                    {
                        LeadersList.map((p, i) => (
                            <Card key={i} data={p} id={p.name}  
                                children={
                                    <div className="flex text -center lg:h- [10vh] justify-center text-blue flex-col w-11/12 py-5 ">
                                    <p>{p.name}</p>
                                    <h4 className='text-xl font-bold'>{p.title}</h4>
                                </div>
                            }
                        />
                            
                        ))
                    }
                </div>

            </section>
            <Get data={Visions} title={['Our', 'Vision']}/>

            <ImageAndText 
                id={'testing'}
                title={'Our Story'}
                img={story}
                desc={['The Company was incorporated in Nigeria under the Companies And Allied Matters Act of 1990 firstly as an enterprise on January 4th, 2019,  established on 2nd December, 2018. On November 16th, 2020 it was incorporated as a limited Company.', ' Macmay Multifarious Company Limited has birthed other affiliates which are: Macmay Farms And Agro Company Ltd incorporated on the 26th Of March, 2021 established on the 15th of October, 2020 and MFAC Foods Limited which was incorporated on the 25th Of May, 2021 and established on the 15th day of March, 2021.']}
                iconText={'Read more'}
                icon={'arrow-down'}
                scrollTo={'Mission'}
            />
            <Get data={Missions} title={['Our', 'Mission']}/>
        </div>
    )
}


export default About