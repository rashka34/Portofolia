import Header from "../components/Head"
import img from "./images/WhatsApp Image 2025-08-05 at 20.05.12_7d339912.jpg"

function About (){
    return <div className="pt-32 sm:pt-24">
        <Header />
        <div className="flex flex-col  lg:flex-row items-center lg:items-start p-6 gap-10 max-w-6xl mx-auto">
      
      {/* Sawirka */}
      <div className="w-full  lg:w-1/3 flex justify-center">
        <img
          src={img}
          alt="Profile"
          className="rounded-lg object-cover w-64 h-80 shadow-md"
        />
      </div>

      {/* Qaybta Dhexe: Title iyo Info */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">UI/UX Designer & Web Developer</h2>
        <p className="italic text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
          <p><span className="font-semibold">🎂 Birthday:</span> 1 May 1995</p>
          <p><span className="font-semibold">🎈 Age:</span> 30</p>
          <p><span className="font-semibold">🌐 Website:</span> www.example.com</p>
          <p><span className="font-semibold">🎓 Degree:</span> Master</p>
          <p><span className="font-semibold">📞 Phone:</span> +123 456 7890</p>
          <p><span className="font-semibold">✉️ Email:</span> email@example.com</p>
          <p><span className="font-semibold">🏙️ City:</span> New York, USA</p>
          <p><span className="font-semibold">💼 Freelance:</span> Available</p>
        </div>
        <div className="w-full mt-6">
        <p className="text-gray-700">
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut.
        </p>
      </div>
      </div>

      {/* Qaybta Saddexaad: Footer Text */}
      
    </div>

    </div>
}

export default About