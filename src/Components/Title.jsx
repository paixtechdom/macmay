export const Title = ({text}) => {
    return(
        <div className="w-full relative">
            <div className="absolute w-full bottom-0 left-0 center h-[50px] ">
                <div className="w-full center border-b-2 border-orange w-32">
                </div>
            </div>
            <h2 className='text-5xl font-bold text-center text-green m-9'>
                {text.toUpperCase()}
            </h2>
        </div>
    )
}