import { useState } from "react"

export const Button = ({text, func, type, icon, className, color}) => {
    const [ hovered, setHovered ] = useState(false)
    return(
        <div className={`center w-fit relative overflow-hidden ${type == 'primary' ? `bg-blue` : ``} rounded-full py-3 shadow-xl px-8 border ${type == 'on-green' ? 'border-white' : 'border-blue-900'} border-opacity-40 center cursor-pointer ${className}`} 
            onMouseOver={() => {
                setHovered(true)
            }}
            onMouseOut={() => {
                setHovered(false)
            }}
            onClick={() => func()}
        >
            <button 
                className={` ${
                    hovered ? 
                        
                        color == 'blue'  ? 
                            'text-white' : 
                            type == 'on-green' ? 'text-green' : 
                            `text-blue` : 
                        `text-${color}`} 
                    text-sm transition-all duration-500 hover:scale-90 active:scale-90 center z-10 gap-5 outline-none bg-transparent`}
                >
                    {text.toUpperCase()}
                    {
                        icon ?
                            <i className={`bi bi-${icon}`}></i> 
                        : ''
                    }   

            </button>
            <div className={`absolute h-full bg-${type == 'primary' || type == 'on-green' ? 'white' : 'blue'} right-0 transition-all duration-500 ${hovered ? 'w-full' : 'w-0'} z-0`}></div>         
        </div>
    )
}