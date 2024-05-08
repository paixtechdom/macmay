import { useContext, useEffect } from 'react'
import { BreadCrumbs } from '../../Components/BreadCrumbs'
import { Card } from '../../Components/Card'
import { ImageAndText } from '../../Components/ImageAndText'
import { PagesHero } from '../../Components/PagesHero'
import { Title } from '../../Components/Title'
import img3 from '../../assets/images/IMG_20231017_050251_923.jpg'
import img2 from '../../assets/images/IMG_20231017_051342_945.jpg'
import img from '../../assets/images/IMG_20231017_051604_314.jpg'
import { AppContext } from '../../App'


const Products = () => {
    const { setCurrentNav } = useContext(AppContext)


    const ProductsList= [
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

    useEffect(() => {
        setCurrentNav(3)
    }, [])

    return(
        <main className="w-full center flex-col gap-9 py-[10vh]">

            <PagesHero 
                id={'testing'}
                title={'Our Products from Macmay'}
                img={img}
                desc={['Lorem ipi vel quibusdam enim reiciendis quos soluta a distinctio, magnam sit architecto nesciunt reprehenderit at quidem tempore neque natus harum blanditiis commodi.', 'Lorit at quidem tempore neque natus harum blanditiis commodi.']}
                iconText={'Read more'}
                icon={'arrow-down'}
            />

            <BreadCrumbs links={['Home', 'Products']}/>


            <div className="w-11/12 lg:w-10/12 flex flex-col gap-[5vh]">
                <Title text={'OUR Products'}/>


                <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-9 md:gap-3 xl:gap-9">
                    {
                        ProductsList.map((p, i) => (
                            <Card key={i} data={p}  children={<div className="flex h-[10vh] text-center items-center text-blue">{p.title}</div>}/>
                            
                        ))
                    }
                </div>

            </div>

            <ImageAndText 
                id={'testing'}
                title={'This or that header'}
                img={img}
                desc={['Lorem ipi vel quibusdam enim reiciendis quos soluta a distinctio, magnam sit architecto nesciunt reprehenderit at quidem tempore neque natus harum blanditiis commodi.', 'Lorit at quidem tempore neque natus harum blanditiis commodi.']}
                iconText={'Read more'}
                icon={'arrow-down'}
            />

        </main>
    )
}

export default Products