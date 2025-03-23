import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className=" py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        
      
        <a
          href="https://www.linkedin.com/in/abhinav-anand-324b13223/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin size={28} className="text-blue-400" />
        </a>

     
        <a
          href="https://github.com/Abhinav-3359"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub size={28} className="text-pink-400" />
        </a>

        <a
          href="mailto:abhinavanand031@gmail.com"
          className="hover:text-red-400 transition"
        >
          <FaEnvelope size={28} className="text-red-400" />
        </a>

        <a
          href="tel:+916204406343"
          className="hover:text-green-400 transition"
        >
          <FiPhone size={28} className="text-green-400" />
        </a>

      </div>
      <p className="text-center text-sm mt-2 text-gray-400">
        © {new Date().getFullYear()} Abhinav | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
