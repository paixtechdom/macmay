import { useState } from "react"
import img from '../../assets/images/IMG_20231017_045825_4862.jpg'


export const ContactForm = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ sending, setSending ] = useState(false)


    return(
        <form action="" className="center flex-col w-11/12 lg:w-10/12">
            
            <div className="center flex-col lg:flex-row w-full gap-[100px]">
                <div className="flex flex-col w-full gap-5 lg:w-6/12 shadow-xl p-9 rounded-3xl">
                    <h2 className="text-5xl font-bold text-green w-full mb-[5vh]">Send Us A Message</h2>
                    <FormInput value={name} setValue={setName} icon={'person-fill'} label={'Enter Your Name'} htmlFor={'Name'} type={'text'}/>
                    <FormInput value={email} setValue={setEmail} icon={'envelope-fill'} label={'Enter Your Email'} htmlFor={'Email'} type={'email'}/>
                    <FormInput value={subject} setValue={setSubject} icon={'person-fill'} label={'Subject'} htmlFor={'Subject'} type={'text'}/>



                    <div className="center flex-col w-full gap-2">
                        <div className="flex w-full items-center gap-3">
                            <i className={`bi bi-chat-dots-fill center text-blue`}></i>
                            <label htmlFor={'Message'} className="text-blue w-full">Enter Your Message</label>

                        </div>

                        <textarea value={message} onChange={(e) => {
                            setMessage(e.target.value)
                        }} 
                        className="w-full outline-none bg-transparent px-4 text-blue min-h-[15vh] max-h-[15vh]  rounded-xl w-full shadow-xl bg-gray-100"></textarea>
                    </div>

                    <div className="w-full bg-blue mt-4 shadow-xl bg-gray-100 rounded-2xl h-[8vh] center text-xl text-white">
                        {
                            sending ? 'Sending Message' : 
                                <>
                                    Send Message
                                    <i className="bi bi-cursor-fill ml-3"></i>
                                </>
                        }

                    </div>
                </div>

                <div className="lg:w-6/12 flex justify-center lg:justify-end items-center">
                   <img src={img} alt="Macmay Logo for Contact Image" className="rounded-2xl shadow-2xl w-9/12"/>
                </div>


            </div>


        </form>
    )
}



const FormInput = ({value, setValue, icon, label, htmlFor, type}) => {
    return(
        <div className="center flex-col w-full gap-2">
            <div className="flex w-full items-center gap-3">
                <i className={`bi bi-${icon} center text-blue`}></i>
                <label htmlFor={htmlFor} className="text-blue">{label}</label>
  
            </div>

            <input type={type} value={value} onChange={(e) => {
                setValue(e.target.value)
            }} 
            className="w-full outline-none bg-transparent px-4 text-blue shadow-xl bg-gray-100 rounded-xl h-[7vh] w-full"/>
        </div>
    )
}