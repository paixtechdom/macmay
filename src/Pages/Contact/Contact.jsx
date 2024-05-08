import { useContext, useEffect } from "react"
import { ContactForm } from "./ContactForm"
import { AppContext } from "../../App"
import { NavInfo } from "../../assets/Constant"
import { PagesHero } from "../../Components/PagesHero"
import img from '../../assets/images/planet-capital-contact-us.jpg'
import { BreadCrumbs } from "../../Components/BreadCrumbs"
import { Get } from "../Home/Get"


const Contact = () => {
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(NavInfo.length - 1)
    }, [])

    return(
        <main className="center pt-[10vh] flex-col gap-9 w-full pt-[15vh]">
            <PagesHero 
                id={'testing'}
                title={'Contact Macmay Group'}
                img={img}
                desc={['Lorem ipi vel quibusdam enim reiciendis quos soluta a distinctio, magnam sit architecto nesciunt reprehenderit at quidem tempore neque natus harum blanditiis commodi.', 'Lorit at quidem tempore neque natus harum blanditiis commodi.']}
                iconText={'Get started'}
                icon={'arrow-down'}
            />
            <BreadCrumbs links={['Home', 'Contact']}/>

            <ContactForm />
        </main>
    )
}


export default Contact