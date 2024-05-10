import { Link } from "react-router-dom";
import { ContactInfo, Logo, LogoGroup, NavInfo } from "../../assets/Constant";
import { useContext } from "react";
import { AppContext } from '../../App'
import { Parallax } from "../Parallax";

const Footer = () => {
    const { currentNav, currentDropDownIndex } = useContext(AppContext)
    return(
        <div className="center flex-col w-full min-h-[70vh] mt-[20vh] relative pt-[15vh]">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-fade opacity-20 z-10">
                
            </div>
            <div className="center absolute z-0 w-full h-full left-0 top-0 bg-white opacity-10">
                <img src={LogoGroup} alt="" className="z-[-1] w-3/12"/>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 lg:w-10/12 tracking-wide leading-relaxed gap-9 text-blue z-30">
                <div className="flex flex-col gap-3 cols-span-2">
                    <h3 className="font-bold text-blue text-3xl tracking-wide leading-relaxed">Macmay Group</h3>
                    <p className="text-blue tracking-wide leading-relaxed">We are a company which recognises the general lack of proper saving culture and investment practice amongst members of the society and we have stepped in to bridge the gap.</p>
                </div>
                <nav className="flex flex-col gap-3 md:items-end lg:items-center">
                    <h3 className="font-bold text-blue text-3xl tracking-wide leading-relaxed">Navigation</h3>
                    {
                        NavInfo.map((nav, i) =>(
                            i !== 2 ?
                            <Link key={i} to={`/${nav.link}`} className={`${currentNav == i ? 'font-bold text-green text-xl' : ''}`}>{nav.title}</Link> : ''
                        ))
                    }
                    {
                        NavInfo[2].sublinks.map((nav, i) =>(
                            <Link key={i} to={`/Companies/${nav.link}`} className={`${currentDropDownIndex == i && currentNav == 2 ? 'font-bold text-green text-xl' : ''}`}>{nav.title}</Link>
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

            <div className="border-t-4 border-orange text-center mt-[10vh] h-[15vh] w-full center gap-2 text-blue z-30">
                Copyright &copy; <strong className="text-xl font-bold">Macmay Group</strong> {new Date().getFullYear()} 
            </div>
        </div>
    )
}

export default Footer;