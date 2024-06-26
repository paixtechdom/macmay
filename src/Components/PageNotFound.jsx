import { Link } from "react-router-dom"
import { useEffect } from "react"

const PageNotFound = () => {
    useEffect(() => {
      document.documentElement.scrollTop = 0 
    }, [])

    return(

          <div className='pt-[10vh] w-full flex flex-col items-center justify-center h-[60vh] text-blue'>
          
            <div className="text-9xl flex items-end">4<i className="bi bi-exclamation-circle-fill h-fit text-8xl mb-3 bg-white center rounded-full"></i>4</div>
            <p className="text-xl">
              Page not found 
            </p>

          <Link className='mt-9 text-white bg-blue p-3 text-sm px-8 rounded-xl ' to='/'>Return to the Home Page <i className="bi bi-house-fill ml-2"></i></Link>
        </div>
    )
}

export default PageNotFound