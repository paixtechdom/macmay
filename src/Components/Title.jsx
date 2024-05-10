import { Parallax, ParallaxRight } from "./Parallax"

export const Title = ({text}) => {
    return(
        <div className="w-full relative">
            <div className="absolute w-full -bottom-2 left-0 center h-[35px]">
                <Parallax id={text+'line'} clas={'center bg-orange w-32 /12 h-3 rounded-full'}>
                </Parallax>
            </div>
            <Parallax id={text}>
                <h2 className='text-4xl lg:text-5xl font-bold text-center text-green m-9'>
                    {text.toUpperCase()}
                </h2>
            </Parallax>
        </div>
    )
}