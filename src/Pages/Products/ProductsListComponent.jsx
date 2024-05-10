export const ProductsListComponent = ({data}) => {
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
            {
                data.map((p, i) => (
                    <div key={i} className="flex h-fit justify-start items-center bg-white flex-col rounded-xl overflow-hidden shadow-xl">
                        
                        <div className="overflow-hidden flex items-start justify-between h-full md:h-[40vh] lg:h-[30vh]">
                            <img src={p.img} alt={p.title + "'s Image"} className='w-fit h-fit'/>
                        </div>


                        <div className="flex flex-col py-4 md:py-6 lg:py-3 w-11/12 items-start  text-blue justify-center">
                                <p className="text w-full font-bold">
                                    {p.title}
                                </p>
                                {/* <p className='trun cate  my-2'>{shortenWord(p.desc)}</p>
                                <Button text={'read more'} className={'py-2 gp-3 border-0 rounded-none w-full my-2'} icon={'chevron-right'} color={'blue'}/> */}
                            </div>
                    </div>                            
                ))
            }
        </div>
    )
}