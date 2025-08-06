import Footer from "../components/Footer";
import Header from "../components/Head";
import img from "./images/WhatsApp Image 2025-08-05 at 20.05.12_7d339912.jpg"

function Contact(){
    return <>
    <div className="pt-32 sm:pt-24">
    <Header />
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Contact Info & Map */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              📍
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              📞
            </div>
            <div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              ✉️
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email Us</h3>
              <p>info@example.com</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8913898040824!2d-74.01025308459516!3d40.71277577933106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3160be515b%3A0x9564cc96c9b1cb0f!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1666638484533!5m2!1sen!2sus"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Your Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Subject</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter subject"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
}


export default Contact