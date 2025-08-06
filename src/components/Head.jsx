import { useState } from "react"
import { NavLink } from "react-router-dom"




function Header(){

    const [hidden, setChange] = useState(false)

    const handleHiden =()=>{
        setChange(!hidden)
    }

   
    return <>
     <div className="flex justify-around gap-20 py-2 fixed top-0 left-0 w-full bg-white text-black opacity-50 shadow-md z-10">
        <h1 className="text-3xl font-semibold">ABAAZ</h1>
        <i onClick={handleHiden} className="fa-solid fa-bars sm:hidden text-3xl"></i>
        <div style={{display: hidden=== true ? "block" : ""}} className="absolute sm:static  top-10 bg-white sm:bg-transparent sm:text-white sm:mt-0 text-black  sm:w-auto w-32 text-center mt-4 sm:space-y-0 space-y-3 sm:pb-0 pb-3 sm:flex hidden ">
        <ul className="sm:flex block   gap-10 text-2xl font-semibold">
            <NavLink to="/"><li className="">Home</li></NavLink>
            <NavLink to="/About"><li className="">About</li></NavLink>
            <NavLink to="/Contact"><li className="">Contact</li></NavLink>
            <NavLink to="/MyProject"><li className="sm:flex hidden">MyProject</li></NavLink>
        </ul>
        
        </div>
    </div>
    
     
    
    
    
    </>
}

export default Header