import { useContext, useEffect } from 'react'
import { BreadCrumbs } from '../../Components/BreadCrumbs'
import { Card } from '../../Components/Card'
import { ImageAndText } from '../../Components/ImageAndText'
import { PagesHero } from '../../Components/PagesHero'
import { Title } from '../../Components/Title'
import { AppContext } from '../../App'
import { Button } from '../../Components/Buttons'
import { LogoFoods, ProductsList } from '../../assets/Constant'
import img from '../../assets/images/IMG_20231017_051604_314.jpg'

const shortenWord = (word) => {
    const newword = word.slice(0, 50)
    return newword+'...';
}

const Products = () => {
    const { setCurrentNav, setLogo } = useContext(AppContext)

    useEffect(() => {
        document.documentElement.scrollTop = 0
        setLogo(LogoFoods)
        setCurrentNav(3)
    }, [])

    return(
        <main className="w-full center flex-col gap-9 py-[10vh]">

            <PagesHero 
                id={'testing'}
                title={'Our Products from Macmay'}
                img={img}
                desc={['We are aimed to provide a market store where people can shop for products within the comfort of their home, all of these will pose us a better service from Sales to Marketing to delivery.', 'Our product line consists of spices, spreads, sauces, food flour, fruit juices and complementary food that excites and satisfy institutional, commercial and retail customers and more.', 'We are majorly keen on major product distribution, packaging and repackaging.']}
                iconText={'Read more'}
                icon={'arrow-down'}
            />

            <BreadCrumbs links={['Home', 'Products']}/>


            <div className="w-11/12 lg:w-10/12 flex flex-col gap-[5vh] mb-[10vh]">
                <Title text={'OUR Products'}/>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
                    {
                        ProductsList.map((p, i) => (
                            <div className="flex h-fit justify-start items-center bg-white flex-col rounded-xl overflow-hidden shadow-xl">
                                
                                <div className="overflow-hidden flex items-start justify-between h-full md:h-[40vh] lg:h-[30vh]">
                                    <img src={p.img} alt={p.title + "'s Image"} className='w-fit h-fit'/>
                                </div>


                                <div className="flex flex-col py-8 lg:py-3 w-11/12 items-start  text-blue justify-center">
                                        <p className="text w-full font-bold">
                                            {p.title}
                                        </p>
                                        {/* <p className='trun cate  my-2'>{shortenWord(p.desc)}</p>
                                        <Button text={'read more'} className={'py-2 gp-3 border-0 rounded-none w-full my-2'} icon={'chevron-right'} color={'blue'}/> */}
                                    </div>
                            </div>                            
                        ))
                    }
                </div>

            </div>

            <ImageAndText 
                id={'testing'}
                title={'This or that header'}
                img={img}
                desc={['At Macmay Multifarious Company Limited, we provide high-quality food products sourced from top suppliers and processed using advanced technology to ensure quality and safety.', ' We innovate and expand our product line to cater to changing tastes and preferences, with a focus on customer satisfaction. Our food products meet your expectations and provide a satisfying experience.']}
                // fruits
                iconText={'Read more'}
                icon={'chevron-right'}
            />

        </main>
    )
}

export default Products