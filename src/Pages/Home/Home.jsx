import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { useNavigate } from 'react-router-dom'
import { Hero } from "./Hero";
import img from '../../assets/images/IMG_20231017_051604_314.jpg'
import img2 from '../../assets/images/IMG_20231017_051342_945.jpg'
import img3 from '../../assets/images/IMG_20231017_050251_923.jpg'
import farm from '../../assets/images/pexels-math-21393.jpg'
import savings from '../../assets/images/savings.jpg'

import worldmap from '../../assets/images/world-map.png'

import { ImageAndText } from "../../Components/ImageAndText";
import { Get } from "./Get";
import { FAQs, LogoGroup, ProductsList, Values } from "../../assets/Constant";
import { Title } from "../../Components/Title";
import { Card } from "../../Components/Card";
import { Button } from "../../Components/Buttons";
import { ProductsListComponent } from "../Products/ProductsListComponent";

const shortenWord = (word) => {
    const newword = word.slice(0, 50)
    return newword+'...';
}

const Home = () => {
    const { setCurrentDropDown, setCurrentNav, setLogo } = useContext(AppContext)
    const navigate = useNavigate()
    useEffect(() => {
        setCurrentDropDown('')
        setCurrentNav(0)
        document.documentElement.scrollTop = 0
        setLogo(LogoGroup)
    }, [])
    return(
        <main className="center flex-col min-h-screen z-10 w-full gap-9">
            <Hero />
            <section id="whymacmay" className="center gap-[5vh] mt-[9vh] relative w-full min-h -[70vh] overflow-hidden">
                <div className="absolute top-0 left-50 w-full h-full bg-[rgba(0,0,0)] ">
                    <img src={worldmap} alt="World map as Backgorund Image of the section" className="z-0 w-full"/>
                </div>

                <div className="w-11/12 lg:w-10/12 flex items-center justify-start text-white my-[13vh]">
                    <div className="full flex flex-col lg:w-6/12 z-10 gap-8">
                        <h2 className="text-xl text-white gray-200">WHY CHOOSE MACMAY?</h2>
                        <h3 className="text-4xl font-bold text-white">We don't just help you reach financial milestones, we build lasting relationships.</h3>
                        <p className="tracking-wide leading-relaxed">At Macmay Multifarious Company Limited And Affiliates, we apply world class best practices to deliver quality services and products to our principals and clients. The key attractive distinguishing uniqueness of Macmay is that its promoters have a repertoire of relevant experience with professional qualifications to sustain the going concern considering that the Company has created diverse means of income sources to sustain the business of the 21st century.</p>
                    </div>

                </div>
            </section>


            <ImageAndText 
                id={'testing'}
                title={'Macmay Multifarious Company Limited'}
                img={savings}
                desc={['We are a savings and fund management company based in Nigeria. Our Company was born out of the burning desires to provide a platform that stimulates, inspires and encourages a profitable savings culture.']}
                iconText={'Read more'}
                icon={'chevron-right'}
                navigateTo={'/Companies/Macmay-Multifarious'}
                />
            <Get data={Values} title={['Our', 'Values']}/>

            <ImageAndText 
                id={'trying'}
                title={'Macmay Farms And Agro Company LTD '}
                img={farm}
                desc={['This is an agricultural company that is based in Nigeria. The Company was formed out of a burning desire to enhance the Agro and Agriculture Related Sector, from the Affiliate Company (Macmay Multifarious Company LTD); to render Agricultural and other Agro Services to people']}
                iconText={'read more'}
                icon={'chevron-right'}
                navigateTo={'/Companies/Macmay-Farms'}
                />    

            <section className="w-11/12 lg:w-10/12 flex flex-col gap-[5vh] my-[9vh]">
                <Title text={'OUR Products'}/>


                <ProductsListComponent data={ProductsList.filter((p, i) => i < 4)}/>


                <div className="center">
                    <Button type={'primary'} text={'SEE ALL'} icon={'chevron-right'} className={'w-fit px-[150px]'} color={'white'} func={() => {
                        navigate('/Products')
                    }}/>
                </div>

            </section>
            <ImageAndText 
                id={'tryingsnd'}
                title={'MFAC Foods Ltd'}
                img={img3}
                desc={['This is an indigenous Nigerian company established on March 15th, 2021 for the purpose of enhanced food processing, and non-agricultural food production/distribution across the globe. We are engaged with the business of manufacturing nutritious and tasty food made from the best of West Africa’s fruits, herbs, vegetables, and other agricultural produce. ']}
                iconText={'Read more'}
                icon={'chevron-right'}
                navigateTo={'/Companies/Macmay-Foods'}
            />
            <Get data={FAQs} title={['Frequently', 'Asked', 'Questions', '(FAQs)']}/>            
        </main>
    )
}


export default Home;