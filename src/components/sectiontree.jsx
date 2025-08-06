
import img from "./images/testimonials-1.jpg"
import img1 from "./images/testimonials-2.jpg"
import img2 from "./images/testimonials-3.jpg"
import img3 from "./images/testimonials-4.jpg"


function Others(){

    return <>
      {/* Title Section */}
      <div className="mt-10 space-y-3 px-4">
        <h1 className="text-center text-4xl font-semibold">What Clients Say</h1>
        <p className="text-center text-gray-400 font-medium text-lg">
          Discover what clients have to say about their experiences working with me.
          <br className="hidden sm:block" />
          My client's satisfaction is my greatest achievement!
        </p>
      </div>

      {/* Testimonials Container */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-y-10 lg:gap-x-20 mt-20 px-6 mb-20">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-10 w-full lg:w-1/2">
          {/* Testimonial 1 */}
          <div className="space-y-2 bg-white p-4 shadow-md rounded-lg text-center">
            <img className="rounded-full w-20 mx-auto" src={img} alt="Client 1" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque. Incidunt, facilis.
            </p>
            <div className="text-yellow-400 text-xl">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star-half" />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="space-y-2 bg-white p-4 shadow-md rounded-lg text-center">
            <img className="rounded-full w-20 mx-auto" src={img1} alt="Client 2" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque. Incidunt, facilis.
            </p>
            <div className="text-yellow-400 text-xl">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-10 w-full lg:w-1/2">
          {/* Testimonial 3 */}
          <div className="space-y-2 bg-white p-4 shadow-md rounded-lg text-center">
            <img className="rounded-full w-20 mx-auto" src={img2} alt="Client 3" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque. Incidunt, facilis.
            </p>
            <div className="text-yellow-400 text-xl">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="space-y-2 bg-white p-4 shadow-md rounded-lg text-center">
            <img className="rounded-full w-20 mx-auto" src={img3} alt="Client 4" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque. Incidunt, facilis.
            </p>
            <div className="text-yellow-400 text-xl">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star-half" />
            </div>
          </div>
        </div>
      </div>
    </>
}
export default Others