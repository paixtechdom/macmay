import { useContext, useEffect, useState } from "react"
import img from '../../assets/images/IMG_20231017_045825_48622.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Parallax, ParallaxRight } from "../../Components/Parallax"
import { AppContext } from "../../App"


export const ContactForm = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ sending, setSending ] = useState(false)

    const {  setAlert, setAlertMessage, setAlertType } = useContext(AppContext)

    const alert = (isSent) => {
        setAlert(true)
        setAlertMessage(isSent ? 'A response will be sent to the email provided' : 'There was an error sending your message, kindly try again')
        setAlertType(isSent ? 'success' : 'error')
        setName(isSent ? '' : name)
        setEmail(isSent ? '' : email)
        setSubject(isSent ? '' : subject)
        setMessage(isSent ? '' : message)
    }
    // useEffect(() => {
        // alert(false)
    // }, [])

    return(
        <form id="contactform" action="" className="center flex-col w-11/12 lg:w-10/12" onSubmit={(e) => {
            e.preventDefault()
            alert(false)
            }}>
            
            <div className="center flex-col lg:flex-row w-full gap-[100px]">
                <div className="flex flex-col w-full gap-5 lg:w-7/12 md:shadow-xl lg:p-9 rounded-3xl">
                    <h2 className="text-4xl lg:text-5xl font-bold text-green w-full mb-[5vh]">Send Us A Message</h2>
                    <Parallax id={'name'}>
                        <FormInput value={name} setValue={setName} icon={'person-fill'} label={'Full Name (Required)'} htmlFor={'Name'} type={'text'} isRequired={true}/>
                    </Parallax>
                    <ParallaxRight id={'email'}>
                        <FormInput value={email} setValue={setEmail} icon={'envelope-fill'} label={'Email (Required)'} htmlFor={'Email'} type={'email'} isRequired={true}/>
                    </ParallaxRight>
                    <Parallax id={'messagesubject'}>
                        <FormInput value={subject} setValue={setSubject} icon={'file-text'} label={'Subject'} htmlFor={'Subject'} type={'text'} isRequired={false}/>
                    </Parallax>

                    <ParallaxRight id={'message'}>
                        <div className="center flex-col w-full gap-2">
                            <div className="flex w-full items-center gap-3">
                                <i className={`bi bi-chat-dots-fill center text-blue`}></i>
                                <label htmlFor={'Message'} className="text-blue w-full">Enter Your Message</label>

                            </div>

                            <textarea value={message} onChange={(e) => {
                                setMessage(e.target.value)
                            }} 
                            className="w-full outline-none bg-transparent px-4 text-blue min-h-[15vh] max-h-[15vh]  rounded-xl w-full shadow-xl bg-gray-100" required></textarea>
                        </div>
                    </ParallaxRight>
                    <Parallax id={'send'}>
                        <button type="submit" className="w-full bg-blue mt-4 shadow-xl bg-gray-100 rounded-2xl h-[8vh] center text-xl text-white transition-all duration-500 hover:scale-90 active:scale-90">
                            {
                                sending ? 'Sending Message' : 
                                    <>
                                        Send Message
                                        <i className="bi bi-cursor-fill ml-3"></i>
                                    </>
                            }

                        </button>
                    </Parallax>

                </div>

                <div className="lg:w-5/12 center justify-center lg:justify-end items-center">
                    <ParallaxRight id={'macmayicon'} clas={'w-9/12'}>
                        <LazyLoadImage 
                            src={img} 
                            placeholderSrc="Macmay Logo for Contact Image" 
                            className="rounded-2xl shadow-2xl w-full"
                            effect="blur"
                        />
                    </ParallaxRight>
                </div>


            </div>


        </form>
    )
}



const FormInput = ({value, setValue, icon, label, htmlFor, type, isRequired}) => {
    return(
        <div className="center flex-col w-full gap-2">
            <div className="flex w-full items-center gap-3">
                <i className={`bi bi-${icon} center text-blue`}></i>
                <label htmlFor={htmlFor} className="text-blue">{label}</label>
  
            </div>

            <input type={type} value={value} onChange={(e) => {
                setValue(e.target.value)
            }} 
            className="w-full outline-none bg-transparent px-4 text-blue shadow-xl bg-gray-100 rounded-xl h-[7vh] w-full"
            required={isRequired}
            />
        </div>
    )
}