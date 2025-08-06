
import { useState } from "react"
import img from "./images/blog-1.svg"
import imgt from "./images/blog3.svg"
import imgh from "./images/blog4.svg"


function MyProject(){
    const [hidden, setIsOpen] = useState(false)
 const handleIsopen=()=>{
    setIsOpen(!hidden)
 }

    return <>
    <div className="space-y-2 mt-20">
        <h1 className="text-center text-3xl font-semibold"><i>My projucts</i> </h1>
        <ul className="text-center text-2xl text-gray-400 font-semibold">
            <li>Whether you have a mobile app idea that needs to come to</li>
            <li>life or a website that requires a facelift, I'm here to turn your</li>
            <li className="ml-20x">digital dreams into reality.</li>
        </ul>
    </div>
    <div>
        <div className="mt-20 flex gap-10 justify-around ">
            <div className="space-y-3">
                <img src={img} alt="" />
                <h1 className="text-xl font-semibold">Mobile App Development</h1>
                <p>Mobile app designed to help users <br />discover and explore local <br />restaurants and cuisines.</p>
            </div>
            <div className="space-y-3">
                <img src={imgt} alt="" />
                <h1 className="text-xl font-semibold">Mobile App Development</h1>
                <p>Mobile app designed to help users <br />discover and explore local <br />restaurants and cuisines.</p>
            </div>
            <div className="space-y-3">
                <img src={imgh} alt="" />
                <h1 className="text-xl font-semibold">E-commerce development</h1>
                <p>Ecommerce website offering access <br />to the latest and greatest <br />gadgets and accessories.</p>
            </div>
        </div>
    </div>
    <div  className="mt-16 mb-20">
        <div style={{display: hidden=== false ? "none" :""}} className="mt-20 sm:flex gap-10 justify-around hidden">
            <div className="space-y-3">
                <img src={img} alt="" />
                <h1 className="text-xl font-semibold">Mobile App Development</h1>
                <p>Mobile app designed to help users <br />discover and explore local <br />restaurants and cuisines.</p>
            </div>
            <div className="space-y-3">
                <img src={imgt} alt="" />
                <h1 className="text-xl font-semibold">Mobile App Development</h1>
                <p>Mobile app designed to help users <br />discover and explore local <br />restaurants and cuisines.</p>
            </div>
            <div className="space-y-3">
                <img src={imgh} alt="" />
                <h1 className="text-xl font-semibold">E-commerce development</h1>
                <p>Ecommerce website offering access <br />to the latest and greatest <br />gadgets and accessories.</p>
            </div>
        </div>
    </div>
    <button onClick={handleIsopen} className="bg-black text-white px-12 py-2 rounded-lg ml-[40%] mb-10">More Events</button>
    </>
}

export default MyProject 