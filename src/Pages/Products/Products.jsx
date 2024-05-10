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
import pap from '../../assets/images/IMG_20231017_051342_945.jpg'
import { ProductsListComponent } from './ProductsListComponent'

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
        <main className="w-full center flex-col gap-9">

            <PagesHero 
                id={'testing'}
                title={'Our Products from Macmay'}
                img={img}
                desc={['Our product line consists of spices, spreads, sauces, food flour, fruit juices and complementary food that excites and satisfy institutional, commercial and retail customers and more.', 'We are majorly keen on major product distribution, packaging and repackaging.']}
                iconText={'Read more'}
                icon={'arrow-down'}
                scrollTo={'productslist'}
            />

            <BreadCrumbs links={['Home', 'Products']}/>


            <div id='productslist' className="w-11/12 lg:w-10/12 flex flex-col gap-[5vh] mb-[10vh]">
                <Title text={'OUR Products'}/>


                <ProductsListComponent data={ProductsList}/>

            </div>

            <ImageAndText 
                id={'testing'}
                title={'We are the best in the industry'}
                img={pap}
                desc={['At Macmay Multifarious Company Limited, we provide high-quality food products sourced from top suppliers and processed using advanced technology to ensure quality and safety.', ' We innovate and expand our product line to cater to changing tastes and preferences, with a focus on customer satisfaction. Our food products meet your expectations and provide a satisfying experience.']}
                // fruits
                iconText={'Get started'}
                icon={'chevron-right'}
                navigateTo={'/Contact'}
            />

        </main>
    )
}

export default Products