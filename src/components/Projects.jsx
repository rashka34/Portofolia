import { useState } from "react"
import img1 from "./images/blog-1.svg"
import img2 from "./images/blog3 (1).svg"
import img3 from "./images/blog4.svg"


function Projects(){

    const [hidden,setIsOpen] = useState(false)
     const handleIsopen=()=>{
        setIsOpen(!hidden)
     }
    
        return <>
      {/* Header */}
      <div className="space-y-2 mt-20 px-4">
        <h1 className="text-center text-3xl font-semibold">
          <i>My Projects</i>
        </h1>
        <ul className="text-center text-lg sm:text-2xl text-gray-500 font-medium">
          <li>
            Whether you have a mobile app idea that needs to come to life...
          </li>
          <li>...or a website that requires a facelift, I'm here to help.</li>
          <li>Turning your digital dreams into reality.</li>
        </ul>
      </div>

      {/* Project Cards */}
      <div className="mt-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="space-y-3 text-center bg-white p-4 shadow rounded-lg">
            <img src={img1} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold">Mobile App Development</h1>
            <p>
              App designed to help users discover and explore local restaurants
              and cuisines.
            </p>
          </div>

          <div className="space-y-3 text-center bg-white p-4 shadow rounded-lg">
            <img src={img2} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold">Mobile App Development</h1>
            <p>
              App designed to help users discover and explore local restaurants
              and cuisines.
            </p>
          </div>

          <div className="space-y-3 text-center bg-white p-4 shadow rounded-lg">
            <img src={img3} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold">E-commerce Development</h1>
            <p>
              Ecommerce site offering the latest gadgets and accessories.
            </p>
          </div>
        </div>
      </div>

      {/* More Events */}
      {hidden && (
        <div className="mt-16 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="space-y-3 text-center bg-white p-4 shadow rounded-lg">
              <img src={img1} alt="" className="mx-auto" />
              <h1 className="text-xl font-semibold">Mobile App Development</h1>
              <p>
                App designed to help users discover and explore local
                restaurants and cuisines.
              </p>
            </div>

            <div className="space-y-3 text-center bg-white p-4 shadow rounded-lg">
              <img src={img2} alt="" className="mx-auto" />
              <h1 className="text-xl font-semibold">Mobile App Development</h1>
              <p>
                App designed to help users discover and explore local
                restaurants and cuisines.
              </p>
            </div>

            <div className="space-y-3 text-center bg-white p-4 shadow rounded-lg">
              <img src={img3} alt="" className="mx-auto" />
              <h1 className="text-xl font-semibold">E-commerce Development</h1>
              <p>
                Ecommerce site offering the latest gadgets and accessories.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Button */}
      <div className="mt-10 mb-20 text-center">
        <button
          onClick={handleIsopen}
          className="bg-black text-white px-12 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          {hidden ? "Show Less" : "More Events"}
        </button>
      </div>
    </>
}

export default Projects