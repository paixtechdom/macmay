import { Link } from "react-router-dom"

export const BreadCrumbs = ({links}) => {
    return(
        <section className="w-full center">

            <div className="bor der border- blue w-11/12 lg:w-10/12 xl:w-9/12 flex justify-start items-center p-3 pl-[20px] rounded-full mb-[10vh] flex-wrap shadow-xl">
                {
                    links.map((link, i) => (
                        i == 0 ?
                        <Link key={i} to={`/`} className="text-sm text-blue">
                            {link}
                            <i className={`bi bi-chevron-right mx-2`}></i>
                        </Link>  :
                        <div key={i} className="text-blue font-bold text-xl cursor-pointer">
                            {link}
                        </div> 
                    ))
                }
            </div>
        </section>
    )
}