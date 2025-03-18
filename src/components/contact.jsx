
import { FaLinkedin, FaGithub, FaEnvelope,FaFilePdf } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 className="text-3xl font-bold mb-8">Connect with Me</h1>

    <div className="space-y-6 w-full max-w-md">
  
      <a
        href="https://www.linkedin.com/in/abhinav-anand-324b13223/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition"
      >
        <FaLinkedin size={30} className="text-blue-400" />
        <span className="text-lg">LinkedIn</span>
      </a>


      <a
        href="https://github.com/Abhinav-3359"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition"
      >
        <FaGithub size={30} className="text-white" />
        <span className="text-lg">GitHub</span>
      </a>

      <a
        href="mailto:abhinavanand031@gmail.com"
        className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition"
      >
        <FaEnvelope size={30} className="text-red-400" />
        <span className="text-lg">abhinavanand031@gmail.com</span>
      </a>

      <a
        href="tel:+916204406343"
        className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition"
      >
        <FiPhone size={30} className="text-green-400" />
        <span className="text-lg">+91 6204406343</span>
      </a>

      <a
          href="\Abhinav_latest (2).pdf"
          download="Abhinav_Resume.pdf"
          className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition"
        >
          <FaFilePdf size={30} className="text-red-500" />
          <span>Download Resume</span>
        </a>
    </div>
  </div>
  );
};

export default Contact;
