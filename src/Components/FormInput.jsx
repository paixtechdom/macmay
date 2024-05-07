const FormInput = ({label, icon, value, setValue, type, placeholder}) => {
    return(
        <div className="flex flex-col w-full relative text-gray-100 text-sm z-0 gap-4">
        <label htmlFor="" className="bg-transparent px-4 flex items-center gap-3">
        {
            icon !== '' ? 
            <i className={`bi bi-${icon}`}></i> : ''
        } 
        {label} 
            </label>

        <div className="flex border border-blue-900 rounded-2xl shadow-lg center w-full overflow-hidden">
            <input type={type} placeholder="" className="bg-transparent bg-opacity-70 w-full p-3 pt-5 px-6 outline-none focus:initial" value={value} onChange={(e) => setValue(e.target.value)} required/>
            

        </div>
    </div>
        )
}

const SubmitButton = ({children, func, text, className}) => {
    return(
        <div className={`${className} rounded-2xl transition-all duration-1000 gap-3 text-xl p-3 center cursor-pointer hover:scale-90`} onClick={() => func()}>
            {text}

            {children}
        </div>
    )
}
export { FormInput, SubmitButton }