import { FaXTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-8">
      <h1 className="text-4xl font-bold text-gray-800">AbaaZ14</h1>
      <p className="italic text-gray-600 mt-2 max-w-xl mx-auto">
        welcome to My PortoFloia
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6">
       <IconWrapper><FaXTwitter /></IconWrapper>
      <IconWrapper><FaFacebookF /></IconWrapper>
      <IconWrapper><FaInstagram /></IconWrapper>
      <IconWrapper><FaSkype /></IconWrapper>
      <IconWrapper><FaLinkedinIn /></IconWrapper>
      <IconWrapper><FaEnvelope /></IconWrapper>

        {/* Phone Icon with link */}
        <a href="tel:6165589799" className="bg-blue-700 text-white p-3 rounded-full text-xl hover:bg-blue-800 transition">
          <FaPhone />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-sm text-gray-600">
        <p>
          Copyright <strong>Alex Smith</strong> All Rights Reserved
        </p>
        <p className="mt-1">
          Designed by <a href="#" className="text-blue-600">BootstrapMade</a> Distributed by <a href="#" className="text-blue-600">ThemeWagon</a>
        </p>
      </div>
    </footer>
  );
}

function IconWrapper({ children }) {
  return (
    <div className="bg-blue-700 text-white p-3 rounded-full text-xl hover:bg-blue-800 cursor-pointer transition">
      {children}
    </div>
  );
}

export default Footer
