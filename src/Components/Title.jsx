import { Parallax, ParallaxRight } from "./Parallax"

export const Title = ({text}) => {
    return(
        <div className="w-full relative">
            <div className="absolute w-full -bottom-2 left-0 center h-[50px] ">
                <Parallax id={text+'line'} clas={'w-full center bg-orange w-32 h-5 rounded-full'}>
                </Parallax>
                    {/* <div className="">
                    </div> */}
            </div>
            <Parallax id={text}>
                <h2 className='text-5xl font-bold text-center text-green m-9'>
                    {text.toUpperCase()}
                </h2>
            </Parallax>
        </div>
    )
}