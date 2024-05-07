import img3 from '../../assets/images/IMG_20231017_050251_923.jpg'
import img2 from '../../assets/images/IMG_20231017_051342_945.jpg'
import img from '../../assets/images/IMG_20231017_051604_314.jpg'


export const Products = () => {
    const ProductsList= [
        {
            title: 'Lorem',
            img: img
        },
        {
            title: 'Lorem',
            img: img2
        },
        {
            title: 'Lorem',
            img: img3
        },
        {
            title: 'Lorem',
            img: img
        },
        {
            title: 'Lorem',
            img: img2
        },
        {
            title: 'Lorem',
            img: img3
        },
        {
            title: 'Lorem',
            img: img
        },
    ]

    return(
        <section className="w-full center py-[10vh]">
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-[5vh]">
                <div className="w-full relative">
                    <div className="absolute w-full bottom-0 left-0 center h-[50px] ">
                        <div className="w-full center border-b-2 border-blue w-[150px]">
                        </div>
                    </div>
                    <h2 className='text-3xl font-bold text-center text-green m-9'>
                        OUR PRODUCTS
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-9 md:gap-3 xl:gap-9">
                    {
                        ProductsList.map((p, i) => (
                            <div key={i} className="flex center bg-white flex-col rounded-xl overflow-hidden md:h-[40vh] shadow-xl">
                                <img src={p.img} alt={p.title + "'s Image"} className='w-full md:h-[30vh]'/>
                                <div className="flex h-[10vh] text-center items-center text-blue">{p.title}</div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}