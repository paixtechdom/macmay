import { Parallax } from "./Parallax"

export const Card = ({children, data, id}) => {
    return(
        <Parallax id={id ? id : data.title}>

            <div className="flex h-fit justify-start items-center bg-white flex-col rounded-xl overflow-hidden shadow-xl">
                
                <div className="overflow-hidden flex items-start justify-between h-full lg:h-[50vh]">
                    <img src={data.img} alt={data.title + "'s Image"} className='w-fit h-fit'/>
                </div>


                {children}
            </div>
        </Parallax>

    )
}