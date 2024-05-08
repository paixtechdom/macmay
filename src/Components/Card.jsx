import { Parallax } from "./Parallax"

export const Card = ({children, data}) => {
    return(
        <Parallax id={data.title}>

            <div className="flex center bg-white flex-col rounded-xl overflow-hidden md:h-[40vh] shadow-xl">
                
                <img src={data.img} alt={data.title + "'s Image"} className='w-full md:h-[30vh]'/>
                {children}
            </div>
        </Parallax>

    )
}