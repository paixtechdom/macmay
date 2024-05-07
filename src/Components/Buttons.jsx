export const Button = ({text, func, type, icon, className}) => {
    return(
        <button 
            onClick={() => func()} 
            className={`${type == 'primary' ? 'bg-blue text-white' : 'text-blue'} text-sm py-3 shadow-xl px-8 rounded-full border border-blue-900 border-opacity-40 center transition-all duration-500 hover:scale-90 active:scale-90  gap-5 ${className}`}>
                {text.toUpperCase()}
                {
                    icon ?
                        <i className={`bi bi-${icon}`}></i> 
                    : ''
                }            
        </button>
    )
}