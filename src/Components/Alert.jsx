import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import { Button } from "./Buttons"

export const Alert = () =>{
    const { setAlert, alertMessage, alertType } = useContext(AppContext)

    const [ showAlert, setShowAlert ] = useState(false)
    useEffect(() => {
        setShowAlert(true)
    }, [])
    return(
        <div className="fixed z-50 top-0 left-0 h-screen w-full bg-black blue-200 bg-opacity-70 flex items-end justify-center">

            <div className={`w-full md:w-10/12 lg:w-7/12 bg-white center rounded-t-2xl shadow-blue transition-all duration-1000 ${showAlert ? '' : 'translate-y-[100%]'}`}>
                <div className={`w-9/12 center flex-col gap-2 my-9 text-${alertType == 'success' ? 'green' : alertType == 'error' ? 'red-800' : ''}`}>
                    <i className={`bi bi-${alertType == 'success' ? 'check' : alertType == 'error' ? 'x' : ''}-circle-fill text-6xl 
                    `}></i>

                    <h2 className={`font-bold text-xl text-center`}>{alertType == 'success' ? 'Message sent successfully' : alertType == 'error' ? 'Error sending message' : ''}</h2>

                    <p className="text-blue my-6 text-center">{alertMessage}</p>


                    <Button text={'close'} icon={'chevron-down'} color={'blue'} className={'font-bold w-full'} func={() => {
                        setShowAlert(false)
                        setTimeout(() => {
                            setAlert(false)
                        }, 1000);
                    }}/>
                </div>  
            </div>

        </div>
    )
}