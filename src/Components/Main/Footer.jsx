import { Link } from "react-router-dom";
import { ContactInfo, NavInfo } from "../../assets/Constant";

const Footer = () => {
    return(
        <div className="center w-full min-h-[70vh] bg-blue-fade">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 lg:w-10/12 tracking-wide leading-relaxed gap-9 text-blue">
                <div className="flex flex-col gap-3 cols-span-2">
                    <h3 className="font-bold text-blue text-3xl tracking-wide leading-relaxed">Macmay Group</h3>
                    <p className="text-blue tracking-wide leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste hic, accusantium nulla, rerum ipsum voluptas aperiam repellat provident quis, consequatur inventore aliquid quibusdam consectetur repellendus atque eveniet! Minus, quisquam nemo.</p>
                </div>
                <nav className="flex flex-col gap-3 md:items-end lg:items-center">
                    <h3 className="font-bold text-blue text-3xl tracking-wide leading-relaxed">Navigation</h3>
                    {
                        NavInfo.map((nav, i) =>(
                            <Link key={i}>{nav.title}</Link>
                        ))
                    }
                </nav>
                <nav className="flex flex-col gap-3 lg:items-end">
                    <h3 className="font-bold text-blue text-3xl tracking-wide leading-relaxed">Contact Us</h3>
                    <div className="flex w-full lg:justify-end gap-7 text-xl text-blue">
                        {
                            ContactInfo.map((nav, i) =>(
                                i !== 0 &&
                                <a href={nav.link} key={i}>
                                    <i className={`bi bi-${nav.icon}`}></i>
                                </a> 
                            
                            ))
                        }
                    </div>
                    {
                        ContactInfo.map((nav, i) =>(
                            nav.title &&                            
                            <a href={nav.link} key={i} className="text-b lue flex gap-3 w-full justify-start text-left lg:justify-end lg:text-right">
                                <i className={`bi bi-${nav.icon}`}></i>
                                {nav.title}
                            </a>
                            
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}

export default Footer;