import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { Hero } from "./Hero";
import img from '../../assets/images/IMG_20231017_051604_314.jpg'
import img2 from '../../assets/images/IMG_20231017_051342_945.jpg'
import img3 from '../../assets/images/IMG_20231017_050251_923.jpg'
import { ImageAndText } from "../../Components/ImageAndText";
import { Get } from "./Get";
import { Products } from "../Products/Products";

const Home = () => {
    const { setCurrentDropDown } = useContext(AppContext)
    useEffect(() => {
        setCurrentDropDown('')
    }, [])
    return(
        <main className="flex flex-col min-h-screen z-10 w-full gap-9">
            <div className="h-[15vh] w-full"></div>
            <Products />
            <Hero />
            <ImageAndText 
                id={'testing'}
                title={'This and That Title'}
                img={img}
                desc={['Lorem ipi vel quibusdam enim reiciendis quos soluta a distinctio, magnam sit architecto nesciunt reprehenderit at quidem tempore neque natus harum blanditiis commodi.', 'Lorit at quidem tempore neque natus harum blanditiis commodi.']}
                iconText={'Read more'}
                icon={'arrow-down'}
                bg={'green'}
            />
            <Get />
           

            <ImageAndText 
                id={'trying'}
                title={'This and That Title'}
                img={img2}
                desc={['Lorem ipi vel quibusdam enim reiciendis quos soluta a distinctio, magnam sit architecto nesciunt reprehenderit at quidem tempore neque natus harum blanditiis commodi.', 'Lorit at quidem tempore neque natus harum blanditiis commodi.']}
                iconText={'Read more'}
                icon={'arrow-down'}
                bg={'orange'}
            />
            <ImageAndText 
                id={'tryingsnd'}
                title={'This and That Title'}
                img={img3}
                desc={['Lorem ipi vel quibusdam enim reiciendis quos soluta a distinctio, magnam sit architecto nesciunt reprehenderit at quidem tempore neque natus harum blanditiis commodi.', 'Lorit at quidem tempore neque natus harum blanditiis commodi.']}
                iconText={'Read more'}
                icon={'arrow-down'}
                bg={'blue'}
            />

            
            
        </main>
    )
}


export default Home;