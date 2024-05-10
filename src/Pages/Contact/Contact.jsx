import { useContext, useEffect } from "react"
import { ContactForm } from "./ContactForm"
import { AppContext } from "../../App"
import { ContactInfo, LogoGroup, NavInfo } from "../../assets/Constant"
import { PagesHero } from "../../Components/PagesHero"
import img from '../../assets/images/planet-capital-contact-us.jpg'
import { BreadCrumbs } from "../../Components/BreadCrumbs"
import { Get } from "../Home/Get"
import { Title } from "../../Components/Title"
import { Parallax, ParallaxRight } from "../../Components/Parallax"


const Contact = () => {
    const { setCurrentNav, setLogo } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(NavInfo.length - 1)
        setLogo(LogoGroup)
        document.documentElement.scrollTop = 0
    }, [])

    const ContactInfo = [
        {
            title: 'No. 85, Orhuvworun Road, Opposite Visa Junction; Udu Delta State, Nigeria',
            icon: 'geo-alt-fill',
            link: ''
        },           
        {
            title: '+234 916 124 7130',
            icon: 'telephone-fill',
            link: 'tel:+2349161247130'
        },
        {
            title: 'cec@macmaygroupofcompany.com',
            icon: 'envelope-fill',
            link: 'mailto:cec@macmaygroupofcompany.com'
        },
        {
            icon: 'whatsapp',
            link: 'https://api.whatsapp.com/send?phone=2348111779288'
        },
    ]
    const ContactInfoAsaba = [
        {
            title: 'Along Opkanam Road By Post Office Junction; Asaba Delta State, Nigeria.',
            icon: 'geo-alt-fill',
            link: ''
        },
        {
            title: '+234 916 124 7130',
            icon: 'telephone-fill',
            link: 'tel:+2349161247130'
        },
        {
            title: 'cec@macmaygroupofcompany.com',
            icon: 'envelope-fill',
            link: 'mailto:cec@macmaygroupofcompany.com'
        },
        {
            icon: 'whatsapp',
            link: 'https://api.whatsapp.com/send?phone=2348111779288'
        },
    
    ]
    const ContactFood = [
        {
            title: 'Sephen Central Plaza; Main-Market, Warri, Delta State, Nigeria.',
            icon: 'geo-alt-fill',
            link: ''
        },
        {
            title: '+234 916 124 7130',
            icon: 'telephone-fill',
            link: 'tel:+2349161247130'
        },
        {
            title: 'farmscontact@macmaygroupofcompany.com',
            icon: 'envelope-fill',
            link: 'mailto:farmscontact@macmaygroupofcompany.com'
        },
        {
            title: 'mfacinfo@macmaygroupofcompany.com',
            icon: 'envelope-fill',
            link: 'mailto:mfacinfo@macmaygroupofcompany.com'
        },
        {
            icon: 'whatsapp',
            link: 'https://api.whatsapp.com/send?phone=2349161247130 '
        },
    
    ]

    
    return(
        <main className="center flex-col gap-9 w-full">
            <PagesHero 
                id={'testing'}
                title={'Contact Macmay Group'}
                img={img}
                desc={['', '']}
                iconText={'Get started'}
                icon={'arrow-down'}
                scrollTo={'contactform'}
            />
            <BreadCrumbs links={['Home', 'Contact']}/>
            
            <ContactForm />

            <div className="w-11/12 my-[10vh] lg:w-10/12 flex flex-col gap-[50px]">
                <Title text={'Contact Our Oficces'} />
                <div className="w-full flex flex-col items-start gap-[50px] grid lg:grid-cols-2">
                    <Contacts data={ContactInfo} title={'Mcmay Multifarious Company LTD-Warri, Delta State Office'}/>
                    <Contacts data={ContactInfoAsaba} title={'Mcmay Multifarious Company LTD-Asaba, Delta State Office'}/>
                    <Contacts data={ContactFood} title={'Mcmay Farms and Ago Company LTD-  VIS MFAC Foods LTD'}/>

                </div>
            </div>

        </main>
    )
}


const Contacts = ({title, data}) => {
    return(
        <div className="flex flex-col flex-wrap gap-1 w-full">
            <Parallax id={title}>
                <h3 className="font-bold flex flex-wrap text-blue text-xl tracking-wide leading-relaxed">{title}</h3>

            </Parallax>
            <div className="flex w-full gap-7 text-xl text-blue">
                {
                    data.map((nav, i) =>(
                        i !== 0 &&
                        <a href={nav.link} key={i}>
                            <i className={`bi bi-${nav.icon}`}></i>
                        </a> 
                    
                    ))
                }
            </div>
            {
                data.map((nav, i) =>(
                    nav.title &&         
                    <ParallaxRight key={i} id={title+nav.icon}>
                        <a href={nav.link} key={i} className="text-blue flex-col md:flex-row flex gap-3 w-full justify-start">
                            <i className={`bi bi-${nav.icon}`}></i>
                            {nav.title}
                        </a>
                    </ParallaxRight>                   
                    
                ))
            }
        </div>
    )
}
export default Contact