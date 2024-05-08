import { useContext, useEffect } from 'react'
import { Card } from '../../Components/Card'
import { Title } from '../../Components/Title'
import img3 from '../../assets/images/IMG_20231017_050251_923.jpg'
import img2 from '../../assets/images/IMG_20231017_051342_945.jpg'
import img from '../../assets/images/IMG_20231017_051604_314.jpg'
import { AppContext } from '../../App'
import { ImageAndText } from '../../Components/ImageAndText'
import { PagesHero } from '../../Components/PagesHero'
import { BreadCrumbs } from '../../Components/BreadCrumbs'


const About = () => {
    const Leaders = [
        {
            title: 'Lorem',
            img: img
        },
        {
            title: 'Lorem',
            img: img2
        },
        {
            title: 'Lorem',
            img: img3
        },
        {
            title: 'Lorem',
            img: img
        },
        {
            title: 'Lorem',
            img: img2
        },
        {
            title: 'Lorem',
            img: img3
        },
        {
            title: 'Lorem',
            img: img
        },
    ]
    const { setCurrentNav } = useContext(AppContext)

    useEffect(() => {
        setCurrentNav(1)
    }, [])

    return(
        <div className="center pt-[10vh] flex-col gap-9">

            <PagesHero 
                id={'testing'}
                title={'About Macmay Group'}
                img={img}
                desc={['Lorem ipi vel quibusdam enim reiciendis quos soluta a distinctio, magnam sit architecto nesciunt reprehenderit at quidem tempore neque natus harum blanditiis commodi.', 'Lorit at quidem tempore neque natus harum blanditiis commodi.']}
                iconText={'Read more'}
                icon={'arrow-down'}
            />
            <BreadCrumbs links={['Home', 'About']}/>
            <ImageAndText 
                id={'testing'}
                title={'Our Vision'}
                img={img}
                desc={['Lorem ipi vel quibusdam enim reiciendis quos soluta a distinctio, magnam sit architecto nesciunt reprehenderit at quidem tempore neque natus harum blanditiis commodi.', 'Lorit at quidem tempore neque natus harum blanditiis commodi.']}
                iconText={'Read more'}
                icon={'arrow-down'}
            />
           <div className="w-11/12 lg:w-10/12 flex flex-col my-[10vh] gap-[5vh]">
                <Title text={'OUR LEADERS'} />
                <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-9 md:gap-3 xl:gap-9">
                    {
                        Leaders.map((p, i) => (
                            <Card key={i} data={p}  children={
                            <div className="flex text-center h-[10vh] justify-center text-blue flex-col w-full">
                                <h4 className='text-xl font-bold'>{p.title}</h4>
                                <p>DR. Tiamiyu Collins</p>
                            </div>
                        }/>
                            
                        ))
                    }
                </div>

            </div>
            <ImageAndText 
                id={'testing'}
                title={'Our Mission'}
                img={img}
                desc={['Lorem ipi vel quibusdam enim reiciendis quos soluta a distinctio, magnam sit architecto nesciunt reprehenderit at quidem tempore neque natus harum blanditiis commodi.', 'Lorit at quidem tempore neque natus harum blanditiis commodi.']}
                iconText={'Read more'}
                icon={'arrow-down'}
            />
        </div>
    )
}


export default About